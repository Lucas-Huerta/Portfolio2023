import './App.css';
import Navbar from './components/Navigation/Navbar';
import SphereThree from './components/SphereThree';
import Wrapper from './components/Main/Wrapper';

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
    </div>
  );
}

export default App;
