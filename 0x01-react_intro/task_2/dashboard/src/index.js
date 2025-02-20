import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

// Create a root for the main app
const root = createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);