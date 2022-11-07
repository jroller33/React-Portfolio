import React from "react";
import "../../styles/Header";

const styles = {
    
    h1Style: {
        fontSize: "16px",
    },

    headerStyle: {
        background: "#CAF0F8",
    },
};

export default function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.h1Style}>John Roller</h1>
    </header>
  );
}
