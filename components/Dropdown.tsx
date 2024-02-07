'use client'
import { ReactElement, useState } from "react";

interface DropdownProps {
  title: ReactElement | string;
  options: { label: ReactElement | string; action?: () => void }[] | string[];
  toggleProps?: string;
  menuProps?: string;
}

const Dropdown = ({ title, options, toggleProps, menuProps }: DropdownProps) => {  
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    optionAction: (() => void) | undefined
  ) => {
    e.preventDefault();
    setShowMenu(false);
    optionAction && await optionAction();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`inline-flex items-center px-4 py-2 shadow-sm rounded-md ${
          toggleProps || "text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
        } `}
        onClick={() => setShowMenu(!showMenu)}
      >
        {title}
      </button>

      {showMenu && (
        <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white`}>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={(e) => handleClick(e, typeof option === 'object' ? option.action : undefined)}
              >
                {typeof option === "object" ? option.label : option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
