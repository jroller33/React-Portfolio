import React from "react";


// add styles here
const styles = {
    header: {
        fontSize: "32px",
        textAlign: "center",

    },

    section: {
        display: "grid",
        margin: "0 -5% 5% 2%",

    },


    head: {
        textAlign: "center",

    },

    resumeLink: {
        fontSize: "16px",
        color: "black",
    }
};

// HTML for resume page goes here
export default function Resume() {
    return (
        <section style={styles.section}>
        <h1 style={styles.header}>My Resume</h1>
        <div style={styles.head}>
          <h2>John Roller</h2>
          <p>Aspiring software developer</p>
          <a
            style={styles.resumeLink}
            href="https://www.linkedin.com/in/john-roller-b64a6023a/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin profile
          </a>
          <br />
          <a
            style={styles.resumeLink}
            href="https://github.com/jroller33"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
          <br />
          <h2> Proficiencies: </h2>
          <p>
         - JavaScript
         - Express.js
         - SQL
         - MongoDB
         - ReactJS
         - nodejs
          </p>
        </div>
        </section>
         
    );
  }
  