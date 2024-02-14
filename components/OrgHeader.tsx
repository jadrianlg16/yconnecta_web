// "use client";
// import Image from 'next/image';
// import { OrgHomeRoutes } from "@/utils/constants";

// import Link from 'next/link';
// import { usePathname } from "next/navigation";

// const OrgHeader: React.FC = () => {
//   const pathname = usePathname();

//   return (
//     <header className="border-b border-blue-900 mt-20">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold ml-3 text-white">Arena (Atención Integral del Autismo)</h1>
//         </div>
//         <nav>
//           {/* <ul className="flex space-x-4">
//             {OrgHomeRoutes.map((route) => (
//               <li key={route.name}>
//                 <Link href={route.path}>
//                   <a className={`hover:underline text-white ${pathname === route.path ? 'underline' : ''}`}>
//                     {route.name}
//                   </a>
//                 </Link>
//               </li>
//             ))}
//           </ul> */}
//           <ul className="flex space-x-4">
//             {OrgHomeRoutes.map((route) => (
//                 <li key={route.name}>
//                 <Link href={route.path} passHref>
//                     <span className={`hover:underline text-white ${pathname === route.path ? 'underline' : ''}`}>
//                     {route.name}
//                     </span>
//                 </Link>
//                 </li>
//             ))}
//             </ul>

//         </nav>
//       </div>
//     </header>
//   );
// };

// export default OrgHeader;

"use client";
import Image from 'next/image'; // Importing Image from 'next/image' for optimized images. Unused in this snippet but potentially for logos or icons.
import { OrgHomeRoutes } from "@/utils/constants"; // Importing route definitions from a constants file.

import Link from 'next/link'; // Next.js Link component for client-side navigation.
import { usePathname } from "next/navigation"; // Hook to get the current pathname.

/**
 * OrgHeader is a functional component that renders the application's header.
 * It displays the site's name and a navigation menu with links defined in OrgHomeRoutes.
 * Active link styling is applied based on the current pathname.
 */
const OrgHeader: React.FC = () => {
  const pathname = usePathname(); // Using the usePathname hook to get the current route's pathname.

  return (
    <header className="border-b border-blue-900 mt-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Site title or logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-3 text-white">Arena (Atención Integral del Autismo)</h1>
        </div>
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            {/* Mapping over OrgHomeRoutes to render navigation links. */}
            {OrgHomeRoutes.map((route) => (
              <li key={route.name}>
                <Link href={route.path} passHref>
                  {/* Applying active link styling with underline for the current route. */}
                  <span className={`hover:underline text-white ${pathname === route.path ? 'underline' : ''}`}>
                    {route.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default OrgHeader;
