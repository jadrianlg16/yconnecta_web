"use client";
import Image from 'next/image';
import { OrgHomeRoutes } from "@/utils/constants";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const OrgHeader: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-blue-900 mt-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-3 text-white">Arena (Atención Integral del Autismo)</h1>
        </div>
        <nav>
          {/* <ul className="flex space-x-4">
            {OrgHomeRoutes.map((route) => (
              <li key={route.name}>
                <Link href={route.path}>
                  <a className={`hover:underline text-white ${pathname === route.path ? 'underline' : ''}`}>
                    {route.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul> */}
          <ul className="flex space-x-4">
            {OrgHomeRoutes.map((route) => (
                <li key={route.name}>
                <Link href={route.path} passHref>
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
