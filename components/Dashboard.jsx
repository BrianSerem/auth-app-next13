'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Dashboard = () => {

  const { data: session } = useSession()
  
  return (
    <div className='text-center'>
      <h1> {session?.user.email}</h1>
      <h1> {session?.user.email}</h1>
      <button
        onClick={() => signOut()}
        className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Log out
      </button>
    </div>
  )
}

export default Dashboard
