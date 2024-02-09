//OrgNavBar.tsx
"use client";
import { useState } from 'react';
import { OrgRoutes } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import yCoIcon from "@/public/yConnect.svg";
import Image from "next/image";
import right from "../public/right.png"
import left from "../public/left.png"


const OrgNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to manage nav bar expansion
  const pathname = usePathname();

  // Function to toggle nav bar expansion
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`h-screen flex flex-col items-center bg-secondary-light mt-10  ${isExpanded ? 'min-w-[14%] w-[14%] max-w-[14%]' : 'w-[5%]'} transition-width duration-300 ease-in-out`}>
      <div className="mt-4 mb-8"> {/* Adjust margins as needed */}
      </div>
           {/* Updated Toggle button */}
           <button onClick={toggleNavbar} className="mb-8">
        {isExpanded ? (
          <Image src={left} alt="Collapse" width={30} height={30} />
        ) : (
          <Image src={right} alt="Expand" width={30} height={30} />
        )}
      </button>
      {/* Links section */}
      {OrgRoutes.map((route) => (
        <Link href={route.path} key={route.name} className={`${pathname === route.path ? "bg-white text-secondary-light" : "text-white"} flex p-2 mb-2 items-center justify-start pl-2 pr-2 gap-4 hover:bg-white hover:text-secondary-light rounded-md`}>
          <i className={`${route.icon} text-2xl`}></i>
          {isExpanded && <p className="text-md m-0">{route.name}</p>}
        </Link>
      ))}

      {/* Logout link - only shown when expanded */}
      {isExpanded && (
        <a className="mb-4 text-white flex p-2 items-center justify-center gap-4 hover:bg-red-500 hover:text-white rounded-md">
          Cerrar sesion
        </a>
      )}
    </div>
  );
};

export default OrgNavbar;


