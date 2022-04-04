import { AdjustmentsIcon, BellIcon, CakeIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, SortAscendingIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Link from 'next/link'
const activity = ({record}) => {
    let data = record.data
    console.log(data)
    
    return (
        <div>
            <Header />
            
            <section className="h-screen flex top-16 relative">
                {/* <Sidebar /> */}
                <div className="flex h-screen w-full">
                    <Sidebar />
                    <div className="flex flex-col p-2 w-80 relative left-16 ">
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">Daily Water Intake</p>
                        <div className="grid grid-cols-1 w-full space-y-2 overflow-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tag ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    # of times at trough
                                </th>
                               
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Time Taken
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                        {data.cardId}
                                        </div>
                                        
                                    </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {data.waterTrough}
                                </td>
                                
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {data.occuredAt}
                                </td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                
               
            </section>
        </div>
    )
}

export default activity

export async function getServerSideProps(){
    const data = await fetch('http://192.168.10.3:5500/get-record/6215658ef4b9dbd03b1e8596',{
        method: "GET"
    })
    const record = await data.json()
    return{
        props: {
            record
        }
    }
}
