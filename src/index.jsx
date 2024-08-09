import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/CoinContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CoinContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CoinContextProvider>
  </React.StrictMode>
);
