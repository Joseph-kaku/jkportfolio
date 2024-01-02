import React from "react";
import Selfpic from "./selfpotrait.png";

function Navbar() {
return (
    <nav>
    <div class="logo">
        <img src={Selfpic} alt="selfpotrait">
            
        </img>
    </div>
    <ul>
        <li><a href="/#aboutme">About Me</a></li>
        <li><a href="/#resumelay">Resume</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#others">Others</a></li>
    </ul>
    </nav>
);
}

export default Navbar;