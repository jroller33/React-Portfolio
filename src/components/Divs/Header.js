import React from "react";
import "../../styles/Header.css";

const styles = {
    
    h1Style: {
        fontSize: "48px",
    },

    headerStyle: {
        background: "#38b000",
    },
};

export default function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.h1Style}>John Roller</h1>
    </header>
  );
}
