// "use client";
// import Link from 'next/link';

// interface OrgContentCardProps {
//     title: string;
//     handle: string;
//     date: string;
//     excerpt: string;
//     imageSrc: string;
//   }
  
// const OrgContentCard: React.FC<OrgContentCardProps> = ({ title, handle, date, excerpt, imageSrc }) => {
//   return (
//     <Link href="/client/org_noticias" passHref>
//       <div className="cursor-pointer">

//         <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mx-auto my-5">
//         <div className="md:flex">
//           <div className="md:flex-shrink-0">
//             <img className="h-48 w-full object-cover md:w-48 p-2.5 rounded-md " src={imageSrc} alt="Story image" />
//           </div>
//           <div className="p-8">
//             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
//             <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{handle}</a>
//             <p className="mt-2 text-gray-500">{excerpt}</p>
//             <div className="mt-4">
//               <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">Autismo</span>
//               <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">Ayuda</span>
//               <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700">Comunidad</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </Link>
//   );
// };

// export default OrgContentCard;

// "use client" directive is used in Next.js to indicate that this component or module should only be imported and run on the client-side.
// This can optimize performance by preventing server-side rendering of components that rely on client-side functionalities like browser APIs.
"use client";
import Link from 'next/link';

// Defines the properties expected by the OrgContentCard component.
// title: The main title of the content card.
// handle: A secondary title or identifier, which could be used as a link label.
// date: The publication date of the content. Currently included for future use but not displayed.
// excerpt: A brief summary or excerpt of the content to give readers an idea of what it's about.
// imageSrc: The URL of the image to display on the card, adding a visual element to the content.
interface OrgContentCardProps {
  title: string;
  handle: string;
  date: string;
  excerpt: string;
  imageSrc: string;
}

/**
 * OrgContentCard displays a clickable card with an image, title, handle (or subtitle), and an excerpt.
 * It's designed for use in lists or grids where summarizing content visually is beneficial.
 * The card uses a Next.js Link for navigation, enhancing SPA (Single Page Application) performance
 * by preventing full page reloads on navigation.
 * 
 * @param OrgContentCardProps - Destructured props for easy access to each required piece of information.
 * @returns A React functional component rendering a stylized content card.
 */
const OrgContentCard: React.FC<OrgContentCardProps> = ({ title, handle, date, excerpt, imageSrc }) => {
  return (
    // The Link component wraps the card to make it navigable. Here, it's hardcoded to route to "/client/org_noticias",
    // which should be replaced with a dynamic path if necessary, e.g., using the handle to direct to specific content details.
    <Link href="/client/org_noticias" passHref>
      <div className="cursor-pointer">
        <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mx-auto my-5">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              {/* The image is displayed on the left in a desktop layout and on top in mobile layouts. */}
              <img className="h-48 w-full object-cover md:w-48 p-2.5 rounded-md" src={imageSrc} alt="Story image" />
            </div>
            <div className="p-8">
              {/* Title is presented in a larger, bold font for emphasis. */}
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
              {/* The handle acts as a clickable link for further user engagement, although it's a placeholder here. */}
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{handle}</a>
              {/* Excerpt provides a brief summary or teaser of the content. */}
              <p className="mt-2 text-gray-500">{excerpt}</p>
              {/* Tags for categorization, hardcoded in this example but could be dynamically generated. */}
              <div className="mt-4">
                <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">Autismo</span>
                <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">Ayuda</span>
                <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700">Comunidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrgContentCard;
