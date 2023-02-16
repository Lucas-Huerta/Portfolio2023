import './App.css';
import './locomotive-scroll.css'
import Navbar from './components/Navigation/Navbar';
import SphereThree from './components/SphereThree';
import Wrapper from './components/Main/Wrapper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <section className='Section-ThreeJs'>
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
