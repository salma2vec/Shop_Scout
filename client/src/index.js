import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './DarkModeToggle.css'; // Import the DarkModeToggle.css file

// Render the App component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
