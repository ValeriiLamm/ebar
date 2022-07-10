import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import menu from './assets/bars-solid.svg'
import { useState, useRef, useEffect } from 'react';
import Search from './pages/Search';

function App() {
  const [nav, setNav] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [showButton, setShowButton] = useState(true)
  const menuClicks = useRef(false);
  const clickRef = useRef();
  console.log(showButton)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (clickRef.current && !clickRef.current.contains(e.target)) {
            setNav(false)
            setShowButton(true)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle])

  return (
    <div className="App">
      <BrowserRouter>
      {menuClicks.current && <Navbar nav={nav} setNav={setNav} clickRef={clickRef}/>}
      <button className={showButton ? 'menuToggle slideOutToggle' : 'menuToggle slideInToggle' }  onClick={(e) => {
        setNav(e => !e);
        menuClicks.current = true;
        setToggle(!toggle)
        setShowButton(false)
      }}><img src={menu} alt='menu'/></button> 
      {/* have to anaimate the toggle button */}
      <Routes>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
