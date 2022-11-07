import React from "react";


// add styles here
const styles = {
    header: {
        marginLeft: "14%",
        gridColumn: "span 3",
        fontSize: "32px",
    },

    section: {
        display: "grid",
        margin: "0 -5% 5% 2%",

    },


    head: {

    },

    resumeLink: {

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
            Click here to go to my resume
          </a>
        </div>
        </section>
         
    );
  }
  