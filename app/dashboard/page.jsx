import Dashboard from '@/components/Dashboard';
import { useSession } from 'next-auth/react';

const dashboardPage = () => {

  const { data: session } = useSession()

  return (

    <Dashboard session = {session }/>
  )
}

export  const metadata = {
  title: 'your dashboard'
}

export default dashboardPage
