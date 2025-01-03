import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ createRoot แทน
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // สร้าง root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);