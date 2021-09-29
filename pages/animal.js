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
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">Details</p>
                        <p className="bg-blue-300 text-white p-2 text-center m-3 rounded-full">TAG ID: 47005AHKJB7HkKJ8</p>
                        <div className="grid grid-cols-2 w-full justify-between gap-3">
                            <div className="flex p-2 flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">Jersey</p>
                                <p>Breed</p>
                            </div>
                            <div className="flex p-2 flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">246 Kg</p>
                                <p>Weight</p>
                            </div>
                            <div className="flex p-2 flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">22.10.2021</p>
                                <p>Vacination Date</p>
                            </div>
                            <div className="flex p-2 flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">1.5 Years</p>
                                <p>Age</p>
                            </div>
                            <div className="flex p-2 flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">01.05.2019</p>
                                <p>Date of Birth</p>
                            </div>
                            <div className="flex p-2 flex-col items-center justify-center text-white h-32 w-full bg-blue-500 rounded-2xl">
                                <p className="font-bold text-3xl">Female</p>
                                <p>Sex</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default dashboard
