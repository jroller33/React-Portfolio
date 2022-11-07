import React from "react";
import "../../styles/Navigation.css";

const styles = {
    navStyle: {
        alignItems: "center",
        background: "CAF0F8",
        justifyContent: "space-evenly",
    },
};


//  add links for about, portfolio, contact, and resume pages

export default function Navigation({ newPage }) {
    return (

        
    <nav style={styles.navStyle} className="navbar">
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

