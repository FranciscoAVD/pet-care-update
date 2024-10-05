import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Home() {
  return (
    <main className='grid place-content-center gap-4 h-screen'>
      <h1 className='text-7xl font-bold'>Landing page</h1>
      <Button variant={"secondary"} asChild><Link href="/dashboard">Dashboard</Link></Button>
    </main>
  )
}
