"use client";
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { DogIcon } from 'lucide-react';
import { useDebounce } from '@/hooks/debounce';
import LoadingSpinner from './ui/loading-spinner';
type TListItem = {
    id: number;
    name: string;
    type: string;
    breed: string;
    owner: string;
    contact: string;
    stayLength: number;
    image?: StaticImageData;
}
export default function PetSearch({ list }: { list: TListItem[] }) {
    const [search, setSearch] = useState("");
    const [debouncedSearch, loading] = useDebounce(search);
    const filtered = list.filter((i) => i.name.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase()))
    return (
        <>
            <form action="">
                <Label htmlFor='search'>Search for a pet</Label>
                <Input id="search" name="search" className='w-full max-w-xs' placeholder='Maxamillion' value={search} onChange={e => setSearch(e.target.value)} />
            </form>
            <ScrollArea className='h-[12rem]'>
                {!loading ? (filtered.length > 0 ? filtered.map(p => <ListItem key={p.id} pet={p} />) : <NoResults search={search} />) : <LoadingSpinner />}
            </ScrollArea>
        </>
    )
}

function ListItem({ pet }: { pet: TListItem }) {
    return (
        <Button variant={"ghost"} className='block w-full h-fit'>
            <div key={pet.id} className='flex items-center gap-x-4'>
                {pet.image ?
                    <div className='size-10 rounded-full overflow-hidden'>
                        <Image src={pet.image} alt="" className='w-full object-cover' />
                    </div> :
                    <div className='size-10 p-2 rounded-full overflow-hidden'>
                        <DogIcon className='w-full h-full text-black/70' />
                    </div>}
                <div className='flex flex-col text-sm text-left'>
                    <span>{pet.name}</span>
                    <span className='text-sm text-black/70'>Owner: {pet.owner}</span>
                </div>
                <span className='ml-auto'>
                    {pet.stayLength}D
                </span>
            </div>
        </Button>
    )
}

function NoResults({ search }: { search: string }) {
    return (
    <div className='grid place-content-center h-full w-full text-black/70'>
        <span>No pets with name &quot;<span className='font-semibold text-black'>{search}</span>&quot;</span>
    </div>
    )
}