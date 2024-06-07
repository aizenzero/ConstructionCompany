import React from "react";
import "../styles/hero.css";

function Hero(){
    return(
        <>
        <div className="heroContainer" id="home">

            <section>
                <h3>Turning blueprints into reality.</h3>
                <button id="qouteButton">Get a Qoute</button>
            </section>

            <form action="" className="form" id="form">
                    <h4>Message us</h4>
                    <input type="text" placeholder="Name" id="name"/>
                    <input type="email"  placeholder="Email" id="email"/>
                    <textarea name="" id="message" placeholder="Message" rows="5" ></textarea>

                    <button id="messageButton">Send</button>

            </form>

        </div>
        </>
    )
}

export default Hero;