import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavProvider } from './context/navigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavProvider>
        <App />
    </NavProvider>
  
  
);
