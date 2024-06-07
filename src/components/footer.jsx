import React from "react";
import "../styles/footer.css";


import image1 from "../images/facebook.png";
import image2 from "../images/twitter.png";
import image3 from "../images/instagram.png";


function Footer(){
    return(
        <>
        <div className="footerContainer">

                <section>
                    <h5>About</h5>
                    <p>Our construction company is dedicated to delivering high-quality, reliable, and innovative building solutions 
                        tailored to meet the unique needs of each client.</p>
                    
                    <div id="footerIcon">
                       <img src={image1} alt="facebook" width={"30px"} /> 
                       <img src={image2} alt="twitter" width={"30px"} /> 
                       <img src={image3} alt="instagram" width={"30px"} /> 
                      
                    </div>
                      
                </section>



                <section>
                    <h5>Our Company</h5>

                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Our team</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </section>


                <section>
                    <h5>Our Services</h5>

                    <ul>
                        <li><a href="">Construction</a></li>
                        <li><a href="">Renovation</a></li>
                        <li><a href="">Remodeling</a></li>
                        <li><a href="">Site inspection</a></li>

                    </ul>
                </section>


                <section>
                    <h5>Contact</h5>

                    <ul>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Our partners</a></li>

                    </ul>
                </section>


                <p id="copyright">Copyright &copy; 2024 All rights reserved made by Jeff</p>

        </div>
        </>
    )
}


export default Footer;