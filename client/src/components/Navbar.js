import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
    const navbarColorClass = props.role === 'admin' ? 'bg-gray-700' : 'bg-teal-900	';
  return (
    <nav className={`flex items-center justify-between p-4 ${navbarColorClass}`}>
      <span className="mr-2 font-bold text-white">{props.title}</span>
      <div className="flex items-center">
        <span className="mr-2 text-white">{props.name}</span>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="w-5 h-5 text-white fill-current"
        />
      </div>
    </nav>
  );
}

export default Navbar;
