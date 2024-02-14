// import OrgContentCard from './OrgContentCard';

// interface CardData {
// title: string;
// handle: string;
// date: string;
// excerpt: string;
// imageSrc: string;
// }

// const OrgNoticias: React.FC = () => {
// // Placeholder data - replace with actual data fetched from your backend
// const cardsData: CardData[] = [
//     {
//     title: 'Fundación Arena de Atención',
//     handle: '@arena_atencion',
//     date: '25 de Septiembre 2023',
//     excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//     imageSrc: '/a-1.jpg',
//     },
//     {
//         title: 'Como Ayudar a los demas',
//         handle: '@arena_atencion',
//         date: '18 de Septiembre 2023',
//         excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//         imageSrc: '/a-2.jpg', // Replace with the path to your actual image
//         // tags: ['Autismo', 'Ayuda', 'Comunidad'] // If you want to include the tags as part of the card data
//     },
//     {
//         title: 'Haciendo un cambio',
//         handle: '@arena_atencion',
//         date: '12 de Septiembre 2023',
//         excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//         imageSrc: '/a-3.jpg', // Replace with the path to your actual image
//         // tags: ['Autismo', 'Ayuda', 'Comunidad'] // If you want to include the tags as part of the card data
//     }
// ];

// return (
//     <div className="py-10 bg-sky-9ecce6 min-h-screen">
//     <div className="container mx-auto px-4 " >
//         {cardsData.map((card, index) => (
//           <OrgContentCard key={index} {...card} />
//           ))}
//     </div>
//     </div>
// );
// };

// export default OrgNoticias;


// Import the OrgContentCard component for displaying individual news/article cards
import OrgContentCard from './OrgContentCard';

// Define the structure of the data each card will display
interface CardData {
  title: string; // Title of the article or news item
  handle: string; // Social media handle or author identifier
  date: string; // Publication date
  excerpt: string; // A brief summary or excerpt of the content
  imageSrc: string; // Source path of the associated image
  // Consider including additional fields like tags or author if necessary
}

// OrgNoticias functional component definition
const OrgNoticias: React.FC = () => {
  // Placeholder data - this should eventually be replaced with data fetched from the backend
  const cardsData: CardData[] = [
    {
      title: 'Fundación Arena de Atención',
      handle: '@arena_atencion',
      date: '25 de Septiembre 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/a-1.jpg', // Example image path, replace with actual paths
    },
    {
      title: 'Como Ayudar a los demas',
      handle: '@arena_atencion',
      date: '18 de Septiembre 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/a-2.jpg', // Ensure images are correctly hosted and paths are accurate
    },
    {
      title: 'Haciendo un cambio',
      handle: '@arena_atencion',
      date: '12 de Septiembre 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/a-3.jpg', // Validate image sources for optimal loading
    }
  ];

  return (
    <div className="py-10 bg-sky-9ecce6 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Map through the cardsData array to render OrgContentCard components for each item */}
        {cardsData.map((card, index) => (
          <OrgContentCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OrgNoticias;
