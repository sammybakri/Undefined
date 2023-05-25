import { useAuth } from '@/context/AuthContext'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard'


export default function Home(){
    const {currentUser} = useAuth()
return(
<>
<head>
<title></title>
<link rel = "icon" href = "/favicon.ico"/>

</head>
{!currentUser &&<Login/>}
{currentUser &&<UserDashboard/>}


</>
)}