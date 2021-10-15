import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const Header = () => {
    return (
        <header className="h-16 flex w-full justify-between bg-red-500 px-2 p-2 fixed z-50 shadow-lg">
            <div className="h-full w-96  flex items-center space-x-1 bg-white text-red-500 p-2 rounded-2xl">
                <UserCircleIcon className="h-8 w-8"/>
                <p className="font-bold">Nicholas Squidward</p>
            </div>
            <div className="h-full flex items-center justify-end space-x-1 w-full">
                <BellIcon className="h-8 w-8 text-white"/>
                <CogIcon className="h-8 w-8 text-white"/>
            </div>
        </header>
    )
}

export default Header
