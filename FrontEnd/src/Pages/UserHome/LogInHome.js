import React, { useState } from 'react';
import HealthyCouple from "../../Images/HealthyCouple.jpg"
import Dieases from "../../Images/Patient.jpg"
import Yoga from "../../Images/Yoga.jpeg"
import Diet from "../../Images/Diet.jpg"
import Exercise from "../../Images/Exercise.png"
import {useLocation,useNavigate} from 'react-router-dom'
import CountBox from './CountBox';
function LogInHome(props) {
  const loc=useLocation();
  const [disease,setDisease]=useState("1");
  const nav=useNavigate();
  
  function Handler()
  {
    nav("/login/diseasePrevent",{state:disease})
  }

  const st={
    backgroundImage: `url(${HealthyCouple})`,
    minHeight:"550px",
    backgroundSize:"cover",
    marginTop:"80px"
  }
  const formst={
    width:"20%",
    position:"absolute",
    top:"250px",
    borderRadius:"10px",
    color:"black",
    left:"120px"
}
  let data=loc.state
    return (
        <div>
        <header>
     <div
    class="p-5 text-center bg-image fixed"
    style={st}>
    <div class="mx-auto "  style={formst}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-black">
        <a className="navbar-brand " style={{fontWeight:"bold",fontSize:"50px"}} href="/">HEALTHY<span>❤️</span>LIFE</a>
            <div style={{fontFamily:"serif",fontSize:"30px"}}>Let's build wellness rather than treat disease.</div>
          {/* <h1 class="mb-3">Heading</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-outline-dark btn-lg" href="#!" role="button">Call to action</a> */}
        </div>
      </div>
    </div>
  </div>
</header>
<center>
<div class="card-group" style={{marginLeft:"100px",marginTop:"100px"}}>
<div class="col-sm-5">
  <div class="card" style={{borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    
    <img class="card-img-top" src={Dieases} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}} />
    <div class="card-body">
      <h5 class="card-title">Diseases & Preventation</h5>
      <p class="text-left">The elderly population in the United States is rapidly growing. In fact, the number of people over age 65 is set to triple by the year 2050. And because older adults are more likely to develop one chronic condition or another, it is important that families and the overall health care system are prepared to handle this growing need for healthy aging.</p>
      {/* <select onChange={(e)=> setDisease(e.target.value)}>
        <option value="1">Arthritis</option>
        <option value="2">Alzheimer's Disease</option>
        <option value="3">Heart Attack</option>
        <option value="4">Respiratory Disease</option>
        <option value="5">Cancer</option>
        <option value="6">Diabetes</option>
      </select> */}
       <br/>
      <a class="btn btn-primary" href="/login/disease" role="button">Learn More ></a>
    </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card" style={{marginLeft:"100px",borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    <img class="card-img-top" src={Yoga} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}}/>
    <div class="card-body">
      <h5 class="card-title">Yoga</h5>
      <p class="text-left">The risk of strain or joint pain is real for many elderly people who are seeking to stay active. Yoga is a wonderful option to consider if you’re a senior who wants to stay active and flexible without muscle strain. As with any physical activity, you should proceed gradually when just starting out and get individual guidance if you think you might need it</p>
      <a class="btn btn-primary" href="#" role="button">Learn More ></a>
    </div>
    </div>
  </div>
</div>
<div class="card-group" style={{marginLeft:"100px",marginTop:"100px"}}>
<div class="col-sm-5">
  <div class="card" style={{borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    
    <img class="card-img-top" src={Diet} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}} />
    <div class="card-body">
      <h5 class="card-title">Healthy Diet</h5>
      <p class="text-left">As you get older, it’s important you continue to eat well. Changes in your body result in lower energy (calorie) requirements. It is therefore important to reduce portion sizes if activity is low, and to cut down on sugary snacks such as cakes and buns.Eating a well-balanced diet is an important part of staying healthy as you age.</p>
      <a class="btn btn-primary" href="#" role="button">Learn More ></a>
    </div>
    </div>
  </div>
  <div class="col-sm-6">
  <div class="card" style={{marginLeft:"100px",borderTopRightRadius:"5rem",borderTopLeftRadius:"2rem"}}>
    <img class="card-img-top" src={Exercise} alt="Card image cap" height="300px" style={{borderTopRightRadius:"2rem",borderTopLeftRadius:"2rem"}}/>
    <div class="card-body">
      <h5 class="card-title">Exercise</h5>
      <p class="text-left">Physical therapy and exercise are essential for everyone’s overall health and both physical and mental fitness. The measuring stick of one’s health, the benefits of physical therapy for seniors are far and few between. With the right workout plan and implementation, you can live a much better quality of life. </p>
      <a class="btn btn-primary" href="#" role="button">Learn More ></a>
    </div>
    </div>
  </div>
</div>
<CountBox/>
</center>

        </div>
    );
}

export default LogInHome;