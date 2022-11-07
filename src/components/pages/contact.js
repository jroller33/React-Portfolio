import React from "react";


export default function ContactMe() {
    
    // styles for contact page



    return (

        <div>
        <h1>Contact Me</h1>
        <form>
          <div>
            <label for="name">Name:</label>
            <br></br>
            <input
              type="text"
              name="name"
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <br></br>
            <input
              type="email"
              name="email"
            />
          </div>
          <div>
            <label for="message">Message:</label>
            <br></br>
            <textarea
              name="message"
            />
          </div>
          <div>
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>

    );
  }
  
