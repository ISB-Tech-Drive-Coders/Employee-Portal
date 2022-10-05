import { supabase } from '../client';
import Link from 'next/link';

export default function Protected({ user }) {
  console.log({ user })
  return (
    <div>
      <div style={{ maxWidth: '500px', margin: '96px auto' }}>
      <h1>Home</h1>
      </div>
      <div style={{ maxWidth: '300px', margin: '96px auto' }}>
      <Link to="/events"><h3>Events/Schedule</h3></Link>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/index' } }
  }

  return { props: { user } }
}