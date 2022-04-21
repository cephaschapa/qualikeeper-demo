import React from 'react'
import { MenuIcon, CogIcon } from '@heroicons/react/outline';
import {VscDeviceCameraVideo, VscBellDot, VscSettings} from 'react-icons/vsc';
import {VideoCameraIcon, AdjustmentsIcon, BellIcon, ChipIcon, InformationCircleIcon, ShieldCheckIcon, UserCircleIcon, ViewGridAddIcon, ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Portal from '@reach/portal';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="h-16 flex w-full justify-between bg-red-500 px-2 p-2 fixed z-50 shadow-lg">
          <div className="h-full  flex items-center space-x-1 text-white p-2 rounded-xl border border-white">
              <button 
                  type="button"
                  onClick={toggle}
              >
                  <MenuIcon className='h-6 w-6'/>
              </button>
          </div>
          <div className="h-full flex items-center justify-end space-x-3 w-full">
              <VscDeviceCameraVideo className="h-8 w-8 text-white"/>
              <VscBellDot className="h-8 w-8 text-white"/>
          </div>
          <Drawer isOpen={isOpen} toggle={toggle} position="left">
            <DrawerHeader>Drawer title</DrawerHeader>
            <DrawerBody>
              <ul className='flex flex-col w-full space-y-3 text-xl font-bold'>
                <Link href="/dashboard">
                  <li className='py-2 border-b'>Home</li>
                </Link>
                <Link href="/manage">
                  <li className='py-2 border-b'>Manage</li>
                </Link>
                <Link href="/activity">
                  <li className='py-2 border-b'>Activity</li>
                </Link>
                <Link href="/settings">
                  <li className='py-2 border-b'>Settings</li>
                </Link>
                <Link href="/account">
                  <li className='py-2 border-b'>Account</li>
                </Link>
              </ul>
            </DrawerBody>
            <DrawerFooter>
              <div className='flex items-center space-x-3 w-full'>
                
                <p className='flex '>Status: Active </p>
                <div className='h-2 w-2 relative rounded-full bg-green-600 animate-ping'></div>
              </div>
            </DrawerFooter>
          </Drawer>
      </header>
    )
}

export default Header

/* Sidenav logic */

const style = {
  orientation: {
    left: `flex w-8/12 md:w-80 lg:w-96 h-full left-0 mx-0 my-0 absolute focus:outline-none `,
  },
  animation: {
    left: 'animate-drawer-left',
  },
  body: `flex-shrink flex-grow p-4`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  content: `relative flex flex-col bg-white pointer-events-auto`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
};

function Drawer({ children, isOpen, toggle }) {
  const ref = React.useRef(null);

  // close drawer on click outside
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

  // close drawer when you click on "ESC" key
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

  // hide scrollbar and prevent body from moving when drawer is open
  //put focus on drawer dialogue
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
              className={style.orientation.left}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={`${style.animation.left} ${style.content}`}>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

function DrawerHeader({ children }) {
  return (
    <div className={style.header}>
      <h4 className={style.headerTitle}>{children}</h4>
    </div>
  );
}

function DrawerBody({ children }) {
  return <div className={style.body}>{children}</div>;
}

function DrawerFooter({ children }) {
  return <div className={style.footer}>{children}</div>;
}
