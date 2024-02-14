
// "use client";
// import React from 'react';
// import OrgButtons from './OrgButtons';

// interface Item {
//   id: number;
//   title: string;
//   username: string;
//   description: string;
//   tags?: string[];
//   rating: number;
//   imageUrl: string;
// }

// interface OrgItemCardsProps {
//   items: Item[];
// }

// const OrgItemCards: React.FC<OrgItemCardsProps> = ({ items }) => {
//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <span key={index} className={`fa fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}></span>
//     ));
//   };

//   return (
//     <div className="flex justify-center w-full">
//       <div className="flex flex-wrap justify-center max-w-4xl mx-auto p-4">
//         {items.map((item) => (
//           <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md m-4">
//             <img className="w-full h-40 object-cover" src={item.imageUrl} alt={item.title} />
//             <div className="p-4">
//               <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//               <p className="text-gray-700 text-sm mb-3">{item.description}</p>
//               <div className="flex flex-wrap mb-4">
//                 {item.tags?.map((tag, index) => (
//                   <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex items-center mb-4">
//                 {renderStars(item.rating)}
//               </div>
//               <OrgButtons />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrgItemCards;

"use client";
import React from 'react';
import OrgButtons from './OrgButtons';

// Define the structure of each item to be displayed in the card.
interface Item {
  id: number;
  title: string;
  username: string; // Unused in the current implementation but may be intended for future use.
  description: string;
  tags?: string[]; // Optional array of tags for categorization.
  rating: number; // Rating out of 5.
  imageUrl: string; // URL to the item's image.
}

// Props for the OrgItemCards component, expecting an array of items.
interface OrgItemCardsProps {
  items: Item[];
}

/**
 * OrgItemCards is a functional component that renders a collection of item cards.
 * Each card displays an image, title, description, a set of tags, and a rating in stars.
 * It also includes an OrgButtons component for each item for potential actions.
 *
 * @param {OrgItemCardsProps} props - Contains the array of items to be rendered.
 * @returns A React component rendering a collection of item cards.
 */
const OrgItemCards: React.FC<OrgItemCardsProps> = ({ items }) => {
  // Function to render the rating as stars. Receives the rating number and returns a set of star icons.
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      // Renders a star for each rating point, filled if under the rating value, and outlined otherwise.
      <span key={index} className={`fa fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}></span>
    ));
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center max-w-4xl mx-auto p-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md m-4">
            <img className="w-full h-40 object-cover" src={item.imageUrl} alt={item.title} />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{item.description}</p>
              <div className="flex flex-wrap mb-4">
                {item.tags?.map((tag, index) => (
                  // Renders each tag as a small, styled pill.
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-4">
                {renderStars(item.rating)} {/* Call to render the stars based on the item's rating. */}
              </div>
              <OrgButtons /> {/* Placeholder for action buttons, included at the bottom of each card. */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgItemCards;
