// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Signup from './components/Signup'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Feature></Feature>
      <Signup></Signup>
      <Footer></Footer>
    </div>
  );
}

export default App;
