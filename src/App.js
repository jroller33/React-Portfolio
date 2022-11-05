import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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

    

    </div>
  );
}

export default App;
