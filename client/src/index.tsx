import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

// Stores
import store from './stores/combineStores';

// CSS
import './index.css';
import './DarkModeToggle.css'; // Import the DarkModeToggle.css file

// Render the App component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
