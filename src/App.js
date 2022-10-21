import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import menu from './assets/icons/bars-solid.svg'
import { useState, useRef, useEffect } from 'react';
import Search from './pages/Search';
import AddProduct from './pages/AddProduct';
import ErrorModal from './components/ErrorModal';
import CartIcon from './components/CartIcon';
import Checkout from './pages/Checkout';
import AddCocktail from './pages/AddCocktail';
import CheckList from './components/CheckList';
import CocktailDetails from './pages/CocktailDetails';


function App() {
  const [nav, setNav] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [showButton, setShowButton] = useState(true)
  const menuClicks = useRef(false);
  const clickRef = useRef();
  const [errorMessage, setErrorMessage ] = useState('')
  const [cart, setCart] = useState([])
  const [spin, setSpin] = useState(false)
  const [wishList, setWishList] = useState([])


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
      {menuClicks.current && <Navbar cart={cart} nav={nav} setNav={setNav} clickRef={clickRef}/>}
      {!nav && <button className={showButton ? 'menuToggle slideOutToggle' : 'menuToggle slideInToggle' }  onClick={(e) => {
        setNav(e => !e);
        menuClicks.current = true;
        setToggle(!toggle)
        setShowButton(false)
      }}>
        <img src={menu} alt='menu'/></button>}
        <CartIcon setErrorMessage={setErrorMessage} spin={spin} cart={cart}/>
        {wishList.length > 0 && <CheckList setWishList={setWishList} wishList={wishList} cart={cart}/>}
      {/* have to anaimate the toggle button */}
      {errorMessage && <ErrorModal errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>}
      <Routes>
        <Route path='/search' element={<Search setErrorMessage={setErrorMessage} setSpin={setSpin} cart={cart} setCart={setCart}/>}></Route>
        <Route path='/' element={<Homepage setErrorMessage={setErrorMessage}/>}></Route>
        {/* <Route path='/addProduct' element={<AddProduct setErrorMessage={setErrorMessage}/>}></Route> */}
        <Route path='/checkout' element={<Checkout setCart={setCart} cart={cart}/>}></Route>
        <Route path='/cocktails/:_id' element={<CocktailDetails setWishList={setWishList}/>}></Route>
        <Route path='/addCocktail' element={<AddCocktail setErrorMessage={setErrorMessage}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
