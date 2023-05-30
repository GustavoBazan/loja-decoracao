import './Home.css';

import CarouselHome from '../components/CarouselHome';
import Products from '../components/Products';
import Footer from '../components/Footer';

//import React from 'react';

function Home() {
 
  return (
    <>
      <CarouselHome/>
      <h1>Produtos</h1>
      <Products/>
      <Footer/>
    </>
  );
}

export default Home;
