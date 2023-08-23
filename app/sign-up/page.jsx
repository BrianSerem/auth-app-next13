'use client'
import { useState } from "react"
import RegisterForm from "@/components/RegisterForm"
import { useRouter } from "next/navigation"


const page = () => {

  const [user, setUser] = useState({
    email: '',
    password1: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const [registering, setRegistering] = useState(false)
  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    setRegistering(true)
    setError('')
    if (user.password1 !== user.password2) {
      setError('Passwords do not match, please check again')
      return

    } else {
      // Do some logic to sign up user then redirect them to their dashboard
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password1
          })
        });

        if (res.status !== 201) {
          const error = await res.json()
          setError(error.message)
          setRegistering(false)
          return
        }
        setRegistering(false)
        router.push('/login')



      } catch (error) {
      }


    }
  }


  return (
    <RegisterForm
      onSubmit={onSubmit}
      setUser={setUser}
      user={user}
      error={error}
      registering={registering}
      setError={setError}
    />
  )
}

export default page
