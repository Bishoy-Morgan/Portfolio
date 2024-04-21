import './App.css';
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom';
import MainSection from './Components/MainSection';
import Lenis from '@studio-freight/lenis'

function App() {
  const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

  return (
    <Main>
      <Routes>
        <Route path='/' element={ <MainSection /> } />
      </Routes>
    </Main>
  );
}

export default App;
