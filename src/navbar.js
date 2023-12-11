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
        <li><a href="/">About Me</a></li>
        <li><a href="/Resume">Resume</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Others">Others</a></li>
    </ul>
    </nav>
);
}

export default Navbar;