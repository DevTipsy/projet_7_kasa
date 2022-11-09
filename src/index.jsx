import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//On donne un titre à l'onglet
function useTitle(title) {
  useEffect(() => {
    document.title = `Kasa | ${title}`;
  });
}

export default useTitle;