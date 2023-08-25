'use client'
import LoginForm from "@/components/LoginForm"
import { useState } from "react"
import { signIn } from "next-auth/react"
import {useRouter} from "next/navigation"

const LoginPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('');
  const [loggingIn, setLoggingIn ] =useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoggingIn(true)
    setError('')

    try {

       const res = await signIn('credentials', {...user, redirect : false})
       console.log(res)
       if(res.error){
        setError('Invalid Credentials, please check again')
        setLoggingIn(false)
        return
       }
       router.replace('/');
    } catch (error) {
      console.log(error)

    }
  }
  console.log(user)
  return (
    < LoginForm
      user={user}
      setUser={setUser}
      error={error}
      setError={setError}
      handleSubmit = {handleSubmit}
      loggingIn={loggingIn}
    />
  )
}

export default LoginPage
