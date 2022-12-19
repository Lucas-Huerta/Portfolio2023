import gsap from "gsap"
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all"
import { ScrollToPlugin } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 

export default function Wrapper() {

    const testSlide = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            // FROM 
            {
                opacity: 0, 
                y: -1000
            },
            // TO  
            {
                opacity: 1, 
                y: 0, 
                duration: 3, 
                scrollTrigger: {
                    trigger: elem, 
                    start: "top center", 
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        testSlide("#img1")
    }, [])

    // Fonction de scroll pour bloquer le scroll
    window.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollHeight - window.innerHeight; 
        console.log("bout de page", scroll); 
        console.log(window.scrollY); 
    })

    return(
        <section id='main-Wrapper'>
            <h2>
                Projects
            </h2>
            <div className="mainProjects">
                <img src="gradient.jpeg" alt="img Projet" id="img1"/>
                <img src="gradient.jpeg" alt="img Projet" id="img2"/>
                <img src="gradient.jpeg" alt="img Projet" id="img3"/>
            </div>
        </section>
    )
}