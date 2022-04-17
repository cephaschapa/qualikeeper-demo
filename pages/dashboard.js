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
    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    const toggle1 = () => {
      setIsOpen1(!isOpen1);
    };

    const toggle2 = () => {
      setIsOpen2(!isOpen2);
    };
    
    return (
        <div>
            <Header />
            
            <section className="h-screen flex top-16 relative">
                {/* <Sidebar /> */}
                <div className="flex main pt-16 h-screen w-full">
                    {/* <Sidebar /> */}
                    <div className="flex flex-col p-2 w-full relative py-10">
                        {/* <p className="font-bold text-3xl text-gray-500 text-center mb-2">Dashboard</p> */}
                        <div className="grid grid-cols-1 w-full space-y-2">
                            <div onClick={toggle} className="flex space-y-3 flex-col items-center justify-center text-black h-32 w-full bg-white opacity-75">
                                <p className='text-center text-3xl'>Animals</p>
                                <p className="text-xl">500</p>
                                <p></p>
                                {/* <button  className='p-3 px-5 bg-gray-700 text-white rounded-2xl'>Expand</button> */}
                            </div>
                            {/* <div className="flex flex-col items-center justify-center text-black h-32 w-full bg-gray-200 rounded-2xl">
                                <p className="font-bold text-3xl">1</p>
                                <p>Water Intake</p>
                            </div> */}
                            
                            <div onClick={toggle1} className="flex flex-col space-y-1 items-center justify-center p-3 text-white gap-3 h-32 w-full bg-white opacity-75">
                              <p className='text-center text-black text-3xl'>Health</p>
                                <div className='grid grid-cols-3 gap-2'>
                                  {/* <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Water Intake</div>
                                  <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Temperature</div>
                                  <div className='flex h-24 w-full p-2 items-center justify-center bg-gray-800 text-center'>Food Intake</div> */}
                                </div>
                            </div>
                            <div onClick={toggle2} className="flex flex-col space-y-1 items-center justify-center p-3 text-white gap-3 h-32 w-full bg-white opacity-75">
                              <p className='text-center text-black text-3xl'>Events</p>
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
              <ModalHeader><div className='text-center'>Animals</div></ModalHeader>
                <ModalBody>
                   <div className='space-y-3 text-lg text-center'>
                     <p>Group 1: 100</p>
                     <p>Group 2: 150</p>
                     <p>Group 3: 250</p>
                   </div>
                </ModalBody>
              <ModalFooter>
              <div className='w-full flex justify-center'>
                  <button
                    onClick={toggle2}
                    className="text-white w-1/2 focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-500"
                  >
                    Close
                  </button>
                </div>
              </ModalFooter>
            </Modal>
            <Modal1 isOpen1={isOpen1} toggle1={toggle1}>
              <ModalHeader><p className='text-center'>Health</p></ModalHeader>
                <ModalBody>
                    <div className='flex flex-col p-3 space-y-3'>
                      <div className='p-3 py-10 text-center bg-gray-100'>
                        <p className='font-bold'>Water Intake</p>
                        <i>No data available</i>
                      </div>
                      <div className='p-3 py-10 text-center bg-gray-100'>
                        <p className='font-bold'>Temperature</p>
                        <i>No data available</i>
                      </div>
                      <div className='p-3 py-10 text-center bg-gray-100'>
                        <p className='font-bold'>Food Intake</p>
                        <i>No data available</i>
                      </div>
                    </div>
                </ModalBody>
              <ModalFooter>
              <div className='w-full flex justify-center'>
                  <button
                    onClick={toggle2}
                    className="text-white w-1/2 focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-500"
                  >
                    Close
                  </button>
                </div>
              </ModalFooter>
            </Modal1>
            <Modal isOpen={isOpen2} toggle={toggle2}>
              <ModalHeader><div className='text-center'>Activity</div></ModalHeader>
                <ModalBody>
                <div className='flex flex-col p-3 space-y-3'>
                      <div className='p-3 py-10 text-center bg-gray-100'>
                        <p className='font-bold'>Vaccination</p>
                        <i>Next Due: 01/01/1409</i>
                
                      </div>
                      <div className='p-3 py-10 text-center bg-gray-100'>
                        <p className='font-bold'>Dipping</p>
                        <i>Next Due: 01/01/1409</i>
                      </div>
                      <div className='p-3 py-10 text-center bg-gray-100'>
                        <p className='font-bold'>Breeding</p>
                        <i>Next Due: 01/01/1409</i>
                      </div>
                    </div>
                </ModalBody>
              <ModalFooter>
                <div className='w-full flex justify-center'>
                  <button
                    onClick={toggle2}
                    className="text-white w-1/2 focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-500"
                  >
                    Close
                  </button>
                </div>
                {/* <button
                  onClick={toggle2}
                  className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
                >
                  Confirm
                </button> */}
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
  container: `fixed top-0 overflow-y-auto left-0 z-40 w-full h-full mt-20`,
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
function Modal1({ children, isOpen1, toggle1 }) {
  const ref = React.useRef();

  // close modal on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen1) return;
        toggle1(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen1, ref, toggle1]);

  // close modal when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen1) return;
      if (event.key === 'Escape') {
        toggle1(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isOpen1, toggle1]);

  // hide scrollbar and prevent body from moving when modal is open
  //put focus on modal dialogue
  React.useEffect(() => {
    if (!isOpen1) return;

    ref.current?.focus();

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = '';
      html.style.paddingRight = '';
    };
  }, [isOpen1]);

  return (
    <Portal>
      {isOpen1 && (
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
