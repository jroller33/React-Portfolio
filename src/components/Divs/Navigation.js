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

export default function Navbar({ changePage }) {
    return (

        
    <nav style={styles.navStyle} className="navbar">
    <a href="#about" onClick={() => changePage("about")}>
      About Me
    </a>
    <a href="#portfolio" onClick={() => changePage("projects")}>
      Portfolio
    </a>
    <a href="#contact" onClick={() => changePage("contact")}>
      Contact
    </a>
    <a href="#resume" onClick={() => changePage("resume")}>
      Resume
    </a>
  </nav>


    );
}

