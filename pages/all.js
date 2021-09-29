import { AdjustmentsIcon, BellIcon, CakeIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, SortAscendingIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Link from 'next/link'
const all = () => {
    const data = [
        {
            "id": 1,
            "tagID": "47005AHKJB7Hk892",
            "weight": "91.7",
            "Breed": "Jersy",
            "age": "6 Months",
            "sex": "Male",
            "dob": "20/07/2021 09:20",
            "vaccination": "Vaccinated",
        },
        {
            "id": 1,
            "tagID": "47005AHKJB7Hk89",
            "weight": "201",
            "Breed": "Jersy",
            "age": "1.5 Years",
            "sex": "Female",
            "dob": "20/07/2021 09:20",
            "vaccination": "Vaccinated",
        },
        
    ]
    return (
        <div>
            <Header />
            
            <section className="h-screen flex top-16 relative">
                {/* <Sidebar /> */}
                <div className="flex h-screen w-full">
                    <Sidebar />
                    <div className="flex flex-col p-2 w-80 relative left-16 ">
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">All Livestock</p>
                        <div className="grid grid-cols-1 w-full space-y-2 overflow-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tag ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Weight
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Breed
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Age
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Dob
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Sex
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Vaccination
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                data.map((data, i)=>{
                                    return(
                                        <Link href="/animal" key={i}>
                                             <tr >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                    
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                        {data.tagID}
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {data.weight}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                {data.Breed}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {data.age}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {data.dob}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {data.sex}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {data.vaccination}
                                                </td>
                                            </tr>
                                        </Link>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                
               
            </section>
        </div>
    )
}

export default all
