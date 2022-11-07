import React from "react";

const styles = {
    border: {
        width: "85%",

    },

    image: {
        width: "80%",
        height: "80%",
    },

    title: {
        fontSize: "20px",
    },

};

export default function Card(props) {
    return (
      <div style={styles.border}>
        <div>
          <h2>{props.name}</h2>
        </div>
        <div>
          <figcaption style={styles.title}>{props.title}</figcaption>
          <a  href={props.github}>
          <img
            style={styles.image}
            src={props.image}
            alt="project"
           ></img>
           </a>
        </div>
        <div>

        </div>
      </div>
    );
  }
  