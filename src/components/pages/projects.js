//    done


// using cards for each project that come from projectsJSON
import projectsJSON from "../../projectsJSON.json";
import Card from "./cards";   
import React from "react";


// add styles for projects here
const styles = {

  head: {
    textAlign: "center",
    fontSize: "32px",

  },

  grid: {
    gridTemplateColumns: "1fr 1fr",
    display: "grid",
    textAlign: "center",
    marginBottom: "10%",
    gap: "1%",

  },
};


// HTML for projects page goes here
export default function Projects() {
    return (

      <section>
      <h1 style={styles.head}>My Projects</h1>
      <div style={styles.grid}>
        {projectsJSON.map((projectsJSON) => (
          <Card
            key={projectsJSON.id}
            image={projectsJSON.image}
            title={projectsJSON.title}
            github={projectsJSON.github}
          />
        ))}
      </div>
    </section>

    );
  }
  