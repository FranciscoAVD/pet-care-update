import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
const boardedPets = [
    { id: 1, name: 'Max', type: 'Dog', breed: 'Labrador', owner: 'John Doe', contact: '123-456-7890' },
    { id: 2, name: 'Whiskers', type: 'Cat', breed: 'Siamese', owner: 'Jane Smith', contact: '098-765-4321' },
    { id: 3, name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', owner: 'Mike Johnson', contact: '555-123-4567' },
]
export default function Main() {
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4 bg-muted">
    {boardedPets.map((pet) => (
      <Card key={pet.id} className='aspect-video'>
        <CardHeader>
          <CardTitle>{pet.name}</CardTitle>
          <CardDescription>{pet.type} - {pet.breed}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Owner: {pet.owner}</p>
          <p>Contact: {pet.contact}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-2">View Details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{pet.name}</DialogTitle>
                <DialogDescription>{pet.type} - {pet.breed}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="owner" className="text-right">
                    Owner
                  </Label>
                  <Input id="owner" value={pet.owner} className="col-span-3" readOnly />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="contact" className="text-right">
                    Contact
                  </Label>
                  <Input id="contact" value={pet.contact} className="col-span-3" readOnly />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    ))}</main>
  )
}
