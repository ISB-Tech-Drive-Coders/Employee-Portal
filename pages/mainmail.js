import { supabase } from '../client'

export default function mainmail({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>ISBtechdrive@hotmail.com MailBox Embed/h1>
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