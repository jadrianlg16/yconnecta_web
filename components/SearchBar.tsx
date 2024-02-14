// const SearchBar: React.FC = () => {
//     return (
//       <div className="flex items-center justify-center my-8">
//         <div className="flex items-center border-2 border-gray-300 bg-white rounded-full shadow-lg">
//           <input
//             type="text"
//             className="px-6 py-3 w-80 leading-tight text-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out"
//             placeholder="¿En qué te podemos ayudar?..."
//           />
//           <button className="flex items-center justify-center px-4 rounded-r-full text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-200 transition duration-300 ease-in-out">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M23.384,21.619,16.764,15l.054-.07a9.506,9.506,0,1,0-1.414,1.414l.07-.054,6.62,6.62a1,1,0,0,0,1.415-1.414ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.508,7.508,0,0,1,10.5,18Z"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default SearchBar;
  // SearchBar component definition using React functional component syntax
const SearchBar: React.FC = () => {
  return (
    // Container div for the search bar with vertical margin and centered alignment
    <div className="flex items-center justify-center my-8">
      // Inner div with border, background color, rounded shape, and shadow for the search input and button
      <div className="flex items-center border-2 border-gray-300 bg-white rounded-full shadow-lg">
        // Input field for search queries
        <input
          type="text"
          // Styling for the input: padding, width, text color, rounded left side, focus outline and ring effects, and transition for smooth appearance changes
          className="px-6 py-3 w-80 leading-tight text-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out"
          placeholder="¿En qué te podemos ayudar?..." // Placeholder text asking the user how the site can help
        />
        // Button for submitting the search query
        <button
          // Styling for the button: padding, rounded right side, text color, background color, hover and focus effects, and transition for smooth appearance changes
          className="flex items-center justify-center px-4 rounded-r-full text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-200 transition duration-300 ease-in-out"
        >
          // SVG icon for the search button, styled to fill the current text color
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.384,21.619,16.764,15l.054-.07a9.506,9.506,0,1,0-1.414,1.414l.07-.054,6.62,6.62a1,1,0,0,0,1.415-1.414ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.508,7.508,0,0,1,10.5,18Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
