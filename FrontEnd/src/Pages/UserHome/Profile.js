import React from 'react';
import Prof from '../../Images/Sonia_Gandhi_2019.jpg'

function Profile(props) {
    let user=JSON.parse(localStorage.getItem('user'))
    return (
        <div >
            <section class="vh-100" style={{marginTop:"40px"}}>
  <div class="container py-5 h-100 bg-transparent">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style={{borderRadius: ".5rem"}}>
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem"}}>
              <img src={Prof}
                alt="Avatar" class="img-fluid my-5" style={{width: "120px",paddingTop:"60px"}} />
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Name</h6>
                    <p class="text-muted">{user.firstName+" "+user.lastName}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Age</h6>
                    <p class="text-muted">{user.age}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Mobile</h6>
                    <p class="text-muted">{user.mobile}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Gender</h6>
                    <p class="text-muted">{user.gender}</p>
                  </div>
                </div>
                <h6>Address</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>City</h6>
                    <p class="text-muted">{user.city}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>State</h6>
                    <p class="text-muted">{user.state}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    );
}

export default Profile;