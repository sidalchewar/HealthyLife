import React, { useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function Register(props) {
    const nav=useNavigate();
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        age:"",
        gender:"",
        mobile:"",
        userName: "",
        password: "",
        city: "",
        state: ""
    });
    let [pass,setPass]=useState()
     
    function Register(e)
    {
        e.preventDefault();
        console.log(user)
        if(user.firstName && user.lastName && user.age && user.gender && user.mobile && user.userName && user.password && user.city && user.state)
        {
            if(user.password===pass)
            {
            axios.post("https://localhost:7196/api/User",user).then(res=>
            {
                
                  alert("Register Successfully")
                  nav("/")
            })
           }
           else{
            alert("Please Enter Correct Password")
           }

        }
        else{
            alert("Please Enter All Credentials")
        }
    }

    return (
        <div style={{padding:"80px",backgroundColor:"pink"}}>
            <section class="vh-100 gradient-custom " style={{marginBottom:"200px"}}>
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={Register}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="firstName">First Name</label>
                    <input type="text" id="firstName" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,firstName:e.target.value})}/>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="lastName">Last Name</label>
                    <input type="text" id="lastName" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,lastName:e.target.value})}/>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                <div class="row">
                <div class="col-12">
                <label class="form-label select-label">Age</label><br/>
                  <select class="select form-control-lg" onChange={(e)=>setUser({...user,age:e.target.value})}>
                    {/* <option value={65} disabled>65+</option> */}
                    {(()=>{
                      let arr=[];  
                    for(let i=0;i<=45;i++)
                    {
                       
                        arr.push(<option value={65+i}>{65+i}</option>)
                        
                    }
                     return arr;
                    })()}
                  </select>
                </div>
              </div>


                </div>
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="Female" onChange={()=>setUser({...user,gender:"Female"})}/>
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="Male" onChange={()=>setUser({...user,gender:"Male"})}/>
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>
                </div>
              </div>

              <div class="row">
              <div class="col-md-6 mb-4 pb-2">

                <div class="form-outline">
                <label class="form-label" for="userName">UserName</label>
                <input type="text" id="userName" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,userName:e.target.value})}/>
                </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="phoneNumber">Phone Number</label>
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,mobile:e.target.value})}/>
                  </div>

                </div>
              </div>

              <div class="row">
              <div class="col-md-6 mb-4 pb-2">

                <div class="form-outline">
                <label class="form-label" for="pass">Password</label>
                <input type="password" id="pass" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,password:e.target.value})}/>
                </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="confPass">Confirm Password</label>
                    <input type="password" id="confPass" class="form-control form-control-lg" onBlur={(e)=>setPass(e.target.value)}/>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <label class="form-label" for="city">City</label>
                    <input type="tel" id="city" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,city:e.target.value})}/>
                  </div>

                </div>

                <div class="col-md-6 mb-4 pb-2"> 
                  <div class="form-outline">
                  <label class="form-label" for="state">State</label>
                    <input type="text" id="state" class="form-control form-control-lg" onBlur={(e)=>setUser({...user,state:e.target.value})}/>
                  </div>

                 </div>
              </div>
              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Register" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    );
}

export default Register;