import React from 'react'
import {navList} from './NavbarItemAdd'

import Image from "next/image.js";
import { AiOutlineHome , AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsShare } from "react-icons/bs";
import Link from "next/link";
import icon from "../../../public/img/icon.png"
function Navbars() {

  <navList />

  return (
    <>
    
            
    <div className="flex items-center">
      
    <Image src={icon} alt="Logo" className="px-1" height={68} width={70} />
      <div className=" md:flex md:justify-between md:bg-transparent">
        
        {navList.map(({ icon, title, url }, index) => {
          return (

            <button
              key={index}
              title="Wishlist"
              className="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              <span>
                <span>{icon}</span>
                <span>{title}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default Navbars