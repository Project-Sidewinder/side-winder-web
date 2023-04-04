import React from 'react';
//import logo from 'logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';


function App() {
const openMenu = () => {
  document.querySelector(".sidebar")?.classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar")?.classList.remove("open");
}

  return (
<Router>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Side Winder</a>
        </div>
         <div className="header-links">
            <Link to= "/">Home</Link>
            <Link to= "/catalog">Catalog</Link>
         </div>
    </header>
<head>
 <title>Side Winder</title>
</head>
<link rel="stylesheet" href="style.css">
<body>
 <div>
    <header>
        Side Winder
    </header>
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul className="products">
            {data.products.map((product)   (
                <li>
                <div className= "product">
                    <img
                        className="product-image"
                        src={product.imageUrl}
                        alt="product"
                    />
                    <div className="product-name">
                        <a href="product.html">{Products.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">
                        {product.rating} Stars ({Products.numberOfReviews} reviews)
                    </div>
                    </div>
                </li>
                ))}
                ;   
        </ul>
    </aside>
    <div className="content">
        <ul className="products">
            <li>
                <div className="product">
                    <img className = "product-image" src="images/d1.jpg" alt="product" />
                    <div className ="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className = "product-brand">Nike</div>
                    <div className="product-price">$60</div>  
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>    
                </div>
            </li>
            <li>
                <div className="product">
                    <img className = "product-image" src="images/d1.jpg" alt="product" />
                    <div className ="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className = "product-brand">Nike</div>
                    <div className="product-price">$60</div>  
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>    
                </div>
            </li>   
            <li>
                <div className="product">
                    <img className = "product-image" src="images/d1.jpg" alt="product" />
                    <div className ="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className = "product-brand">Nike</div>
                    <div className="product-price">$60</div>  
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>    
                </div>
            </li>   
            <li>
                <div className="product">
                    <img className = "product-image" src="images/d1.jpg" alt="product" />
                    <div className ="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className = "product-brand">Nike</div>
                    <div className="product-price">$60</div>  
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>    
                </div>
            </li>   
            <li>
                <div className="product">
                    <img className = "product-image" src="images/d1.jpg" alt="product" />
                    <div className ="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div>
                    <div className = "product-brand">Nike</div>
                    <div className="product-price">$60</div>  
                    <div className="product-rating">4.5 Stars (10 Reviews)</div>    
                </div>
            </li>       
        </ul>
    </div>
       <main className= "main">
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path = "/catalog" element={<Products />} />
            </Routes>
        </main>
    </div>
    <footer>
         &copy; 2023 Side Winder
    </footer>
    </body>
  </link>
</div>
</Router>
  );
}
  export default App;


