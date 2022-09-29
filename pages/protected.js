import { supabase } from '../client'

export default function Protected({ user }) {
  console.log({ user })
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h1>Welcome to the ISBSEG Volunteer Page</h1>
      <a href="/pages/videochat.js"><h3>ISBSEG Video Chat</h3></a>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/sign-in' } }
  }

  return { props: { user } }
}