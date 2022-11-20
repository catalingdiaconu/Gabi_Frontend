import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/homepage.scss'
import './styles/nav.scss'
import './styles/auth.scss'
import './styles/footer.scss'
import './index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
