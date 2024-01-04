import React from "react";
import Selfpic from "./selfpotrait.png";

function Main() { 
    return (
        <div class="main">

            <p> About Me </p>
            <div id ="aboutme">
            <div class="text" >
            <p> I have been working with Web development tools for the past 3 years. </p>
            <p> I am interested in building websites and web applications </p>     
            <p> that will aid users in their endeavors to reach audiences. </p> 
            <p> I am proficient in the following languages HTML, CSS and JavaScript, SQL, Node.js, and Express.js.  </p>
            <p> I have experience with MongoDB and with the Render Web Service</p>
            <p> I am currently learning React. </p>
            </div>

            <div class="image">
                <img src={Selfpic}alt="selfpotrait">
                </img>
            </div>
            </div>

            <p> Resume </p>
            <div id ="resumelay">
            <img alt="resume" >

            </img>
            </div>

            <p> Projects </p>
            <div id ="projects">  
            <div class = "desc">
                <p> MacawManager </p>
                <p> Shoelog </p>
                </div>

                <div class="imgs">
                <img alt="projects" ></img>
                <img alt="projects" ></img>
                </div>
            {/* <div class="best">
            <p> Best Project </p>
            <img alt="best project" >

            </img>
            </div>

            <div class="better">
            <p> Better Project </p>
            <img alt="better project" >
                
            </img>
            </div> */}
            </div>

            <p> Others </p>
            <div id ="others">
                <img alt="others" ></img>
                <img alt="others" ></img>
                <img alt="others" ></img>
                <img alt="others" ></img>
                <img alt="others" ></img>
            </div>
        </div>
    );
}

export default Main;