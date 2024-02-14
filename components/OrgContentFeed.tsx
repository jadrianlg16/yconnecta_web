// import OrgContentCard from './OrgContentCard';

// interface CardData {
// title: string;
// handle: string;
// date: string;
// excerpt: string;
// imageSrc: string;
// }

// const OrgContentFeed: React.FC = () => {
// // Placeholder data - replace with actual data fetched from your backend
// const cardsData: CardData[] = [
//     {
//     title: 'Fundación Arena de Atención',
//     handle: '@arena_atencion',
//     date: '25 de Septiembre 2023',
//     excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//     imageSrc: '/placeholder-1.png',
//     },
//     {
//         title: 'Fundación YCO',
//         handle: '@fundacion_yco',
//         date: '25 de Septiembre 2023',
//         excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
//         imageSrc: '/placeholder-2.png', // Replace with the path to your actual image
//         // tags: ['Autismo', 'Ayuda', 'Comunidad'] // If you want to include the tags as part of the card data
//       }
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

// export default OrgContentFeed;

import OrgContentCard from './OrgContentCard';

// Define the structure of the data each content card will display.
interface CardData {
  title: string; // The title of the content item.
  handle: string; // A unique identifier or handle associated with the content, often used as a subtitle.
  date: string; // The publication date of the content item.
  excerpt: string; // A brief summary or excerpt of the content.
  imageSrc: string; // The source URL for the content item's image.
}

/**
 * OrgContentFeed component that renders a feed of content cards using the OrgContentCard component.
 * This component is responsible for mapping over an array of card data and rendering an individual
 * OrgContentCard for each item in the array.
 * 
 * The cardsData array currently contains placeholder data. In a real application, you would likely fetch
 * this data from a backend service or database.
 * 
 * @returns A React functional component that renders a dynamic list of content cards.
 */
const OrgContentFeed: React.FC = () => {
  // Placeholder data array - in a real application, replace this with data fetched from your backend.
  const cardsData: CardData[] = [
    {
      title: 'Fundación Arena de Atención',
      handle: '@arena_atencion',
      date: '25 de Septiembre 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/placeholder-1.png',
    },
    {
      title: 'Fundación YCO',
      handle: '@fundacion_yco',
      date: '25 de Septiembre 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/placeholder-2.png',
      // tags: ['Autismo', 'Ayuda', 'Comunidad'] // Uncomment and use if you decide to include tags in your card data.
    }
  ];

  return (
    // The container for the content feed, styled with Tailwind CSS for appearance and layout.
    <div className="py-10 bg-sky-9ecce6 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Mapping over the cardsData array to render a OrgContentCard for each item. */}
        {cardsData.map((card, index) => (
          <OrgContentCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default OrgContentFeed;
