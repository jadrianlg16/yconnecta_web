import React from 'react';

// Type definition for the ButtonProps
// label: Text to be displayed on the button.
// icon: JSX.Element representing an icon to be displayed alongside the label.
// onClick: Function to be executed when the button is clicked.
type ButtonProps = {
  label: string;
  icon: JSX.Element; 
  onClick: () => void;
};

/**
 * Button component that displays a button with an icon, label, and an onClick event.
 * 
 * @param {ButtonProps} props - Contains the label for the button, the icon to display, and the onClick handler.
 * @returns A styled button component with an icon and a label.
 */
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

/**
 * OrgButtons component that aggregates multiple Button components.
 * 
 * Currently, it contains placeholder onClick functions that log actions to the console.
 * In the future, these onClick handlers should be replaced with functions that make calls to the backend
 * to perform actions like calling, sharing, getting directions, contacting, etc.
 * 
 * The commented-out buttons (e.g., 'Donar', 'Unirse') represent future features that may be implemented,
 * indicating where additional backend integrations could be added.
 * 
 * @returns A component that renders a collection of Button components.
 */
const OrgButtons: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <Button label="Llamar" icon={<div>📞</div>} onClick={() => console.log('Llamar')} />
      <Button label="Compartir" icon={<div>↩️</div>} onClick={() => console.log('Compartir')} />
      <Button label="Indicaciones" icon={<div>📍</div>} onClick={() => console.log('Indicaciones')} />
      {/* Future feature buttons, to be implemented */}
      {/* <Button label="Donar" icon={<div>💳</div>} onClick={() => console.log('Donar')} /> */}
      {/* <Button label="Unirse" icon={<div>🔗</div>} onClick={() => console.log('Unirse')} /> */}
      <Button label="Contacto" icon={<div>✉️</div>} onClick={() => console.log('Contacto')} />
    </div>
  );
};

export default OrgButtons;
