"use client";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import Main from "./_views/main";
import Staff from "./_views/staff";
import Appointments from "./_views/appointments";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PawPrintIcon, CalendarIcon, UsersIcon, HouseIcon, SettingsIcon,LucideProps } from "lucide-react";
type TViews = "main" | "appointments" | "staff"
const navLinks: { 
    label: string, 
    value: TViews, 
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}[] = [
    { label: "Boarded Pets", value: "main", icon: PawPrintIcon }, 
    { label: "Appointments", value: "appointments", icon: CalendarIcon }, 
    { label: "Staff", value: "staff", icon: UsersIcon }
];

function DashbaordView({ view }: { view: TViews }) {

    switch (view) {
        case "staff":
            return <Staff />
        case "appointments":
            return <Appointments />
        default:
            return <Main />

    }
}
function Sidebar({ view, open, set, className }: { open: boolean, set: (v: TViews) => void, className?: string, view: TViews }) {
    return (
        <aside className={cn(`flex flex-col gap-y-4 p-4 ${className}`)}>
            <span className="flex items-center gap-x-2 text-2xl font-semibold"><HouseIcon className="size-6"/> Pet Boarding</span>
            <nav className="">
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.value}>
                            <Button
                            variant={view === nav.value ? "secondary" : "ghost"}
                            className="w-full justify-normal gap-x-2"
                            onClick={() => set(nav.value)}>
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
        <div className="flex lg:h-screen">
            <Sidebar open={sidebarOpen} set={setView} view={view} className="shrink-0 w-[20rem] h-full border"/>
            <DashbaordView view={view} />
        </div>
    );
}

