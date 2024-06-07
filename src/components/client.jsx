import React from "react";
import "../styles/client.css";

import client1 from "../images/client1.jpg";
import client2 from "../images/client2.jpg";
import client3 from "../images/client3.jpg";
import client4 from "../images/client4.jpg";

function Client(){
    return(
        <>
        <div className="clientContainer" id="clients">
            <h4>Client Feedback</h4>

            <section>
                <section id="clientFeedback">
                    <img src={client1} alt="client 1" width={"100px"} height={"80px"}/>
                    <h5>Emma Brown</h5>
                </section>
                
                <p>"We were thoroughly impressed with the professionalism and attention to detail shown by your construction team 
                    throughout the entire project.
                     Our new home was completed on time and exceeded our expectations in quality and craftsmanship."</p>

               <p id="rating">Rating: ★ ★ ★ ★ ★</p>

            </section>

            <section>
                <section id="clientFeedback">
                    <img src={client2} alt="client 1" width={"100px"} height={"80px"}/>
                    <h5>Alex Johnson</h5>
                </section>
                
                <p>"Your company made the process of building our dream home seamless and stress-free. The team's dedication to excellence and clear 
                    communication were key factors in delivering such an outstanding result."</p>

                     <p id="rating">Rating: ★ ★ ★ ★ ★</p>
            </section>

            <section>
                <section id="clientFeedback">
                    <img src={client3} alt="client 1" width={"100px"} height={"80px"}/> 
                    <h5>Olivia Williams</h5>
                </section>
                
                <p>"Working with your construction company was a fantastic experience from start to finish. The crew was knowledgeable, 
                    reliable, and consistently went above and beyond to ensure our satisfaction."</p>
                     <p id="rating">Rating: ★ ★ ★ ★ ★</p>
            </section>

            <section>
                <section id="clientFeedback">
                    <img src={client4} alt="client 1" width={"100px"} height={"80px"} />
                    <h5>Benjamin Smith</h5>
                </section>
                
                <p>"We couldn't be happier with our new home, thanks to your exceptional service and expertise.
                     Every aspect of the construction was handled with precision and care, making our vision a reality."</p>
                     <p id="rating">Rating: ★ ★ ★ ★ ★</p>
            </section>

        

        </div>
        </>
    )
}

export default Client;