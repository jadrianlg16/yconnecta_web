import PublicationCard from "@/components/PublicationCard";
import img1 from "@/public/consejo-civico.png";
import dragon from "@/public/dragon.jpg";
import castilloDia from "@/public/castilloDia.jpg";
import castilloNoche from "@/public/castillo.jpg";
import statua from "@/public/estatua.jpg";

const PublicacionesPage = () => {
  const publications = [
    {
      title: "Publicación 1",
      description: "Descripción de la publicación 1",
      images: [img1, img1, img1]
    },
    {
      title: "Publicación 2",
      description: "Descripción de la publicación 2",
      images: [dragon, statua],
    },
    {
      title: "Publicación 3",
      description: "Descripción de la publicación 3",
      images: [castilloNoche, img1],
    },
    {
      title: "Publicación 2",
      description: "Descripción de la publicación 2",
      images: [castilloDia],
    },
    {
      title: "Publicación 3",
      description: "Descripción de la publicación 3",
      images: [],
    },
    {
      title: "Publicación 2",
      description: "Descripción de la publicación 2",
      images: [],
    },
    {
      title: "Publicación 3",
      description: "Descripción de la publicación 3",
      images: [],
    },
    
  ]
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row justify-between items-center w-full">
        <p className="text-2xl font-semibold ms-4 text-white">Has hecho {publications.length} 
           {publications.length === 1 ? " publicación" : " publicaciones"}
        </p>
        <button className="btn btn-primary me-4 flex flex-row items-center hover:text-secondary-light text-white font-semibold gap-2 text-2xl">
        <i className="fi fi-sr-add-image mt-1"/>
          Crear publicación
          </button>  
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full gap-8 px-3 mt-5 max-h-[80vh] overflow-auto">
        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </div> 
    </div>
  );
};

export default PublicacionesPage;
