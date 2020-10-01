import React from "react";
import "./Experience.css";

function TimeLineItem(props){


  return (
    <div 
      onClick = {() => {
        props.setactivetitle(props.descrip);
      }}
      className = "timeline-item">
        <h1>{props.title}</h1>
    </div>
    );

}

export default function ExperienceScreen() {

  const [activetitle,setactivetitle] = React.useState('');

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
          title = "Number Theory Research at UCONN"
          descrip = "Discovered characteristics of rational continued fractions and their relationship to perfect quantum state transfer."
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "PROMYS 2017, 2018 Alum"
          descrip = "Program in Math for Young Scientists"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Combinatorics Research at PROMYS 2018"
          descrip = "Conducted extensive research in q-analogue Eulerian polynomials and Gunnells' stabilization conjecture."
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Jack Kent Cooke College Scholar"
          descrip = "Undergraduate scholarship program"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Ads Associate for the Harvard Crimson"
          descrip = "University daily since 1873 :)"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

        
        </div>
        <div className="highlight-background">
          <h1>{activetitle}</h1>
          
        </div>
      </div>
    </div>
  );
}
