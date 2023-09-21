import React, { useState } from 'react';
import {AiOutlineDown} from "react-icons/ai"
const CollapsibleContainer = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`width2 px-3 mx-auto collapsible-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="header" onClick={toggleContent}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}><AiOutlineDown /></span>
      </div>
      <div className="content">{isOpen && children}</div>
    </div>
  );
};

export default CollapsibleContainer;
