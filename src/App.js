import React, {useState} from 'react';
import NavigationMenu from './NavigationMenu';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Products from './Products.json';
import Item from './Item';

function App() {

  const [productList, setProductList] = useState(Products.products);
  const [productCount, SetProductCount] = useState(0);
  
  const incrementProductCount = (e)=>{
    let itemID = parseInt(e.target.getAttribute("data-id"));
    let increasedItemID = itemID + 1;
    let result = productList.filter(p=> p.name === "Product-"+increasedItemID);
    result[0].action = "Remove";
    //console.log(result)
    SetProductCount(productCount+1);    
  };

  const decrementProductCount = (e)=>{
    let itemID = parseInt(e.target.getAttribute("data-id"));
    let increasedItemID = itemID + 1;
    let result = productList.filter(p=> p.name === "Product-"+increasedItemID);
    result[0].action = "Add to cart";
    //console.log(result)
    SetProductCount(productCount-1);   
  };

  return (    
  <>
    <NavigationMenu count={productCount} /> 
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">       
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productList.map((item, index) => (            
            <Item category={item.category} 
            id={index} 
            image={item.image} 
            availableforsale={item.availableforsale} 
            price={item.price} 
            oldprice={item.oldprice} 
            rating={item.rating} 
            isAdded={item.isAdded}
            action={item.action} 
            count={item.action === "Add to cart" ? incrementProductCount : item.action === "Remove" ? decrementProductCount : null } 
            />            
            ))
          }    
        </div>
      </div>
    </section>
    <Footer />
  </>
  );
    
}

export default App;
