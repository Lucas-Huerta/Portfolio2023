import gsap from "gsap"
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 

export default function Wrapper() {
    const myElementRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const myElement = myElementRef.current;
        const titleMyElement = titleRef.current

        function first() {
            var tl = gsap.timeline();
            tl.from(".square1", 
            { 
                y: "-500%", ease: "power1.inOut", opacity: 0, yoyo: true
            }, 0)
            .to(".square1", 
            { 
                y: "50%", ease: "power1.inOut", opacity: 1, yoyo: true
            }, 0)
            return tl;
        }
        
        function second() {
            var tl = gsap.timeline();
            tl.from(".square2", 
            { 
                y: "-500%", ease: "power1.inOut", opacity: 0, yoyo: true
            }, 0)
            .to(".square2", 
            { 
                y: "150%", ease: "power1.inOut", opacity: 1, yoyo: true
            }, 0)
            return tl;
        }
        
        function third() {
            var tl = gsap.timeline();
            tl.from(".square3", 
            { 
                y: "-500%", ease: "power1.inOut", opacity: 0, yoyo: true
            }, 0)
            .to(".square3", 
            { 
                y: "200%", ease: "power1.inOut", opacity: 1, yoyo: true
            }, 0)
            return tl;
        }
    
        function handleScroll() {

            const windowHeight = window.innerHeight;
            const elementTop = myElement.getBoundingClientRect().top + windowHeight;

            if(elementTop >= windowHeight){
                titleMyElement.style.position = 'inherit';
            }
            else if (elementTop <= windowHeight) {
                titleMyElement.style.position = 'fixed';
                titleMyElement.style.top = "2px";
                titleMyElement.style.left = "25%";
                titleMyElement.style.right = "25%";
                const tl = gsap.timeline({
                    scrollTrigger: {
                        pin: true, 
                        scrub: 1,
                        // pinType: "fixed",
                        trigger: ".mainProjects",
                        start: "bottom center",
                        end: "bottom bottom",
                        // onEnter: ({progress, direction, isActive}) => {
                        //     console.log(progress, direction, isActive);
                        //     // let main = document.getElementsByClassName('.mainProject');
                        //     // main.classList.add('fixed');
                        // },
                        markers: true,
                        // snap: 0.1
                    }
                });
                tl.add(first(), "+=2")
                    .add(second(), "+=3")     //with a gap of 2 seconds
                    .add(third(), "+=4") //overlap by 1 second

                return tl;
            }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <section id='main-Wrapper' ref={myElementRef} className="wrapper">
            <h2 ref={titleRef}>
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