import './App.css';
import './locomotive-scroll.css'
import Navbar from './components/Navigation/Navbar';
import SphereThree from './components/SphereThree';
import Wrapper from './components/Main/Wrapper';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from "react";

function App() {
  const wrapper = useRef(null);
  const [top, setTop] = useState(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(null);

  useEffect(() => {
    // const {myWrapper} = wrapper.current.getBoundingClientRect();
    const currentTop = window.scrollY + top;

    const handleScroll = () => { 

      console.log("current top", currentTop);
      console.log("scroll window", window.scrollY );
      setPrevScrollPosition(window.scrollY);

      if(currentTop <= window.scrollY){
        setTop(currentTop);
      }
      else{
        console.log("PASSE PAR LE ELSE");
        setTop(window.scrollY * 10);
      }
      // if (prevScrollPosition !== null && prevScrollPosition > window.scrollY) {
      //   console.log(currentTop, 'Scrolling up');
      //   setTop(-currentTop - top);
      // }

      // const windowHeight = window.innerHeight;
    }
    window.addEventListener('scroll', handleScroll);
  }, [prevScrollPosition]); 

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <section ref={wrapper} style={{ position: 'relative', left: `${top/10}px` }} className='Section-ThreeJs'>
          <SphereThree />
        </section>
        <section className="Section-Title">
          <h1>LUCAS</h1>
          <h1>HUERTA</h1>
        </section>
      </header>
      <main>
        <Wrapper />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
