import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { AdjustmentsIcon, BellIcon, ChipIcon, CogIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const Header = () => {
    const [open, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen((prevState) => !prevState);
      };
    return (
        <header className="h-16 flex w-full justify-between bg-red-500 px-2 p-2 fixed z-50 shadow-lg">
            <div className="h-full  flex items-center space-x-1 bg-white text-red-500 p-2 rounded-2xl">
                <button 
                    type="button"
                    aria-disabled={open}
                    disabled={open}
                    onClick={toggle}
                >
                    <MenuIcon className='h-6 w-6'/>
                </button>
            </div>
            <div className="h-full flex items-center justify-end space-x-1 w-full">
                <BellIcon className="h-8 w-8 text-white"/>
                <CogIcon className="h-8 w-8 text-white"/>
            </div>
            <Sidenav open={open} toggle={toggle}>
                <SidenavItem href="#">
                    <span className="pl-2">Home</span>
                    
                </SidenavItem>
                
                <SidenavItem href="#">
                    <span className="pl-2">Manage</span>
                </SidenavItem>
                <SidenavItem href="#">
                    <span className="pl-2">Activity</span>
                </SidenavItem>
                <SidenavItem href="#">
                    <span className="pl-2">Settings</span>
                </SidenavItem>
                <SidenavItem href="#">
                    <span className="pl-2">Account</span>
                </SidenavItem>
            </Sidenav>
        </header>
    )
}

export default Header

/* Sidenav logic */

const style = {
    item: `flex justify-start items-center py-2 cursor-pointer text-lg text-gray-900 hover:text-gray-400 ml-5 mb-5 border-b`,
    closeIcon: `absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer`,
    sidenav: {
      open: `w-7/12 md:w-60 bg-white border text-white overflow-x-hidden`,
      close: `w-0 bg-gray-800 text-white overflow-x-hidden`,
      default: `h-screen fixed z-20 top-0 left-0 transition-all ease duration-200`,
    },
  };
  
  function Sidenav({ open, toggle, children }) {
    const ref = React.useRef(null);
  
    //close on click outside
    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          toggle(false);
        }
      };
      window.addEventListener('mousedown', handleOutsideClick);
      return () => window.removeEventListener('mousedown', handleOutsideClick);
    }, [open, ref]);
  
    return (
      <aside
        ref={ref}
        className={`${style.sidenav.default} 
          ${open ? style.sidenav.open : style.sidenav.close}`}
      >
        <button aria-label="Close" className={style.closeIcon} onClick={toggle}>
          &times;
        </button>
        <div className="mt-12">{children}</div>
      </aside>
    );
  }
  
  function SidenavItem({ children, href }) {
    return (
      <a href={href} className={style.item}>
        {children}
      </a>
    );
  }
