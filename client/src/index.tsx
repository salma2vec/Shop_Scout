import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// import App from './App';

// Stores
import store from './stores/combineStores';

// CSS
import './index.css';
import './DarkModeToggle.css'; // Import the DarkModeToggle.css file

// Router
import { router } from './router/router';

// Render the App component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
