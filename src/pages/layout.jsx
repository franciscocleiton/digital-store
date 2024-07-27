import React from 'react';
import Header from '../compoments/Header';
import Footer from '../compoments/Footer';

// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;