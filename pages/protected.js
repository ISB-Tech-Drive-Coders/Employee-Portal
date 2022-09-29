import { supabase } from '../client'

export default function Protected({ user }) {
  console.log({ user })
  return (
    <div>
      <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h1>Welcome to the ISBSEG Volunteer Page</h1>
      </div>
      <div className="text-blue">
      <a href="/pages/videochat.js"><h3>Conferencing </h3></a>
      </div>
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