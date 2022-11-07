import React from "react";
// need to import a profile pic


const styles = {    // styles for about me page that are used in html
    
    header: { 

    },

    paragraph: {

    },

    profilePic: {

    },


};


// *** add profile pic to html

// HTML for about me page goes here
export default function AboutMe() {
  return (

    <section>
      <h1 style={styles.headerStyle}>About Me</h1>
      <div>
        <p style={styles.pStyle}>

          <br />
          After graduation I plan on purusing a career in full stack
          development. This bootcamp has been fantastic, the more I learn the
          more I look forward to starting.
        </p>
      </div>
    </section>

  );
}
