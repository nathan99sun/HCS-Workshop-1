import React from "react";
import "./About.css";
import CutePic from "../../assets/SunNathan12.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className='intro-picture'/> 
        </div>
        <div className="intro-item">
          <p>
            Hi! I'm Nathan, and welcome to my homepage! <br />
            I'm currently a student at Harvard College. <br />
            I'm really interested in math, CS, and economics! In particular, I love game theory, combinatorics (q-Eulerian polynomials), and generative adversarial networks :). <br />
            In my free time, I enjoy sleeping at random times, stressing with friends and Dunkin Donuts, complaining (which I'm very good at), and using parentheses way too often. 
            I love going out to eat with friends, fishing, and watching Bayern Munich play. 

          </p>
        </div>
       
      </div>
    </div>
  );
}
