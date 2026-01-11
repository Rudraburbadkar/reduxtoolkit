import React, { useEffect } from 'react'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import {useDispatch} from "react-redux";
import {fetchProducts} from "./features/productsSlice"
function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchProducts());
  },[dispatch]); //loads your product list from the API when the app starts.
  return (
    <div style={{display:"flex",gap:"50px",padding:"20px"}}>
      <ProductList/>
      <Cart/>
    </div>
  )
}

export default App