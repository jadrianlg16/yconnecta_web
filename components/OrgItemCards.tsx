
"use client";
import React from 'react';
import OrgButtons from './OrgButtons';

interface Item {
  id: number;
  title: string;
  username: string;
  description: string;
  tags?: string[];
  rating: number;
  imageUrl: string;
}

interface OrgItemCardsProps {
  items: Item[];
}

const OrgItemCards: React.FC<OrgItemCardsProps> = ({ items }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
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
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-4">
                {renderStars(item.rating)}
              </div>
              <OrgButtons />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgItemCards;
