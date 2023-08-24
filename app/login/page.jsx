'use client'
import LoginForm from "@/components/LoginForm"
import { useState } from "react"

const page = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    < LoginForm
      user={user}
      setUser={setUser}
      error={error}
      setError={setError}
      handleSubmit = {handleSubmit}
    />
  )
}

export default page
