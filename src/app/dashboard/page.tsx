"use client";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import Main from "./_views/main";
import Staff from "./_views/staff";
import Appointments from "./_views/appointments";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PawPrintIcon, CalendarIcon, UsersIcon, HouseIcon, SettingsIcon,LucideProps, MenuIcon, XIcon, CircleDollarSignIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Insights from "./_views/insights";
type TViews = "main" | "appointments" | "staff" | "insights"
const navLinks: { 
    label: string, 
    value: TViews, 
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}[] = [
    { label: "Boarded Pets", value: "main", icon: PawPrintIcon }, 
    { label: "Appointments", value: "appointments", icon: CalendarIcon }, 
    { label: "Staff", value: "staff", icon: UsersIcon },
    { label: "Insights", value: "insights", icon: CircleDollarSignIcon}
];

function DashbaordView({ view }: { view: TViews }) {

    switch (view) {
        case "staff":
            return <Staff />
        case "appointments":
            return <Appointments />
        case "insights":
            return <Insights />
        default:
            return <Main />

    }
}
function Sidebar({ view, open, setView, className, setOpen }: { open: boolean, setView: (v: TViews) => void, className?: string, view: TViews, setOpen: (v: boolean)=> void }) {
    return (
        <aside className={cn(`fixed lg:static left-0 top-0 bottom-0 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} z-50 bg-white flex flex-col p-4 pt-0 transition-transform shadow ${className}`)}>
            <Button 
            size={"icon"} 
            variant={"ghost"} 
            className="lg:hidden absolute top-1 right-1 text-black/50" 
            onClick ={()=>setOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XIcon className="size-6"/>
            </Button>
            <span className="flex items-center gap-x-2 h-20 text-2xl font-semibold">
                <HouseIcon className="size-6"/> PetCare
            </span>
            <nav className="">
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.value}>
                            <Button
                            variant={view === nav.value ? "secondary" : "ghost"}
                            className="w-full justify-normal gap-x-2"
                            onClick={() =>{
                                setView(nav.value)
                                setOpen(false);
                            }}>
                                <nav.icon className="size-4"/>
                                <span>{nav.label}</span>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-auto">
                <span className="sr-only">Settings</span>
                <Button size={"icon"} variant={"ghost"}><SettingsIcon /></Button>
            </div>
        </aside>
    )
}
export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [view, setView] = useState<TViews>("main")
    return (
        <div className="grid grid-rows-[5rem_1fr] lg:grid-rows-none lg:grid-cols-[20rem_1fr] lg:h-screen">
            <header className="sticky top-0 lg:hidden col-span-full flex items-center px-4 bg-white shadow z-10">
                <Button 
                size={"icon"} 
                variant={"ghost"} 
                className="ml-auto"
                onClick={()=>setSidebarOpen(true)}>
                    <MenuIcon className="size-6"/>
                </Button>
            </header>
            <Sidebar
                setOpen={setSidebarOpen}
                open={sidebarOpen} 
                setView={setView} 
                view={view} 
                className="w-full md:max-w-md border"
            />
            <ScrollArea className="grow h-full bg-muted">
                <DashbaordView view={view} />
            </ScrollArea>
        </div>
    );
}

