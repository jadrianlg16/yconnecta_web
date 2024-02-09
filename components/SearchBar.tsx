const SearchBar: React.FC = () => {
    return (
      <div className="flex items-center justify-center my-8">
        <div className="flex items-center border-2 border-gray-300 bg-white rounded-full shadow-lg">
          <input
            type="text"
            className="px-6 py-3 w-80 leading-tight text-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out"
            placeholder="¿En qué te podemos ayudar?..."
          />
          <button className="flex items-center justify-center px-4 rounded-r-full text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-200 transition duration-300 ease-in-out">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.384,21.619,16.764,15l.054-.07a9.506,9.506,0,1,0-1.414,1.414l.07-.054,6.62,6.62a1,1,0,0,0,1.415-1.414ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.508,7.508,0,0,1,10.5,18Z"/>
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  