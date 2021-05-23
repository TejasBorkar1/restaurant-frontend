import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return(
        <div>
               <div id="site-header">
      <header id="header" className="header-block-top">
        <div className="container">
          <div className="row">
            <div className="main-menu">
              {/* navbar */}
              <nav className="navbar navbar-default" id="mainNav">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <div className="logo">
                    <a className="navbar-brand js-scroll-trigger logo-header" href="#">
                      <img src="images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/aboutUs"> About us</Link></li>
                    <li><Link to="/menu">Menu</Link> </li>
                    <li><Link to="/team">Team</Link> </li>
                    <li><Link to="/gallery">Gallery</Link> </li>
                    <li><Link to="/blog">Blog</Link> </li>
                    <li><Link to="/pricing">pricing</Link> </li>
                    <li><Link to="/reservation">Reservation</Link> </li>
                    {/* <li><Link to="" Contact us</li> */}
                  </ul>
                </div>
                {/* end nav-collapse */}
              </nav>
              {/* end navbar */}
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container-fluid */}
      </header>
      {/* end header */}
    </div>
        </div>
    );
}
export default Header;