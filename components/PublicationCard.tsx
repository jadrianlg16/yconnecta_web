"use server"
import { StaticImageData } from "next/image";
import Carousel from "./Carousel";
import Dropdown from "./Dropdown";

interface Publication {
  title: string;
  description: string;
  images: StaticImageData[];
}


const PublicationCard = ({ publication }: { publication: Publication }) => {
  const dropdownToggle = (
    <i className="fi fi-br-menu-dots-vertical text-slate-800" />
    );
    const deleteLabel = (
      <div className="flex flex-row align-items-center">
      <i className="fi fi-br-trash text-red-500 leading-none mt-[2px]" />
      <p className="text-red-700 text-md font-semibold ml-1 p-0 m-0">Delete</p>
    </div>
  );
  
  return (
    <article className="bg-white rounded-lg p-4 flex flex-1 flex-col min-w-[30%] max-w-[30%]">
      <header className="flex items-center flex-row justify-between">
        <p className="text-dark text-lg font-semibold">{publication.title}</p>
        <Dropdown
          title={dropdownToggle}
          options={[{ label: deleteLabel }, { label: "Delete" }]}
        />
      </header>
      <section className="mt-2 flex flex-col min-h-60 max-h-60">
        <p className="text-dark first-letter:caption-top mb-2">{publication.description}</p>
        <Carousel images={publication.images} />
      </section>
    </article>
  );
};

export default PublicationCard;
