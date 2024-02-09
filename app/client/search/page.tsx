// import SearchBar from "@/components/SearchBar"
// // import OrgContentFeed from "@/components/OrgContentFeed"
// import OrgItemCards from "@/components/OrgItemCards"
// const Search = () => {
//     return (
//         <div className="h-full flex flex-col w-full pt-[60px]">
//             <SearchBar />
//             {/* <OrgContentFeed /> */}
//             {/* <OrgItemCard /> */}
//             <OrgItemCards items={items} />


//         </div>
//     )
// }



// export default Search
import React from 'react';
import SearchBar from "@/components/SearchBar";
import OrgItemCards from "@/components/OrgItemCards";
import UserHeader from '@/components/UserHeader';


// Define a static array of items
const items = [
    {
        id: 1,
        title: 'Fundación Arena de Atención',
        username: '@arena_atencion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['Autismo', 'Ayuda', 'Comunidad'],
        rating: 5,
        imageUrl: '/placeholder-1.png', // Relative path from the public folder
      },
      {
        id: 2,
        title: 'Fundación Yco',
        username: '@fundacion_yco',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['Autismo', 'Ayuda', 'Comunidad'],
        rating: 5,
        imageUrl: '/placeholder-2.png', // Relative path from the public folder
      },
];

const Search = () => {
  return (
    <div className="h-full flex flex-col w-full pb-20">
    <UserHeader/>
      <SearchBar />
      {/* <OrgContentFeed /> */}
      <OrgItemCards items={items} />
    </div>
  );
};

export default Search;
