
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { PawPrintIcon, HomeIcon, UsersIcon, ActivityIcon } from 'lucide-react'
import stock from "../../../../public/stock.jpg"
import stock2 from "../../../../public/stock2.jpg"
import PetSearch from '@/components/pet-search'
const boardedPets = [
  { id: 1, name: 'Max', type: 'Dog', breed: 'Labrador', owner: 'John Doe', contact: '123-456-7890', stayLength: Math.floor(Math.random() * 10) + 1, image: stock },
  { id: 2, name: 'Whiskers', type: 'Cat', breed: 'Siamese', owner: 'Jane Smith', contact: '098-765-4321', stayLength: Math.floor(Math.random() * 10) + 1 },
  { id: 3, name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', owner: 'Mike Johnson', contact: '555-123-4567', stayLength: Math.floor(Math.random() * 10) + 1 },
  { id: 4, name: 'Max', type: 'Dog', breed: 'Labrador', owner: 'John Doe', contact: '123-456-7890', stayLength: Math.floor(Math.random() * 10) + 1, image: stock2 },
  { id: 5, name: 'Whiskers', type: 'Cat', breed: 'Siamese', owner: 'Jane Smith', contact: '098-765-4321', stayLength: Math.floor(Math.random() * 10) + 1 },
  { id: 6, name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', owner: 'Mike Johnson', contact: '555-123-4567', stayLength: Math.floor(Math.random() * 10) + 1 },
]
const insights = [
  { label: "Current Boarders", value: 28, icon: PawPrintIcon },
  { label: "Upcoming Check-ins", value: 5, icon: UsersIcon },
  { label: "Active Bookings", value: 16, icon: ActivityIcon },
  { label: "Available Spaces", value: 12, icon: HomeIcon },
]
const data = [
  {
    name: "Week 1",
    total: 25,
  },
  {
    name: "Week 2",
    total: 15,
  },
  {
    name: "Week 3",
    total: 18,
  },
  {
    name: "Week 4",
    total: 20,
  },
]
export default function Main() {
  return (
    <main className="h-full p-4 lg:py-6 lg:px-10 space-y-6">
      <h1 className='text-2xl font-semibold text-black/70'>Summary</h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {insights.map(i => (
          <Card key={i.label}>
            <CardHeader>
              <CardTitle className='flex justify-between items-center text-base font-normal'>{i.label}<i.icon className='size-5 text-primary' /></CardTitle>
            </CardHeader>
            <CardContent className='text-3xl font-bold'>
              {i.value}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='grid xl:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>Current Boarders</CardTitle>
            <CardDescription>List of pets currently staying with us</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <PetSearch list={boardedPets}/>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Check-ins</CardTitle>
            <CardDescription>Pets arriving tomorrow</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
              <PetSearch list={boardedPets} />
          </CardContent>
        </Card>
        <Card className="col-span-full">
            <CardHeader>
              <CardTitle className='flex justify-between flex-wrap gap-x-2'>Occupancy Overview <span className='font-normal'>&#40;{new Date().toLocaleDateString("en-us",{month: "long"})}&#41;</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Bar dataKey="total" fill="rgb(163,230,53)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
      </div>
    </main>
  )
}

//hsl(142.1,76.2%,36.3%)
//rgb(163,230,53)