import React from 'react';

type ButtonProps = {
  label: string;
  icon: JSX.Element; 
  onClick: () => void;
};

// Define a single Button component
const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

// Define a component to export all the buttons
const OrgButtons: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <Button label="Llamar" icon={<div>📞</div>} onClick={() => console.log('Llamar')} />
      <Button label="Compartir" icon={<div>↩️</div>} onClick={() => console.log('Compartir')} />
      <Button label="Indicaciones" icon={<div>📍</div>} onClick={() => console.log('Indicaciones')} />
      {/* <Button label="Donar" icon={<div>💳</div>} onClick={() => console.log('Donar')} /> */}
      {/* <Button label="Unirse" icon={<div>🔗</div>} onClick={() => console.log('Unirse')} /> */}
      <Button label="Contacto" icon={<div>✉️</div>} onClick={() => console.log('Contacto')} />
    </div>
  );
};

export default OrgButtons;
