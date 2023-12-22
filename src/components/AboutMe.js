import React from "react"
import AnnieHeadshot from "../assets/annie_headshot.png" 

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me-1">
            <img src={AnnieHeadshot} alt="/" className="headshot" />
            <div className="about-me-paragraph">
                <div className="description">
                    <p className="description-title">ANNIE DUPRE</p>
                    <h1 className="description-annie">As a dedicated Registered Dietitian,  
                    I am passionate about holistic wellness and committed to delivering client-centered care. Guiding individuals on 
                    their unique health journeys, I embrace a holistic approach that considers the interconnectedness of the mind and body.
                    Join me in prioritizing your health, as we work together to create sustainable nutrition plans tailored 
                    to your individual needs!
                    </h1>
                </div>
                
            </div>
            </div>
        </div>    
    )
}

export default AboutMe
