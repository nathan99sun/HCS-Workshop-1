import React from "react";
import "./Experience.css";

function TimeLineItem(props){


  return (
    <div 
      onClick = {() => {
        props.setactivetitle(props.title);
      }}
      className = "timeline-item">
        <h1>{props.title}</h1>
    </div>
    );

}

export default function ExperienceScreen() {

  const [activetitle,setactivetitle] = React.useState('BLANK');

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
          title = "Titlesomething"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Titlesomething1"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Titlesomething2"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Titlesomething3"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Titlesomething4"
          setactivetitle = {setactivetitle}
          ></TimeLineItem>

          <TimeLineItem 
          title = "Titlesomething5"
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
