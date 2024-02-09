// pages/index.tsx
import Image from 'next/image';
import UserHeader from '@/components/UserHeader';

const Home = () => {
  const imageLinkData = [
    {
      title: 'Sugerencias',
      imageUrl: '/ppl-banner.jpg', // No need to use relative paths, just start from the base URL
      linkUrl: '/client/search',
    },
    {
      title: 'Publicaciones',
      imageUrl: '/publicaciones.jpg',
      linkUrl: '/client/publicaciones',
    },
    {
      title: 'Cerca de mi',
      imageUrl: '/map-banner.jpg',
      linkUrl: '/client/near_me',
    },
  ];

return (
    <div className="w-full flex flex-col gap-4 pb-20">
        <UserHeader/>
      {imageLinkData.map((item, index) => (
        <div 
          key={index} 
          className="relative block mx-auto transition-shadow rounded-xl overflow-hidden shadow-lg" 
          style={{ height: '200px', width: '100%', maxWidth: '640px' }} // adjust the height and maxWidth as needed
        >
          <a href={item.linkUrl} className="absolute inset-0 z-10" aria-label={item.title}></a>
          <div className="w-full h-full">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-90 rounded-b-xl">
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;