// "use client";
// import React from 'react';

// // Componente principal
// const OrgTagsSelection = () => {
//     const tags = [
//         'Psicología', 'Autismo', 'Niños', 'Terapia', 'Educación',
//         'Ansiedad', 'Depresión', 'Salud Mental', 'Familia',
//         // remplazar con llamada al api
//       ];


//   return (
//     <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center">
//       {/* Contenedor del logo y título */}
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-gray-700">yConnect</h1>
//         <p className="text-gray-500">Escoge las etiquetas que se ajusten a la ayuda que buscas...</p>
//       </div>

//       {/* Contenedor de búsqueda */}
//       <div className="relative mb-6">
//         <input
//           className="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
//           type="text"
//           placeholder="Buscar etiquetas..."
//         />
//         <div className="absolute top-0 left-0 inline-flex items-center p-2">
//           <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//             <path d="M19 19L15 15M12 4a8 8 0 0116 0 8 8 0 01-16 0z"></path>
//           </svg>
//         </div>
//       </div>

//       {/* Contenedor de etiquetas */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
//       {tags.map((tag, index) => (
//         <div key={index} className="bg-green-200 text-green-700 text-xs font-semibold px-4 py-2 rounded-full text-center">
//           {tag}
//         </div>
//       ))}
//     </div>

//       {/* Botones de acción */}
//       <div className="flex">
//         <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//           Continuar
//         </button>
//         <button className="ml-4 text-blue-500 hover:underline" type="button">
//           Saltar 
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrgTagsSelection;

"use client";
import React from 'react';
import Link from 'next/link';

// Componente principal
const OrgTagsSelection = () => {
    const tags = [
        'Psicología', 'Autismo', 'Niños', 'Terapia', 'Educación',
        'Ansiedad', 'Depresión', 'Salud Mental', 'Familia',
        // remplazar con llamada al api
    ];

   

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center">
      {/* Contenedor del logo y título */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-700">yConnect</h1>
        <p className="text-gray-500">Escoge las etiquetas que se ajusten a la ayuda que buscas...</p>
      </div>

      {/* Contenedor de búsqueda */}
      <div className="relative mb-6">
        <input
          className="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Buscar etiquetas..."
        />
        <div className="absolute top-0 left-0 inline-flex items-center p-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 19L15 15M12 4a8 8 0 0116 0 8 8 0 01-16 0z"></path>
          </svg>
        </div>
      </div>

      {/* Contenedor de etiquetas */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {tags.map((tag, index) => (
        <div key={index} className="bg-green-200 text-green-700 text-xs font-semibold px-4 py-2 rounded-full text-center">
          {tag}
        </div>
      ))}
    </div>
            {/* Botones de acción */}
            <div className="flex">
                <Link href="/client/home" passHref>
                    <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Continuar
                    </button>
                </Link>
                <Link href="/client/home" passHref>
                    <button className="ml-4 text-blue-500 hover:underline">
                        Saltar
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default OrgTagsSelection;

