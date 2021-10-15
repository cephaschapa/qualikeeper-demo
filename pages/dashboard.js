import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useEffect, useState } from "react"
import { Line, Bar } from "react-chartjs-2";

const Dashboard = () => {
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
        }
        

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
                    <div className="flex flex-col p-2 w-80 relative left-16">
                        <p className="font-bold text-3xl text-gray-500 text-center mb-2">Dashboard</p>
                        <div className="grid grid-cols-1 w-full space-y-2">
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-red-500 rounded-2xl">
                                <p className="font-bold text-3xl">5000</p>
                                <p>Total Registered Animals</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-red-500 rounded-2xl">
                                <p className="font-bold text-3xl">150 kg</p>
                                <p>Food intake per day</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-red-500 rounded-2xl">
                                <p className="font-bold text-3xl">200 liters</p>
                                <p>Water intake per day</p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-white h-32 w-full bg-red-500 rounded-2xl">
                                <p className="font-bold text-3xl">38.9 C</p>
                                <p>Average Temperature per day</p>
                            </div>
                            
                            <p>Temperature Readings</p>
                            <BarChart chartData={chartData} />
                            <p>Average weight Readings</p>
                            <PieChart pieChartData={pieChartData} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard

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
