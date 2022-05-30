import * as React from "react";
import { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const token = localStorage.getItem("token");
   const navigate = useNavigate();

   useEffect(() => {
      setIsLoggedIn(!!token);
   }, [token]);

   const haldleSuccessGoogle = (response) => {
      console.log(response);
      console.log(response.tokenId);
      if (response.tokenId) {
         localStorage.setItem("token", token);
         setIsLoggedIn(token);
      }
   };

   const haldleFailureGoogle = (response) => {
      console.log(response);
      alert(response);
   };

   function handleLogout(e) {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.clear();
      navigate("/");
      <GoogleLogout />;
   }

   return (
      <nav class="navbar navbar-expand-lg navbar-light sticky-top navbar-light bg-light">
         {/* <!-- Setting Navbar Container --> */}
         <div class="container">
            <a class="navbar-brand" href="#page-top"></a>

            {/* <!-- Button Nav Bar Boostrap --> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar Collapse --> */}
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav ms-auto">
                  {/* <!-- Navbar Item --> */}
                  <li class="nav-item mx-3">
                     <a class="nav-link" href="#register">
                        Our Services
                     </a>
                  </li>
                  <li class="nav-item mx-3">
                     <a class="nav-link" href="#whyus">
                        Why Us
                     </a>
                  </li>
                  <li class="nav-item mx-3">
                     <a class="nav-link" href="#testimoni">
                        Testimonial
                     </a>
                  </li>
                  <li class="nav-item mx-3">
                     <a class="nav-link" href="#ask">
                        FAQ
                     </a>
                  </li>
                  {!isLoggedIn ? (
                     <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Login with Google" onSuccess={haldleSuccessGoogle} onFailure={haldleFailureGoogle} cookiePolicy={"single_host_origin"} />
                  ) : (
                     <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                     </button>
                  )}
               </ul>
            </div>
         </div>
      </nav>
   );
}
