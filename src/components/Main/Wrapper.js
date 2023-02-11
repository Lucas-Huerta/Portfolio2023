import gsap from "gsap"
import React from "react";
// import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 

export default class Wrapper extends React.Component {
    componentDidMount() {
      const timeline = gsap.timeline({
        scrollTrigger: {
            pin: true, 
            scrub: 1,
            trigger: ".mainProjects",
            start: "top center",
            end: "top bottom",
            markers: true, 
        }
      });
  
      timeline
        .to(".square1", 
            { 
                y: "20%", ease: "ease-in-out", opacity: 1, yoyo: true
            }, 0)
        .to(".square2", 
            { 
                y: "50%", ease: "ease-in-out", opacity: 1, yoyo: true
            }, 0)
        .to(".square3", 
            { 
                y: "100%", ease: "ease-in-out", opacity: 1, yoyo: true
            }, 0)
        ;
        timeline.reverse();
    }
  
    render() {
      return (
        <section id='main-Wrapper' className="wrapper">
            <h2>
                Projects
            </h2>
            <div className="mainProjects">
                <img src="gradient.jpeg" alt="img Projet" id="img1" className="square square1"/>
                <img src="gradient.jpeg" alt="img Projet" id="img2" className="square square2"/>
                <img src="gradient.jpeg" alt="img Projet" id="img3" className="square square3"/>
            </div>
        </section>
      );
    }
}