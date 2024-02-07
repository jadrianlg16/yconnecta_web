"use client";
import { adminDashbaordRoutes } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import yCoIcon from "@/public/yConnect.svg";
import Image from "next/image";

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen flex align-middle flex-col bg-secondary-light min-w-[14%] w-[14%] max-w-[14%] justify-between">
      <div className="flex flex-col">
        <Image
          src={yCoIcon}
          alt="yConnect"
          className=" self-center"
          width={100}
          height={100}
          priority
        />
        {adminDashbaordRoutes.map((route) => {
          return (
            <Link
              href={route.path}
              key={route.name}
              className={`
            ${pathname === route.path ? " bg-white text-secondary-light" : "text-white"}
            flex ms-3 me-5 p-2 flex-row mb-2 align-center justify-start gap-4 hover:bg-white hover:text-secondary-light rounded-md`}
            >
              <i className={`${route.icon} text-2xl leading-none`} />
              <p className="text-md p-0  m-0" key={route.name}>
                {route.name}
              </p>
            </Link>
          );
        })}
      </div>
      <a className="mb-4 text-white flex ms-3 me-5 p-2 flex-row align-center justify-start gap-4 hover:bg-red-500 hover:text-white rounded-md">
        Cerrar sesion
      </a>
    </div>
  );
};

export default AdminNavbar;
