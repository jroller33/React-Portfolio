import React from "react";
import "../../styles/Navigation.css";




//  add links for about, portfolio, contact, and resume pages

export default function Navigation({ newPage }) {
  return (

<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
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

/* <nav class="py-2 bg-light border-bottom">
<div class="container d-flex flex-wrap">
  <ul class="nav me-auto">
    <li class="nav-item"><a href="#about" onClick={() => newPage("about")} class="nav-link link-dark px-2 active" aria-current="page">About</a></li>

    <li class="nav-item"><a href="#projects" onClick={() => newPage("projects")} class="nav-link link-dark px-2">Projects</a></li>

    <li class="nav-item"><a href="#contact" onClick={() => newPage("contact")} class="nav-link link-dark px-2">Contact</a></li>

    <li class="nav-item"><a href="#resume" onClick={() => newPage("resume")} class="nav-link link-dark px-2">Resume</a></li>
  </ul>

</div>
</nav> */
