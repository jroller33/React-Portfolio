/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from "./components/divs/Header";
import Navigation from "./components/divs/Navigation";
import Footer from "./components/divs/Footer";
import { Contact, About, Projects, Resume } from './components/pages'


import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    document.title = "John's React Portfolio";
  }, []);

  const [thisPage, setThisPage] = useState("about");

  // this renders whatever page the user clicks on
  function pageLoad() {
    switch (thisPage) {
      case "projects":
        return <Projects />;

      case "resume":
        return <Resume />;

      case "contact":
        return <Contact />;

      default:
        return <About />;

    }
  }

  function newPage(page) {
    setThisPage(page);
  }


  // need to add navbar and footer to this return *****
  return (
    <div className="container">
      <Header />
      <Navigation thisPage={thisPage} newPage={newPage} /> 
      {pageLoad()}
      <Footer />
    </div>
  );
}

export default App;
