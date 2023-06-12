import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function Header(props) {
    

    const navtext={
        color:"white",
        fontSize:"20px",
        fontFamily:"notoSans"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top ">
  <div className="container-fluid">
    <a className="navbar-brand " style={{fontWeight:"bold",fontSize:"30px",color:"white"}} href="/">HEALTHY<span>❤️</span>LIFE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" class="text-end " id="navbarSupportedContent" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item ">
          <a className="nav-link " style={navtext} href="/registration" >New Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={navtext} href="/">LogIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={navtext} href="#aboutus">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={navtext} href="#contactus">Contact Us</a>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
        </div>
    );
}

export default Header;