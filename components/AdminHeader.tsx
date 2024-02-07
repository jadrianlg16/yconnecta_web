'use client'
import Image from "next/image"
import orgImage from "@/public/consejo-civico.png";
import { usePathname } from "next/navigation";

const AdminHeader =() => {
  const currentPath = usePathname();
  const getTitleHeader = () => {
    switch(currentPath) {
      case "/admin":
        return "Dashboard";
      case "/admin/comunidad":
        return "Comunidad";
      case "/admin/publicaciones":
        return "Publicaciones";
      case "/admin/configuracion":
        return "Configuración";
      default:
        return "Dashboard";
    }
  }
  return (
    <header className="w-full h-[12%] flex flex-row justify-between items-center px-4">
    <p className=" text-4xl text-white font-semibold">{getTitleHeader()} de Consejo Civico</p>
    <Image
      src={orgImage}
      alt="Consejo Civico"
      className=" h-auto w-32"
    />
  </header>
  )
}

export default AdminHeader;