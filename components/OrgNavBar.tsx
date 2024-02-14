// //OrgNavBar.tsx
// "use client";
// import { useState } from 'react';
// import { OrgRoutes } from "@/utils/constants";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import yCoIcon from "@/public/yConnect.svg";
// import Image from "next/image";
// import right from "../public/right.png"
// import left from "../public/left.png"


// const OrgNavbar = () => {
//   const [isExpanded, setIsExpanded] = useState(true); // State to manage nav bar expansion
//   const pathname = usePathname();

//   // Function to toggle nav bar expansion
//   const toggleNavbar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`h-screen flex flex-col items-center bg-secondary-light mt-10  ${isExpanded ? 'min-w-[14%] w-[14%] max-w-[14%]' : 'w-[5%]'} transition-width duration-300 ease-in-out`}>
//       <div className="mt-4 mb-8"> {/* Adjust margins as needed */}
//       </div>
//            {/* Updated Toggle button */}
//            <button onClick={toggleNavbar} className="mb-8">
//         {isExpanded ? (
//           <Image src={left} alt="Collapse" width={30} height={30} />
//         ) : (
//           <Image src={right} alt="Expand" width={30} height={30} />
//         )}
//       </button>
//       {/* Links section */}
//       {OrgRoutes.map((route) => (
//         <Link href={route.path} key={route.name} className={`${pathname === route.path ? "bg-white text-secondary-light" : "text-white"} flex p-2 mb-2 items-center justify-start pl-2 pr-2 gap-4 hover:bg-white hover:text-secondary-light rounded-md`}>
//           <i className={`${route.icon} text-2xl`}></i>
//           {isExpanded && <p className="text-md m-0">{route.name}</p>}
//         </Link>
//       ))}

//       {/* Logout link - only shown when expanded */}
//       {isExpanded && (
//         <a className="mb-4 text-white flex p-2 items-center justify-center gap-4 hover:bg-red-500 hover:text-white rounded-md">
//           Cerrar sesion
//         </a>
//       )}
//     </div>
//   );
// };

// export default OrgNavbar;



// Use client-side rendering for this component
"use client";

// Imports
import { useState } from 'react';
import { OrgRoutes } from "@/utils/constants"; // Import predefined routes for organizational navigation
import Link from "next/link"; // Next.js Link component for client-side navigation
import { usePathname } from "next/navigation"; // Hook to get current route's pathname
import yCoIcon from "@/public/yConnect.svg"; // Example unused SVG import, consider removing or documenting its intended use
import Image from "next/image"; // Next.js Image component for optimized image rendering
import right from "../public/right.png"; // Icon for expanding the navbar
import left from "../public/left.png"; // Icon for collapsing the navbar

// OrgNavbar functional component definition
const OrgNavbar = () => {
  // State to manage navbar expansion status, initially set to true (expanded)
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname(); // Current pathname, used to highlight active navigation link

  // Toggle navbar expansion state
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`h-screen flex flex-col items-center bg-secondary-light mt-10 ${isExpanded ? 'min-w-[14%] w-[14%] max-w-[14%]' : 'w-[5%]'} transition-width duration-300 ease-in-out`}>
      {/* Placeholder div for potential logo or additional navigation elements */}
      <div className="mt-4 mb-8">
        {/* Consider adding a logo or another element here */}
      </div>

      {/* Toggle button to expand or collapse the navbar */}
      <button onClick={toggleNavbar} className="mb-8">
        {isExpanded ? (
          <Image src={left} alt="Collapse" width={30} height={30} />
        ) : (
          <Image src={right} alt="Expand" width={30} height={30} />
        )}
      </button>

      {/* Dynamic rendering of navigation links based on OrgRoutes */}
      {OrgRoutes.map((route) => (
        <Link href={route.path} key={route.name} className={`${pathname === route.path ? "bg-white text-secondary-light" : "text-white"} flex p-2 mb-2 items-center justify-start pl-2 pr-2 gap-4 hover:bg-white hover:text-secondary-light rounded-md`}>
          <i className={`${route.icon} text-2xl`}></i> {/* Icon for the link */}
          {isExpanded && <p className="text-md m-0">{route.name}</p>} {/* Link name, shown only when expanded */}
        </Link>
      ))}

      {/* Logout link, displayed only when navbar is expanded */}
      {isExpanded && (
        <a className="mb-4 text-white flex p-2 items-center justify-center gap-4 hover:bg-red-500 hover:text-white rounded-md">
          {/* This should be replaced with a real logout functionality */}
          Cerrar sesion 
        </a>
      )}
    </div>
  );
};

export default OrgNavbar;
