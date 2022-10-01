import { useState, useEffect } from 'react';
import { supabase } from '../client'
import { useRouter } from 'next/router'

export default function events({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>ISBSEG Events </h1>
      <div>
        
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