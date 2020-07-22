import React from 'react';
import logo from "../img/logo-white.png";
import logo1 from "../img/logo.png";




function Nav() {
    return (
        <header>
          <nav className="sticky">l
                <div className="row">
                    <img src={logo} alt="Omnifood " className="logo" />
                    <img src={logo1} alt="Omnifood logo" className="logo-black" />
                    <ul class="main-nav js--main-nav">
                    <a class="mobile-nav-icon js--nav-icon"><i class="ion-close-round"></i></a>
                        <li><a href="#features">Food delivery</a></li>
                        <li><a href="#works">How it works</a></li>
                        <li><a href="#cities">Our cities</a></li>
                        <li><a href="#plans">Sign up</a></li>
                    </ul>
                    <a className="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>
                </div>
            </nav>
            </header>
      
    );
  }
  export default  Nav;

  
  