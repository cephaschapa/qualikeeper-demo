import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {MenuIcon} from '@heroicons/react/outline'
import Portal from '@reach/portal';

const Dashboard = () => {
    const [chartData, setChartData] = useState({})
    const [pieChartData, setPieChartData] = useState({})
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
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
                    {/* <Sidebar /> */}
                    <div className="flex flex-col p-2 w-full relative py-10">
                        {/* <p className="font-bold text-3xl text-gray-500 text-center mb-2">Dashboard</p> */}
                        <div className="grid grid-cols-1 w-full space-y-2">
                            <div onClick={toggle} className="flex space-y-3 flex-col items-center justify-center text-black h-32 w-full bg-gray-200">
                                <p className='text-center text-4xl'>Animals</p>
                                <p className="font-bold text-2xl">500</p>
                                <p></p>
                                {/* <button  className='p-3 px-5 bg-gray-700 text-white rounded-2xl'>Expand</button> */}
                            </div>
                            {/* <div className="flex flex-col items-center justify-center text-black h-32 w-full bg-gray-200 rounded-2xl">
                                <p className="font-bold text-3xl">1</p>
                                <p>Water Intake</p>
                            </div> */}
                            
                            <div className="flex flex-col space-y-1 items-center justify-center p-3 text-white gap-3 h-32 w-full bg-gray-200">
                              <p className='text-center text-black text-4xl'>Health</p>
                                <div className='grid grid-cols-3 gap-2'>
                                  {/* <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Water Intake</div>
                                  <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Temperature</div>
                                  <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Food Intake</div> */}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1 items-center justify-center p-3 text-white gap-3 h-32 w-full bg-gray-200 ">
                              <p className='text-center text-black text-4xl'>Activity</p>
                                <div className='grid grid-cols-3 gap-2'>
                                  {/* <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Water Intake</div>
                                  <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Temperature</div>
                                  <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Food Intake</div> */}
                                </div>
                            </div>
                            
                            {/* <p>Temperature Readings</p>
                            <BarChart chartData={chartData} />
                            <p>Average weight Readings</p>
                            <PieChart pieChartData={pieChartData} /> */}
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={isOpen} toggle={toggle}>
              <ModalHeader>Total Number of animals</ModalHeader>
                <ModalBody>
                  Data goes here
                </ModalBody>
              <ModalFooter>
                <button
                  onClick={toggle}
                  className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-500"
                >
                  Close
                </button>
                <button
                  onClick={toggle}
                  className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
                >
                  Confirm
                </button>
              </ModalFooter>
            </Modal>
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


  
const style = {
  body: `flex-shrink flex-grow p-4`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  container: `fixed top-0 overflow-y-auto left-0 z-40 w-full h-full m-0`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
  content: `animate-modal relative flex flex-col bg-white pointer-events-auto`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  orientation: `mt-12 mx-8 pb-6 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12 focus:outline-none`,
};

function Modal({ children, isOpen, toggle }) {
  const ref = React.useRef();

  // close modal on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, ref, toggle]);

  // close modal when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return;
      if (event.key === 'Escape') {
        toggle(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isOpen, toggle]);

  // hide scrollbar and prevent body from moving when modal is open
  //put focus on modal dialogue
  React.useEffect(() => {
    if (!isOpen) return;

    ref.current?.focus();

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = '';
      html.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div
              aria-modal={true}
              className={style.orientation}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={style.content}>{children}</div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

function ModalHeader({ children }) {
  return (
    <div className={style.header}>
      <h4 className={style.headerTitle}>{children}</h4>
    </div>
  );
}

function ModalBody({ children }) {
  return <div className={style.body}>{children}</div>;
}

function ModalFooter({ children }) {
  return <div className={style.footer}>{children}</div>;
}
