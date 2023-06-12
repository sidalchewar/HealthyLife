import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import HomeImg from '../Images/home.jpg'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function HomePage(props) {
    let nav=useNavigate();
    const [msg,setMsg]=useState();
    const [user,setUser]=useState({username:"",password:""})
    function LogIn(e)
    {
        e.preventDefault();
        console.log(user.username+"--"+user.password)
     if(user.username && user.password)
     {
     axios.post("https://localhost:7196/api/User/"+user.username+"/"+user.password).then(response=>
     {
        let data=response.data;
        if(data)
        {
        localStorage.setItem('user',JSON.stringify(data));
        nav("/login",{state:data})
        }
        else
        {
        setMsg("Invalid Credentials")
        }
        
     })
     
    }
    else
    {
        alert("Please Enter Valid Credentials")
    }
   }

    const sty={
        height:"100vh",
        minHeight:"400px",
        backgroundSize:"cover",
        backgroundImage:`url(${HomeImg})`
    } 
    const formst={
        width:"20%",
        position:"absolute",
        top:"200px",
        borderRadius:"10px",
        right:"150px",
        color:"black"
    }

    return (
        <div>
            <div style={sty}>
        <div class="mx-auto py-5 shadow p-4">
            <form  onSubmit={LogIn} style={formst}>
            <center><span style={{color:"white",fontSize:"30px",fontWeight:"bold"}}>Login</span></center>
        <div style={{color:"white",fontSize:"20px"}}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User Name</label>
            <input type="text" class="form-control" onBlur={(e)=>
                {
                setUser({...user,username:e.target.value}) 
                setMsg('')}} id="exampleInputEmail1" aria-describedby="emailHelp" title='Enter UserName'/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" onBlur={(e)=>{
                setUser({...user,password:e.target.value})
                 setMsg('')}} id="exampleInputPassword1" title='Enter Password'/>
        </div>
        <span style={{color:"red"}}>{msg}</span>
        
        <button type="submit" class="btn btn-primary" style={{backgroundColor:"black",fontSize:"20px"}}>Submit</button>
        <center>New Register?</center>
        </div>
</form>
</div>
   
          </div>
          <center> 
          <div  style={{paddingLeft:"100px",paddingRight:"100px"}}>
            <h1 style={{marginTop:"100px"}}>INTRODUCTION</h1>
            <span style={{fontSize:"20px"}}>Patients 65 years and older represent a large proportion of hospitalized patients. They tend to have more comorbid chronic illnesses and disability, and they require age-appropriate management to lessen the risk of adverse events during hospitalization.
            This topic will discuss common issues related to the management of older hospitalized patients. The medical care of older adults in the outpatient setting and in nursing homes is discussed in detail separately.</span>
            <br></br>
            <div id="aboutus">
                <AboutUs/>
            </div>
            <div id="contactus">
                <ContactUs/>
            </div>
            </div>
            </center>

        </div>
    );
}

export default HomePage;