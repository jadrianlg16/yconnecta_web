import OrgContentCard from './OrgContentCard';

interface CardData {
title: string;
handle: string;
date: string;
excerpt: string;
imageSrc: string;
}

const OrgContentFeed: React.FC = () => {
// Placeholder data - replace with actual data fetched from your backend
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
        imageSrc: '/placeholder-2.png', // Replace with the path to your actual image
        // tags: ['Autismo', 'Ayuda', 'Comunidad'] // If you want to include the tags as part of the card data
      }
];

return (
    <div className="py-10 bg-sky-9ecce6 min-h-screen">
    <div className="container mx-auto px-4 " >
        {cardsData.map((card, index) => (
          <OrgContentCard key={index} {...card} />
          ))}
    </div>
    </div>
);
};

export default OrgContentFeed;
