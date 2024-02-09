// "use client";
// import { adminDashbaordRoutes } from "@/utils/constants";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import yCoIcon from "@/public/yConnect.svg";
// import Image from "next/image";

// const AdminNavbar = () => {
//   const pathname = usePathname();
//   return (
//     <div className="h-screen flex align-middle flex-col bg-secondary-light min-w-[14%] w-[14%] max-w-[14%] justify-between">
//       <div className="flex flex-col">
//         <Image
//           src={yCoIcon}
//           alt="yConnect"
//           className=" self-center"
//           width={100}
//           height={100}
//           priority
//         />
//         {adminDashbaordRoutes.map((route) => {
//           return (
//             <Link
//               href={route.path}
//               key={route.name}
//               className={`
//             ${pathname === route.path ? " bg-white text-secondary-light" : "text-white"}
//             flex ms-3 me-5 p-2 flex-row mb-2 align-center justify-start gap-4 hover:bg-white hover:text-secondary-light rounded-md`}
//             >
//               <i className={`${route.icon} text-2xl leading-none`} />
//               <p className="text-md p-0  m-0" key={route.name}>
//                 {route.name}
//               </p>
//             </Link>
//           );
//         })}
//       </div>
//       <a className="mb-4 text-white flex ms-3 me-5 p-2 flex-row align-center justify-start gap-4 hover:bg-red-500 hover:text-white rounded-md">
//         Cerrar sesion
//       </a>
//     </div>
//   );
// };


"use client";
import { useState } from 'react';
import { adminDashbaordRoutes } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import yCoIcon from "@/public/yConnect.svg";
import Image from "next/image";
import right from "../public/right.png"
import left from "../public/left.png"


const AdminNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to manage nav bar expansion
  const pathname = usePathname();

  // Function to toggle nav bar expansion
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`h-screen flex flex-col items-center bg-secondary-light ${isExpanded ? 'min-w-[14%] w-[14%] max-w-[14%]' : 'w-[5%]'} transition-width duration-300 ease-in-out`}>
      {/* Logo section */}
      <div className="mt-4 mb-8"> {/* Adjust margins as needed */}
        <Image
          src={yCoIcon}
          alt="yConnect"
          width={isExpanded ? 100 : 50} // Adjust the logo size when collapsed
          height={isExpanded ? 100 : 50} // Adjust the logo size when collapsed
          priority
        />
      </div>

      {/* Toggle button */}
      <button onClick={toggleNavbar} className="mb-8">
        {isExpanded ? (
          <Image src={left} alt="Collapse" width={30} height={30} />
        ) : (
          <Image src={right} alt="Expand" width={30} height={30} />
        )}
      </button>

      {/* Links section */}
      {adminDashbaordRoutes.map((route) => (
        <Link href={route.path} key={route.name} className={`${pathname === route.path ? "bg-white text-secondary-light" : "text-white"} flex p-2 mb-2 items-center justify-center gap-4 hover:bg-white hover:text-secondary-light rounded-md`}>
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

export default AdminNavbar;
