"use client";
import { useState } from "react";
import Main from "./_views/main";
import Staff from "./_views/staff";
import Appointments from "./_views/appointments";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PawPrintIcon } from "lucide-react";
type TViews = "main" | "appointments" | "staff"
const navLinks: { label: string, value: TViews }[] = [
    { label: "Boarded Pets", value: "main" }, { label: "Appointments", value: "appointments" }, { label: "Staff", value: "staff" }
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
function Sidebar({ open, set, className }: { open: boolean, set: (v: TViews) => void, className?: string }) {
    return (
        <aside className={cn(`p-4 ${className}`)}>
            <span className="flex items-center gap-x-2 text-2xl font-semibold"><PawPrintIcon className="size-6"/> Pet Boarding</span>
            <nav>
                <ul>
                    {navLinks.map(({ label, value }) => <li key={value}><Button onClick={() => set(value)}>{label}</Button></li>)}
                </ul>
            </nav>
        </aside>
    )
}
export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [view, setView] = useState<TViews>("main")
    return (
        <div className="flex lg:h-screen">
            <Sidebar open={sidebarOpen} set={setView} className="grow max-w-xs h-full border"/>
            <DashbaordView view={view} />
        </div>
    );
}

