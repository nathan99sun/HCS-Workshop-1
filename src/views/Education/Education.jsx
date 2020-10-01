import React from "react";

import CutePic from "../../assets/HarvardLogo.png";
import CutePic1 from "../../assets/ExeterLogo.png";
import Project from "../../components/Project/Project";

function Item(props){
  return <p>{props.title}</p>
}

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
        <img src={CutePic} className='intro-picture'/> 
        </div>
        <div className="timeline-background">
          <br/> <br/> <br/> 
          <Item title = {<b>Harvard College '24</b>}></Item>
          <Item title = "Currier House"></Item>
          <Item title = "Courses: Math 25A, Economics 10A, German 20B, Expos 20"></Item>
        </div>
        
      </div>
    
      <div className="intro-background">
        <div className="intro-item">
        <img src={CutePic1} className='intro-picture'/> 
        </div>
        <div className="timeline-background">
          <br/> <br/> <br/> 
          <Item title = {<b>Phillips Exeter Academy '20</b>}></Item>
          <Item title = "Abbot Hall "></Item>
          <Item title = "Relevant coursework: Machine Learning, Multivariable Calculus, Game Theory, Linear Algebra, Quantum Mechanics, Macroeconomics, Microeconomics"></Item>
        </div>
      </div>

    </div>
  );
}