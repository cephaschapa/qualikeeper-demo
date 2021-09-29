import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
const dashboard = () => {
    return (
        <div>
            <Header />
            
            <section className="h-screen flex top-16 relative">
                {/* <Sidebar /> */}
                <div className="flex h-screen w-full">
                    <Sidebar />
                    <div className="flex flex-col p-2 w-80 relative left-16">
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">Dashboard</p>
                        <div className="grid grid-cols-1 w-full space-y-2">
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">5000</p>
                                <p>Total Registered Animals</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">1500</p>
                                <p>Total Vaccinated Animals</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">3</p>
                                <p>Breed Variety</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">4500</p>
                                <p>Females</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">500</p>
                                <p>Males</p>
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </section>
        </div>
    )
}

export default dashboard
