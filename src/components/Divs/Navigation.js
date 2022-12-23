import React from "react";
import "../../styles/Navigation.css";




//  add links for about, portfolio, contact, and resume pages

export default function Navigation({ newPage }) {
  return (

    <nav class="py-2 bg-light border-bottom">
      <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
          <li class="nav-item"><a href="#about" onClick={() => newPage("about")} class="nav-link link-dark px-2 active" aria-current="page">About</a></li>

          <li class="nav-item"><a href="#projects" onClick={() => newPage("projects")} class="nav-link link-dark px-2">Projects</a></li>

          <li class="nav-item"><a href="#contact" onClick={() => newPage("contact")} class="nav-link link-dark px-2">Contact</a></li>

          <li class="nav-item"><a href="#resume" onClick={() => newPage("resume")} class="nav-link link-dark px-2">Resume</a></li>
        </ul>

      </div>
    </nav>

  );
}

/* <nav className="navbar">
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
</nav>  */

// const styles = {
//   navStyle: {
//       alignItems: "center",
//       background: "38b000",
//       justifyContent: "space-evenly",
//       color: "black"
//   },
// };
