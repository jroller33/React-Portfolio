import React from "react";
import "../../styles/Navigation.css";




//  add links for about, portfolio, contact, and resume pages

export default function Navigation({ newPage }) {
    return (

        
    <nav className="navbar">
    <a href="#about" onClick={() => newPage("about")}>
      About Me
    </a>
    <a href="#projects" onClick={() => newPage("projects")}>
      Portfolio
    </a>
    <a href="#contact" onClick={() => newPage("contact")}>
      Contact
    </a>
    <a href="#resume" onClick={() => newPage("resume")}>
      Resume
    </a>
  </nav>


    );
}

// const styles = {
//   navStyle: {
//       alignItems: "center",
//       background: "38b000",
//       justifyContent: "space-evenly",
//       color: "black"
//   },
// };