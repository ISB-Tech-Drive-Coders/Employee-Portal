import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useRouter } from 'next/router';

export default function events({ user }) {
  console.log({ user })
  return (
    <div>
      <h1>Main Calendar</h1>
        <iframe src="https://outlook.live.com/owa/calendar/7afad185-3826-4b1b-bab7-ec3afbbf9f6d/50b4cc17-964f-4fa5-98ec-bc75d64cb11d/cid-3788AF48DE12EACF/index.html" width={1000} height={500} ></iframe>
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