/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from "./components/Divs/Header";
import Navbar from "./components/Divs/Navbar";
import Footer from "./components/Divs/Footer";


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
   

    }
  }

  function newPage(page) {
    setThisPage(page);
  }


  // need to add navbar and footer to this return *****
  return (
    <div className="container">
      <Header />
      <Navbar thisPage={thisPage} newPage={newPage} /> 
      {pageLoad()}
      <Footer />
    </div>
  );
}

export default App;
