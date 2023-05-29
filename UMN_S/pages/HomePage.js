import React, { useEffect, useState } from 'react';
import useFetchTodos from '../hooks/fetchTodos';



export default function HomePage() {
  const { todos, setTodos, loading, error } = useFetchTodos()
 
  console.log('sdgfdkngs',todos)

 
  return (
    <div>
      <h1>Home</h1>
      {/* Add your feedback form or content here */}
    </div>
  );
}
