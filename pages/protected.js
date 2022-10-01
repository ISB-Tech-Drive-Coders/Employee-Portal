import { supabase } from '../client'

export default function Protected({ user }) {
  console.log({ user })
  return (
    <div>
      <div style={{ maxWidth: '500px', margin: '96px auto' }}>
      <h1>Home</h1>
      </div>
      <div style={{ maxWidth: '300px', marign: '96px auto' }}>
      <a href="/pages/mainmail.js"><h3>Main Mail </h3></a>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    return { props: {}, redirect: { destination: '/' } }
  }

  return { props: { user } }
}