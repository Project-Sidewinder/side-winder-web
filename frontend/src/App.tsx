import React from 'react';
//import logo from 'logo.svg';
import './App.css';


function App() {
const openMenu = () => {
  document.querySelector(".sidebar")?.classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar")?.classList.remove("open");
}

  return (

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Side Winder</a>
        </div>
         <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
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
        <ul>
            <li>
                <a href="index.html">Pants</a>
            </li>
            <li>
                <a href ="index.html">Shirts</a>
            </li>
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
        
         <ul>
             <li>Product 1</li>
             <li>Product 2</li>
             <li>Product 3</li>
             <li>Product 4</li>
             <li>Product 5</li>
        </ul>
    </div>
    <footer>
         &copy; 2023 Side Winder
    </footer>
    </body>
  </link>
</div>

  );
}
  export default App;


