import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

// index.tsx or App.tsx
import './theme/Typography.css';
import './theme/Navbar.css';
import './theme/About.css';
import './theme/Header.css';
import './theme/Services.css';
import './theme/Contact.css';


function App() {
  return (
    <>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Services></Services>
        <Contact></Contact>
    </>
);
}

export default App;
