"use client";
import Link from 'next/link';

interface OrgContentCardProps {
    title: string;
    handle: string;
    date: string;
    excerpt: string;
    imageSrc: string;
  }
  
const OrgContentCard: React.FC<OrgContentCardProps> = ({ title, handle, date, excerpt, imageSrc }) => {
  return (
    <Link href="/client/org_noticias" passHref>
      <div className="cursor-pointer">

        <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mx-auto my-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48 p-2.5 rounded-md " src={imageSrc} alt="Story image" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{handle}</a>
            <p className="mt-2 text-gray-500">{excerpt}</p>
            <div className="mt-4">
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">Autismo</span>
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">Ayuda</span>
              <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700">Comunidad</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default OrgContentCard;
