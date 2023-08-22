'use client'
import { useState } from "react"
import RegisterForm from "@/components/RegisterForm"


const page = () => {

  const [ user, setUser ] = useState({
    email: '',
    password1: '',
    password2: ''
  });
  const [error, setError ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    if(user.password1 !== user.password2){
      setError('Passwords do not match, please check again')
      return

    } else {
      // Do some logic to sign up user then redirect them to their dashboard
       console.log('signing you in now...')}


  }


  return (
    <RegisterForm onSubmit={onSubmit} setUser={setUser} user={user} error={error}/>
  )
}

export default page
