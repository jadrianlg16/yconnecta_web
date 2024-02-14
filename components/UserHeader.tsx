
// // components/Header.tsx
// "use client";
// import { usePathname } from "next/navigation";

// const UserHeader: React.FC = () => {
//   const currentPath = usePathname();
//   const getTitleHeader = () => {
//     switch(currentPath) {
//       case "/client/home":
//         return "Home";
//       case "/client/publicaciones":
//         return "Publicaciones";
//       case "/client/search":
//         return "Busqueda";
//       case "/client/near_me":
//         return "Mapa";
//       default:
//         return "Dashboard";
//     }
//   }

//   return (
//     <header className="border-b border-blue-900 mt-10 mb-10">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold ml-3 text-white">{getTitleHeader()}</h1>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default UserHeader;

// Directive to indicate that this component uses client-side features of Next.js
"use client";
import { usePathname } from "next/navigation"; // Import usePathname hook for accessing the current route's pathname

// UserHeader functional component definition
const UserHeader: React.FC = () => {
  const currentPath = usePathname(); // Retrieves the current route's pathname

  // Function to determine the header title based on the current route
  const getTitleHeader = () => {
    switch(currentPath) {
      case "/client/home": // If the current path is the home page
        return "Home";
      case "/client/publicaciones": // If the current path is the publications page
        return "Publicaciones";
      case "/client/search": // If the current path is the search page
        return "Busqueda";
      case "/client/near_me": // If the current path is the near me/map page
        return "Mapa";
      default: // Default case for any other path
        return "Dashboard";
    }
  };

  return (
    <header className="border-b border-blue-900 mt-10 mb-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          {/* Dynamically sets the header title based on the current navigation path */}
          <h1 className="text-2xl font-bold ml-3 text-white">{getTitleHeader()}</h1>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
