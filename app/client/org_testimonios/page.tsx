"use client";

import OrgHeader from "@/components/OrgHeader"
import OrgButtons from "@/components/OrgButtons";
import { useState } from 'react';

type Review = {
  id: number;
  username: string;
  rating: number;
  comment: string;
};

const initialReviews: Review[] = [
  // Populate this array with your initial reviews
  // Example:
  {
    id: 1,
    username: 'Jorge',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    username: 'Alfredo',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 3,
    username: 'Andrea',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  // Add more reviews as needed
];

const Org_Testimonios = () => {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);

    return (
        <div className="container mx-auto px-4">
            <OrgHeader/>
          <div className="flex justify-between items-center mb-8 mt-10">
            <div className="flex items-center ">
              <div className="text-3xl font-bold mr-4 " >5.0</div>
              <div>
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
                {/* You can replace the above with an actual star rating component */}
              </div>
            </div>
            <OrgButtons/>
          </div>
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <div className="font-bold mr-2">{review.username}</div>
                  <div className="text-yellow-400">
                    {/* Render the stars based on the rating */}
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Org_Testimonios

