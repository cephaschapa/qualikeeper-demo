import React from 'react';
import Portal from '@reach/portal';
import { AdjustmentsIcon, BellIcon, CakeIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, SortAscendingIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Link from 'next/link'
const all = () => {
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
                    {/* <Sidebar /> */}
                    <div className="flex flex-col p-2 w-full relative">
                        <p className="font-bold text-3xl text-gray-500 text-center">Manage Livestock</p>
                        <button type="button" onClick={toggle} className='p-3 w-full bg-gray-600 font-bold text-white my-5 shadow-lg'>Add Livestock</button>
                        <div className='flex space-x-2'>
                            <button onClick={toggle1} className='p-3 w-full bg-gray-600 font-bold text-white shadow-lg'>Search</button>
                            <button onClick={toggle2} className='p-3 w-full bg-gray-600 font-bold text-white shadow-lg'>Filter</button>
                        </div>
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
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>Add</ModalHeader>
                <ModalBody>
                <div className="h-auto flex flex-col items-center bg-white space-y-3 w-full p-4">
                    {/* <p className="text-center uppercase tex-gray-600">Login</p> */}
                    <input type="text" placeholder="Tag ID" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    <input type="text" placeholder="Name" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    <input type="text" placeholder="Age" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    <input type="text" placeholder="Breed" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    {/* <Link href="/dashboard">
                    <button className="w-full p-3 bg-red-600 btn text-white">LOGIN</button>
                    </Link> */}
                </div>
                </ModalBody>
                <ModalFooter>
                <button
                    onClick={toggle}
                    className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
                >
                    Close
                </button>
                <button
                    onClick={toggle}
                    className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
                >
                    Submit
                </button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={isOpen1} toggle={toggle1}>
                <ModalHeader>Search</ModalHeader>
                <ModalBody>
                <div className="h-auto flex flex-col items-center bg-white space-y-3 w-full p-4">
                    {/* <p className="text-center uppercase tex-gray-600">Login</p> */}
                    <input type="text" placeholder="Tag ID" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    
                    <Link href="/dashboard">
                        <button className="w-full p-3 bg-red-600 btn text-white">SEARCH ANIMAL</button>
                    </Link>
                </div>
                </ModalBody>
                <ModalFooter>
                <button
                    onClick={toggle1}
                    className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
                >
                    Close
                </button>
                {/* <button
                    onClick={toggle1}
                    className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
                >
                    Submit
                </button> */}
                </ModalFooter>
            </Modal>
            <Modal isOpen={isOpen2} toggle={toggle2}>
                <ModalHeader>Sort By</ModalHeader>
                <ModalBody>
                <div className="h-auto grid grid-cols-2 gap-2 items-center bg-white w-full p-4">
                    {/* <p className="text-center uppercase tex-gray-600">Login</p> */}
                    {/* <input type="text" placeholder="Tag ID" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    <input type="text" placeholder="Name" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    <input type="text" placeholder="Age" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/>
                    <input type="text" placeholder="Breed" className="border-b-4 bg-gray-100 border-gray-300 w-full p-3"/> */}
                    
                    <button className="w-full p-3 bg-gray-600 btn text-white">Age</button>
                    <button className="w-full p-3 bg-gray-600 btn text-white">Sex</button>
                    <button className="w-full p-3 bg-gray-600 btn text-white">Date</button>
                    <button className="w-full p-3 bg-gray-600 btn text-white">Weight</button>
                    
                </div>
                </ModalBody>
                <ModalFooter>
                <button
                    onClick={toggle2}
                    className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
                >
                    Close
                </button>
                <button
                    onClick={toggle2}
                    className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
                >
                    Submit
                </button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default all

/*Logic*/

const style = {
    body: `flex-shrink flex-grow p-4`,
    headerTitle: `text-2xl md:text-3xl font-light`,
    header: `items-start justify-between p-4 border-b border-gray-300`,
    container: `fixed top-0 overflow-y-auto left-0 z-40 w-full h-full mt-10`,
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
