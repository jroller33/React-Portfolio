import React from "react";
import "../../styles/Footer.css";


const styles = {
    footerStyle: {
      justifyContent: "space-around",
    },
  };
  
  //  add icons for each link

  //        add links to linkedin ****
  export default function Footer() {
    return (
      <footer style={styles.footerStyle} className="footer">
        <ul className="list">
          <a
            href="https://github.com/jroller33"
            alt="Github logo"
            target="_blank"
            rel="noreferrer"
          >
          </a>
          <a
            href="blank"
            alt="LinkedIn logo"
            target="_blank"
            rel="noreferrer"
          >
          </a>
          <a
            href="blank"
            alt="StackOverflow logo"
            target="_blank"
            rel="noreferrer"
          >
          </a>
        </ul>
      </footer>
    );
  }
  