import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
  const footerColorClass = props.role === 'admin' ? 'bg-gray-700' : 'bg-teal-900';
  const footerStyle = {
    backgroundColor: 'white',
    borderTop: '1px solid lightgrey',
    height: '40px',
  };

  return (
    <footer className={`fixed bottom-0 left-0 right-0 py-3 text-center ${footerColorClass}`} style={footerStyle}>
      <p className="text-gray-500 text-center">
        <FontAwesomeIcon icon={faCopyright}/>
        {' '} 
        StayEase
      </p>
    </footer>
  );
}

export default Footer;
