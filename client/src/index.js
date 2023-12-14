import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './DarkModeToggle.css'; // Import the DarkModeToggle.css file
import ComparisonForm from './components/ComparisonForm';
import ProductResults from './components/ProductResults';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);