import React from 'react';
import HomePage from "./pages/HomePage";
import TopBar from "./components/TopBar";
import Footer from './components/Footer';
import Overlay from './components/Overlay';

const App = () => {

  return (
    <div>
      <Overlay />
      <TopBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
