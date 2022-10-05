import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function events({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>News!</h1>
      <div>
        <h3>
            MacBooks For Club Members!
        </h3>
        <p>
            Ms. Shih has granted the members of the ISB Coding Club / Tech MacBooks for club use! The MacBooks may not be taken home, but they are the same unit every club event. This allows us to dive deeper and get setup quicker. Goooooooo Dragons!
        </p>
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