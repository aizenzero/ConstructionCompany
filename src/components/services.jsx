import React from "react";
import "../styles/services.css";


import image1 from "../images/architecturalPlan.png";
import image2 from "../images/foundation.png";
import image3 from "../images/renovation.png";
import image4 from "../images/remodelling.png";
import image5 from "../images/smarthome.png";
import image6 from "../images/quality.png";


function Services(){
    return(
        <>
        <div className="servicesContainer" id="services">
            <h3>Our Services</h3>

            <section>
                <img src={image1} alt="Architectural plan" width={"50px"} />
                <h4>Architectural Planning</h4>
                <p>Collaborative design process with experienced architects
                     to create personalized home blueprints tailored to clients' 
                     preferences and lifestyle.</p>
            </section>

            <section>
                <img src={image2} alt="Architectural plan" width={"50px"} />    
                <h4>Foundation Construction</h4>
                <p>Expert foundation laying services, ensuring the stability and durability of 
                    the home's structure from the ground up.</p>
            </section>

            <section>
                <img src={image3} alt="Architectural plan" width={"50px"} />    
                <h4>Interior Renovation</h4>
                <p>Professional interior renovation services to update and modernize existing spaces,
                     including flooring, lighting, and cabinetry installations.</p>
            </section>

            <section>
                <img src={image4} alt="Architectural plan" width={"50px"} />    
                <h4>Exterior Remodeling</h4>
                <p>Exterior remodeling solutions to enhance curb appeal and functionality, 
                    such as siding replacement, window installations, and landscaping.</p>
            </section>

            <section>
                <img src={image5} alt="Architectural plan" width={"50px"} />
                <h4>Smart Home Integration</h4>
                <p>Integration of smart home technology solutions, including home automation systems,
                     security systems, and energy-efficient appliances.</p>
            </section>

            <section>
                <img src={image6} alt="Architectural plan" width={"50px"} />    
                <h4>Quality Assurance Inspections</h4>
                <p>Regular quality assurance inspections throughout the construction process to ensure adherence to 
                    industry standards and client satisfaction.</p>
            </section>


        </div>
        </>
    )
}

export default Services;