import { cn } from '@/lib/utils'


export default function LoadingSpinner({ className }: { className?: string }) {
    return (
        <div className='h-full w-full grid place-content-center'>
            <div className={cn(`size-10 rounded-full border-4 border-t-primary animate-spin ${className}`)} />
        </div>

    )
}
