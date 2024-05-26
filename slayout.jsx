// layout.jsx
import React from "react";
import { Inter } from "next/font/google";

import Sidebar from "../Siderbar";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children, showMenuButton = true }) => {
  return (
    <div className={inter.className}>
      <Sidebar showMenuButton={showMenuButton} />
      {children}
    </div>
  );
};

export default RootLayout; // Exporting the RootLayout component as default