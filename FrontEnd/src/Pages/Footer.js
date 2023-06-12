import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
function Footer(props) {
    return (
        <div>
    <footer class="text-center text-black" style={{backgroundColor: "#f1f1f1",fontSize:"30px"}}>

  <div class="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
    © 2023:
    <a class="text-dark" href="https://mdbootstrap.com/">Healthy❤️Life</a>
  </div>
 
</footer>
        </div>
    );
}

export default Footer;