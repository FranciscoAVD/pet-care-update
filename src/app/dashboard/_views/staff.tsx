import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
const staff = [
    { id: 1, name: 'Alice Johnson', role: 'Veterinarian', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 2, name: 'Bob Smith', role: 'Groomer', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 3, name: 'Carol Williams', role: 'Caretaker', avatar: '/placeholder.svg?height=40&width=40' },
]
export default function Staff() {
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 bg-muted">
    {staff.map((member) => (
      <Card key={member.id} className='aspect-video'>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    ))}
  </main>
  )
}
