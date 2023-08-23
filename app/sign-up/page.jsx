'use client'
import { useState } from "react"
import RegisterForm from "@/components/RegisterForm"


const page = () => {

  const [user, setUser] = useState({
    email: '',
    password1: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const [registering, setRegistering] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setRegistering(true)
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
        }

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
      registering={registering} />
  )
}

export default page
