import React from "react";
import profilePic from "../../files/profilePic.jpg";


const styles = {    // styles for about me page that are used in html
    
    header: { 
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },

    paragraph: {
        fontSize: "32px",

    },

    profilePicStyle: {
        float: "left",

    },


};


// *** add profile pic to html

// HTML for about me page goes here
export default function AboutMe() {
  return (
    <section>
      <h1 style={styles.header}>About Me</h1>
      <img src={profilePic} alt="me" style={styles.profilePicStyle}></img>

      <div>
        <p style={styles.paragraph}>
            I live in Prattville, Alabama and I am currently a GM Manager at Target. I am in a full-stack coding bootcamp, and after graduation I plan on continuing to learn about software development.

        </p>
      </div>
    </section>

  );
}
