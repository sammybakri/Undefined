import React, { useState, useEffect } from 'react';
import { doc, getDoc, collectionGroup, getDocs, query } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';

export default function useFetchData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState(null);
  const [posts, setPosts] = useState([]);

  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setTodos(userDocSnap.data().todos);
        } else {
          setTodos({});
        }

        const postsQuery = query(collectionGroup(db, 'posts'));
        const postsQuerySnapshot = await getDocs(postsQuery);

        const postsData = [];
        postsQuerySnapshot.forEach((postDoc) => {
          postsData.push(postDoc.data());
        });
        setPosts(postsData);
      } catch (err) {
        setError('Failed to load data');
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { loading, error, todos, posts, setTodos };
}
