import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const Sidebar = () => {
    return (
        <div className="h-full flex-col space-y-6 w-16 fixed bg-gray-100 py-2 p-2 text-white shadow-3xl">
            <Link href="/dashboard">
                <div className="h-12 flex flex-col items-center justify-center bg-blue-500 w-full rounded-2xl">
                    <ViewGridIcon className="h-8 w-8"/>
                </div>
            </Link>
            <Link href="/activity">
                <div className="h-12 flex flex-col items-center justify-center bg-blue-500 w-full rounded-2xl">
                    <ChipIcon className="h-8 w-8"/>
                </div>
            </Link>
            <Link href="/all">
                <div className="h-12 flex flex-col items-center justify-center bg-blue-500 w-full rounded-2xl">
                    <ViewListIcon className="h-8 w-8"/>
                </div>
            </Link>
            <Link href="/security">
                <div className="h-12 flex flex-col items-center justify-center bg-blue-500 w-full rounded-2xl">
                    <ShieldCheckIcon className="h-8 w-8"/>
                </div>
            </Link>
            <Link href="/configs">
                <div className="h-12 flex flex-col items-center justify-center bg-blue-500 w-full rounded-2xl">
                    <AdjustmentsIcon className="h-8 w-8"/>
                </div>
            </Link>
            <Link href="/help">
                <div className="h-12 flex flex-col items-center justify-center bg-blue-500 w-full rounded-2xl">
                    <InformationCircleIcon className="h-8 w-8"/>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
