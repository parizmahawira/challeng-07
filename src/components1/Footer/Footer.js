import React from "react";

function Footer() {
   return (
      <div>
         <footer class="footer mt-auto bg-light">
            <div class="text-dark fs-6 p-3">
               <div class="row px-5">
                  <div class="col-md">
                     <div class="row">
                        <div class="col-sm">
                           <p>Jalan Suroyo No. 161 MayanganKota Probolonggo 672000</p>
                           <p>binarcarrental@gmail.com</p>
                           <p>081-233-334-808</p>
                        </div>
                        <div class="col-sm">
                           <ul class="list-unstyled">
                              <li class="mb-3">
                                 <a class="link-dark text-decoration-none" href="#ourServices">
                                    Our Services
                                 </a>
                              </li>
                              <li class="mb-3">
                                 <a class="link-dark text-decoration-none" href="#whyUs">
                                    Why Us
                                 </a>
                              </li>
                              <li class="mb-3">
                                 <a class="link-dark text-decoration-none" href="#testimonials">
                                    Testimonials
                                 </a>
                              </li>
                              <li class="mb-3">
                                 <a class="link-dark text-decoration-none" href="#faq">
                                    FAQ
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div class="col-md">
                     <div class="row">
                        <div class="col-sm">
                           <p>Connect with us</p>
                           {/* <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="bi bi-facebook" href="#"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="bi bi-instagram" href="#"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="bi bi-twitter" href="#"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="bi bi-envelope" href="#"></a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="bi bi-twitch" href="#"></a>
                                </li>
                            </ul> */}
                           <img src="https://i.ibb.co/ggwhGL1/Connect-With-Us.png" class="img-fluid" alt="auto" />
                        </div>
                        <div class="col-sm">
                           <p>Copyright Binar 2022</p>
                           <a class="navbar-brand" href="#page-top" a />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default Footer;
