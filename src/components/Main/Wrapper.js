import React, { useEffect, useRef } from "react";
import locomotiveScroll from "locomotive-scroll";

export default function Wrapper() {
    const myElementRef = useRef(null);
    const titleRef = useRef(null);

    const scrollRef = React.createRef();

    useEffect(() => {
        /**
         * Définition du scroll locomotive
         */
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            repeat: true
        });

        const el = scrollRef.current;
        el.style.opacity = "1";

        const myElement = myElementRef.current;
        const titleMyElement = titleRef.current
    
        function handleScroll() {

            const windowHeight = window.innerHeight;
            const elementTop = myElement.getBoundingClientRect().top + windowHeight;

            // Ajout ou non de la propriété sticky au titre lors du scroll
            if(elementTop >= windowHeight){
                titleMyElement.style.position = 'inherit';
            }
            else if (elementTop <= windowHeight) {
                titleMyElement.style.position = 'fixed';
                titleMyElement.style.top = "2px";
                titleMyElement.style.left = "25%";
                titleMyElement.style.right = "25%";
            }
        }
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <section id='main-Wrapper' ref={myElementRef} className="wrapper" data-scroll-section>
            <h2 ref={titleRef}>
                Projects
            </h2>
            <div className="mainProjects " >
                <div className="scroll" ref={scrollRef}>
                    <img src="gradient.jpeg" alt="img Projet" id="img1"
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-position="bottom"
                        data-scroll-direction="vertical"
                    />
                    <img src="gradient.jpeg" alt="img Projet" id="img2"
                     data-scroll
                     data-scroll-speed="2"
                     data-scroll-position="bottom"
                     data-scroll-direction="vertical"
                     />
                    <img src="gradient.jpeg" alt="img Projet" id="img3"
                     data-scroll
                     data-scroll-speed="2"
                     data-scroll-position="bottom"
                     data-scroll-direction="vertical" />
                </div>
            </div>
        </section>
      );
}