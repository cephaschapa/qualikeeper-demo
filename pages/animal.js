import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Image from 'next/image'

import { useEffect, useState } from "react"
import { Line, Bar } from "react-chartjs-2";

const dashboard = () => {
    const [chartData, setChartData] = useState({})
    const [pieChartData, setPieChartData] = useState({})

    const data = [
        {
            id: '1',
            name: 'temperature',
            temp: '38.9',
            day: 'Sunday'
        },
        {
            id: '2',
            name: 'temperature',
            temp: '36.9',
            day: 'Monday'
        },
        {
            id: '3',
            name: 'temperature',
            temp: '37.9',
            day: 'Tuesday'
        },
        {
            id: '4',
            name: 'temperature',
            temp: '35.0',
            day: 'Wednesday',
        },
        {
            id: '4',
            name: 'temperature',
            temp: '36.9',
            day: 'Thursday',
        },
        {
            id: '4',
            name: 'temperature',
            temp: '34.5',
            day: 'Friday',
        },
        {
            id: '4',
            name: 'temperature',
            temp: '38.0',
            day: 'Saturday',
        },

    ]

    const data2 = [
        {
            id: '1',
            name: 'temperature',
            temp: '38.9',
            day: 'Sunday'
        },
        {
            id: '2',
            name: 'temperature',
            temp: '36.9',
            day: 'Monday'
        },
        {
            id: '3',
            name: 'temperature',
            temp: '37.9',
            day: 'Tuesday'
        },
        {
            id: '4',
            name: 'temperature',
            temp: '35.0',
            day: 'Wednesday',
        },
        {
            id: '4',
            name: 'temperature',
            temp: '36.9',
            day: 'Thursday',
        },
        {
            id: '4',
            name: 'temperature',
            temp: '34.5',
            day: 'Friday',
        },
        {
            id: '4',
            name: 'temperature',
            temp: '38.0',
            day: 'Saturday',
        },

        

    ]

    useEffect(() => {
        const fetchPrices = async () => {
        //   const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
        //   const data = await res.json()
          setChartData({
            labels: data.map((d) => d.day),
            datasets: [
              {
                label: "Temperature in Celsius",
                data: data.map((v) => v.temp),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }
            ]
          });
          setPieChartData({
            labels: data2.map((d) => d.day),
            datasets: [
              {
                label: "Average Weight",
                data: data2.map((v) => v.temp),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }
            ]
          });
        };
        fetchPrices()
      }, []);
    return (
        <div>
            <Header />
            <section className="h-screen flex top-16 relative">
                {/* <Sidebar /> */}
                <div className="flex h-screen w-full">
                    <Sidebar />
                    <div className="flex flex-col p-2 w-80 relative h-full left-16 space-y-2 py-10">
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">Details</p>
                        <p className="bg-red-300 text-white p-2 text-center m-3 rounded-full">TAG ID: 47005AHKJB7HkKJ8</p>
                        
                        <div className="w-full h-auto shadow-md p-2 rounded-2xl border border-gray-200">
                            <div className="h-52 w-full relative">
                                <Image src="/cow.jpg" objectFit="cover" layout="fill" className="rounded-2xl"/>
                            </div>
                        </div>
                        <div className=" w-full h-52 shadow-md p-2 rounded-2xl border border-gray-200">
                            <p className="font-bold text-2xl">Activity</p>
                            <p className="font-bold">Feedlot</p>
                            <p>Through 10:30</p>
                            <br />
                            <p className="font-bold">Water Trogh</p>
                            <p>Through 10:30</p>
                        </div>
                        <div className=" w-full h-52 shadow-md p-2 rounded-2xl border border-gray-200">
                            <p>Temperature Readings</p>
                            <BarChart chartData={chartData} />
                        </div>
                        <div className=" w-full h-52 shadow-md p-2 rounded-2xl border border-gray-200">
                            <p>Average weight Readings</p>
                            <PieChart pieChartData={pieChartData} />
                        </div>

                        <div className=" w-full h-auto shadow-md p-2 rounded-2xl border border-gray-200">
                            <p className="text-2xl font-bold">More Detailed Info</p>
                            <p>Date Purchased / Born:</p>
                            <p>Breed:</p>
                            <p>Gender:</p>
                            <p>Age:</p>
                            <p>Milk Produced:</p>
                            <p>Health History:</p>
                            <p>Procedures Due:</p>
                            <p>Number of "Births":</p>
                            
                        </div>
                        
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default dashboard

export const BarChart = ({ chartData }) => {
    return (
      <div className="h-56">
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Temperature readings"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            }
          }}
        />
      </div>
    );
  };


export const PieChart = ({ pieChartData }) => {
    return (
      <div className="h-56">
        <Line
          data={pieChartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Weight"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            }
          }}
        />
      </div>
    );
  };
