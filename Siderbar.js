"use client";
import Image from "next/image.js";
import React, { useEffect, useState } from "react";
import { AiOutlineHome , AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsShare } from "react-icons/bs";
import Link from "next/link";
import icon from "../../public/img/icon.png";
import Navbars from "../(pages)/fields/Navbar";
import sideList from "./SidebarMenuAdd";

const Navbar = ({  showMenuButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState(null); // Track which item's child is open
  const [isMobile, setIsMobile] = useState(false);
 
 

  const handleDrawer = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false)
  };

  useEffect(() => {
    const handleEscKeyPress = (e) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  const toggleChild = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index); // Toggle the opened state of the item
  };


<sideList />
  
  
 
  
 // Existing imports and component definition...

return (
  <>
  
  {showMenuButton && (
  <div id="button_hidden">
  <nav style ={{backgroundColor:"#0284c7"}} className=" flex w-full items-center justify-between px-6 h-16  text-gray-700 border-b border-gray-200 z-10 ">
 
  <Navbars></Navbars>
   <div className="flex items-center ">
      {!isMobile && (
        <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
          <GiHamburgerMenu className="text-3xl" />
        </button>
      )}

    </div>
  

    {isOpen && (
      <div className="z-10 fixed inset-0 transition-opacity">
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black opacity-50"
          tabIndex="0"
        ></div>
      </div>
    )}

    <aside
      className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <span className="flex w-full items-center p-4 border-b">
      <Image src={icon} alt="Logo"   height={68} width={70} className="h-auto w-32 mx-auto" />
      </span>

      {/* Close button */}
      <button
        className="absolute top-0 right-0 m-4"
        onClick={() => setIsOpen(false)}
        aria-label="Close Menu"
      >
        <AiOutlineClose className="text-2xl" />
      </button>

      {sideList.map(({ icon, title, children, url }, index) => {
  return (
    <div key={index}>
      <span
        onClick={() => toggleChild(index)}
        className="flex items-center p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
      >

        {url ? (
          <>
          <span className="mr-2">{icon}</span> 
          <Link href={url} onClick={closeSidebar}>{title}</Link>
          </>
        ) : (
          <>
          <span className="mr-2">{icon}</span> 
          <span>{title}</span>
          </>
        )}
      </span>
      {children && openItemIndex === index && ( // Check if children exist before rendering
        <div>
          {children.map((child, idx) => (
            
            <Link key={idx} href={child.url_c} onClick={closeSidebar}>
            <div className="flex items-center p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
              <span className="ml-8">{child.title}</span>
            </div>
          </Link>
          
          ))}
        </div>
      )}
    </div>
  );
})}


      <div className="fixed bottom-0 w-full">
        <button style={{backgroundColor:"#0284c7"}} className="flex items-center p-4 text-white  hover:bg-blue-600 w-full">
          <span className="mr-2">
            <BsShare className="text-2xl" />
          </span>
          <span>Share</span>
        </button>
      </div>
    </aside>
    </nav>
   </div>
   )}
    
    </>
);

};

export default Navbar;