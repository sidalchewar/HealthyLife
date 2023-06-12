import React from 'react';
import Profile from '../../Images/Sonia_Gandhi_2019.jpg'
import {Link} from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../../../node_modules/bootstrap/dist/js/bootstrap.js"
import Heart from "../../Images/heart.png"
function LogInHeader(props) {

    const user=JSON.parse(localStorage.getItem('user'));
    console.log(user.firstName+"----")
    return (
        <div>
           
 
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
    <div class="container-fluid">
    <div className="navbar-brand " style={{fontWeight:"bold",fontSize:"30px",color:"black"}} >HEALTHY<img src={Heart} width="50px" height="50px" class="animated bounce infinite" alt="Transparent MDB Logo" id="animated-img1"/>LIFE</div>
    <div class="ml-auto h4">
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link active mb-0 h4" aria-current="page" href="/login">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mb-0 h4" href="/login/latestnews">Latest News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active mb-0 h4" href="/" ><span class="text-danger" onClick={()=>localStorage.clear()}>LogOut🔅</span></a>
          </li>  
        </ul>
        <div>
          <Link to="/login/profile" className='text-decoration-none'>
        <div class="flex-shrink-0 no-italics" id="profile" style={{paddingLeft:"100px"}}>
          <center>
                <img src={Profile}
                  alt="Generic placeholder image" class="img-fluid rounded-circle border border-dark border-3"
                  style={{width: "45px"}}/><span style={{fontSize:"18px",color:"black"}}>{user.firstName+" "+user.lastName}</span>
          </center>
            </div>
            </Link>
            </div>
            
        </div>
      </div>
    </div>
    
  </nav>
  
        </div>
    );
}

export default LogInHeader;