import React from "react";
import "../styles/Header.css";

const styles = {
    
    headingStyle: {
        fontSize: "16px",
    },

    headerStyle: {
        background: "#CAF0F8",
    },
};

export default function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>John Roller</h1>
    </header>
  );
}
