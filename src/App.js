import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import menu from './assets/icons/bars-solid.svg'
import { useState, useRef, useEffect } from 'react';
import Search from './pages/Search';
import ErrorModal from './components/ErrorModal';
import CartIcon from './components/CartIcon';
import Checkout from './pages/Checkout';
import CheckList from './components/CheckList';
import CocktailDetails from './pages/CocktailDetails';
import { navActions } from './store/slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const nav = useSelector(state => state.nav.value)
  const errorMessage = useSelector(state => state.error.value)
  const wishList = useSelector(state => state.checklist)
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(true);
  const [showButton, setShowButton] = useState(true)
  const [spin, setSpin] = useState(false);
  const menuClicks = useRef(false);
  const clickRef = useRef();


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (clickRef.current && !clickRef.current.contains(e.target)) {
            dispatch(navActions.hideNav())
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
      {menuClicks.current && <Navbar nav={nav} clickRef={clickRef}/>}
      {!nav && <button className={showButton ? 'menuToggle slideOutToggle' : 'menuToggle slideInToggle' }  onClick={(e) => {
        dispatch(navActions.showNav())
        menuClicks.current = true;
        setToggle(!toggle)
        setShowButton(false)
      }}>
        <img src={menu} alt='menu'/></button>}
        <CartIcon spin={spin}/>
        {wishList.value.length > 0 && <CheckList/>}
      {/* have to anaimate the toggle button */}
      {errorMessage && <ErrorModal/>}
      <Routes>
        <Route path='/search' element={<Search setSpin={setSpin}/>}></Route>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/cocktails/:_id' element={<CocktailDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
