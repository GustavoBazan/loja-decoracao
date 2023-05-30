import { useState } from "react";

import Menu from './Menu.jsx';

import './Navbar.css';
import '../App.css'


// BOOTSTRAP ICONS
import { BoxArrowInRight } from "react-bootstrap-icons"
import { BrightnessHigh } from "react-bootstrap-icons"
import { MoonStars } from "react-bootstrap-icons"

function Navbar() {
    var r = document.querySelector(':root');
    const [light, changeTheme] = useState(false);
    const handleClick = () => {
      changeTheme(!light);
      if (!light) {
        r.style.setProperty('--white', '#646461');
        r.style.setProperty('--featured', 'red');
      } else {
        r.style.setProperty('--white', '#fcfefe');
        r.style.setProperty('--dark-base', '#141918');
        r.style.setProperty('--featured', '#DBF227');
      }
      
    };
    return (
    <div>
      <div className="navbar">
        <div className="logo">Decora<b>_</b></div>

        <div className="List">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        

        <Menu/>

        <div className="widgets">
          <button>
            <a href="/login">
                <BoxArrowInRight/> Sign In
            </a>
          </button>
          <div className="buttonTheme" onClick={handleClick}>
            <BrightnessHigh style={{ display: light ? "flex" : "none" }}/>
            <MoonStars style={{ display: light ? "none" : "flex" }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar