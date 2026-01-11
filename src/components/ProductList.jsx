import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

    if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;
  return (
     <div>
      <h2>Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={product.image} loading="lazy" alt={product.title} style={{ width: "100px", height: "100px" }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList