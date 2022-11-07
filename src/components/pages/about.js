import React from "react";
import profilePic from "../../files/profilePic.jpg";


const styles = {    // styles for about me page that are used in html
    
    header: { 
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "48px",
        marginLeft: "15%",

    },

    paragraph: {
        fontSize: "32px",

    },

    profilePicStyle: {
        float: "left",
        borderRadius: "100px",
        margin: "0 2% 2%",
        height: "25%",
        width: "50%"


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
