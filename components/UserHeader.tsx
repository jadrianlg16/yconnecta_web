
// components/Header.tsx
"use client";
import { usePathname } from "next/navigation";

const UserHeader: React.FC = () => {
  const currentPath = usePathname();
  const getTitleHeader = () => {
    switch(currentPath) {
      case "/client/home":
        return "Home";
      case "/client/publicaciones":
        return "Publicaciones";
      case "/client/search":
        return "Busqueda";
      case "/client/near_me":
        return "Mapa";
      default:
        return "Dashboard";
    }
  }

  return (
    <header className="border-b border-blue-900 mt-10 mb-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-3 text-white">{getTitleHeader()}</h1>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
