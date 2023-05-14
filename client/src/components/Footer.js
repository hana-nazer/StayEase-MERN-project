import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
    const footerColorClass = props.role === 'admin' ? 'bg-gray-700' : 'bg-teal-900	';
  return (
    <footer className={`fixed bottom-0 left-0 right-0 py-4 text-center bg-gray-700 ${footerColorClass}`}>
      <p className="text-white">
        <FontAwesomeIcon icon={faCopyright}/>
        {' '} 
        StayEase
      </p>
    </footer>
  );
}

export default Footer;
