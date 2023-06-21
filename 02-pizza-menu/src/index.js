import React from 'react';
import ReactDom from 'react-dom/client';

import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
