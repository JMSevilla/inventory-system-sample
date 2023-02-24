import React from 'react';
import ReactDOM from 'react-dom/client';
import ApplicationRouter from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>
)