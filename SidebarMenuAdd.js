import React from 'react'

import { useRouter } from "next/navigation";
import { AiOutlineHome , AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

 const  sideList= [
    {
        icon: <AiOutlineHome className="text-2xl" />,
        title: "Dashboard",
        url: "/Dashboard",
        children: ""
      },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "Account",
      children: [
        { title: "View Profile", url_c: "/ViewProfile/" },
        { title: "Edit Profile", url_c: "/Access/" },
        { title: "Change Password", url_c: "/ChangePassword" },
      ]
    },
   
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "Section",
      children: [
        { title: "Child 1", url_c: "#" },
        { title: "Child 2", url_c: "#" },
      ]
    },
  
  ];
  


export default  sideList;