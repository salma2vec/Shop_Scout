import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light');
  };

  return (
    <div className={`tdnn ${isDarkMode ? '' : 'day'}`} onClick={toggleDarkMode}>
      <div className={`moon ${isDarkMode ? '' : 'sun'}`}></div>
    </div>
  );
};

export default DarkModeToggle;