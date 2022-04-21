import { AdjustmentsIcon, BellIcon, CakeIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, SortAscendingIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Link from 'next/link'
const activity = () => {
    return (
        <div>
            <Header />
            <section className="h-screen flex top-16 relative">
                {/* <Sidebar /> */}
                <div className="flex h-screen w-full">
                    {/* <Sidebar /> */}
                    <div className="flex flex-col p-2 w-full relative ">
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">Activity</p>
                        <div className="grid grid-cols-1 w-full space-y-2">
                            
                        </div>
                    </div>
                </div>
                
               
            </section>
        </div>
    )
}

export default activity
