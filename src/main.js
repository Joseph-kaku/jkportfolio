import React from "react";
import Selfpic from "./selfpotrait.png";

function Main() { 
    return (
        <div class="main">

            <p> About Me </p>
            <div class="aboutme">
            <div class="text" >
                <p> A little about me </p>
                <p> Paragraph about me </p>
                <p> Technical skills </p>
            </div>

            <div class="image">
                <img src={Selfpic}alt="selfpotrait">
                </img>
            </div>
            </div>

            <p> Resume </p>
            <div class="resumelay">
            <p> Title & Company </p>
            <hr></hr>
            <p> Work Done </p>
            </div>

            <p> Projects </p>
            <div class="projects">
            <div class="best">
            <p> Best Project </p>
            <img alt="best project" >

            </img>
            </div>

            <div class="better">
            <p> Better Project </p>
            <img alt="better project" >
                
            </img>
            </div>
            </div>

            <p> Others </p>
            <div class="others">
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