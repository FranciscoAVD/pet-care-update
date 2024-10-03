import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className='grid place-content-center'>
      <h1 className='text-7xl font-bold'>Home page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
