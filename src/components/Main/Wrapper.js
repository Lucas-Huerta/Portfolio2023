import gsap from "gsap"
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 

export default function Wrapper() {

    // Elements to interacte
    const wrapper = useRef(null);

    const img1 = useRef(null); 
    const img2 = useRef(null); 
    const img3 = useRef(null); 

    useEffect(() => {

        // TODO : timeline sur les 3 différentes cards projets qui écoute le scroll
        const mainWrapper = wrapper.current; 
        const effectImg1 = img1.current;
        const effectImg2 = img2.current;
        const effectImg3 = img3.current;
        // Test timeline (utile pour faire plusieurs anims à la suite en gardant des delays différents )
        const tl = gsap.timeline({
            scrollTrigger: {
                markers: true, 
                trigger: mainWrapper,
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                pin: false, // pin the trigger element while active
                start: "top top", // when the top of the trigger hits the top of the viewport
                end: "bottom bottom", // end after scrolling 500px beyond the start
            }
        });
        
        tl.to(effectImg1, {
            width: 10, 
            y: 100
        });
        tl.to(effectImg2, {
            width: 500,
            height: 300,
        });
        tl.to(effectImg3, {
            width: 100,
            height: 100,
        });

        // ScrollTrigger.create({
        //     animation: tl,
        //     markers: true, 
        //     trigger: effectImg1, 
        //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //     pin: true, // pin the trigger element while active
        //     start: "top 80%", // when the top of the trigger hits the top of the viewport
        //     end: "top 50%", // end after scrolling 500px beyond the start
        // });

        // Fonction de scroll pour bloquer le scroll
        window.addEventListener('scroll', () => {
            const scroll = document.documentElement.scrollHeight - window.innerHeight; 
            console.log("bout de page", scroll); 
            console.log(scroll); 
        })

    })

    return(
        <section id='main-Wrapper' className="wrapper" ref={wrapper}>
            <h2>
                Projects
            </h2>
            <div className="mainProjects">
                <img src="gradient.jpeg" alt="img Projet" id="img1" ref={img1}/>
                <img src="gradient.jpeg" alt="img Projet" id="img2" ref={img2}/>
                <img src="gradient.jpeg" alt="img Projet" id="img3" ref={img3}/>
            </div>
        </section>
    )
}