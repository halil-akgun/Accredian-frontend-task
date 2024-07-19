import React from 'react';
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Overlay from './components/Overlay';

const App = () => {

  return (
    <div>
      <Overlay />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
