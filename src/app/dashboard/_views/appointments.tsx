import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
const appointments = [
    { id: 1, petName: 'Charlie', ownerName: 'Emma Wilson', date: '2023-10-15', time: '10:00 AM' },
    { id: 2, petName: 'Luna', ownerName: 'Oliver Brown', date: '2023-10-16', time: '2:00 PM' },
    { id: 3, petName: 'Rocky', ownerName: 'Sophia Davis', date: '2023-10-17', time: '11:30 AM' },
]
export default function Appointments() {
  return (
    <main className="h-full grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 lg:py-6 lg:px-8">
      <h1 className='text-2xl font-semibold text-black/70 col-span-full'>Appointments</h1>
    {appointments.map((appointment) => (
      <Card key={appointment.id} className='aspect-video'>
        <CardHeader>
          <CardTitle>{appointment.petName}</CardTitle>
          <CardDescription>{appointment.ownerName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
        </CardContent>
      </Card>
    ))}
  </main>
  )
}
