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
          <img
            style={styles.image}
            src={props.image}
            alt="project"
          ></img>
        </div>
        <div>
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
          >
          </a>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
          </a>
        </div>
      </div>
    );
  }
  