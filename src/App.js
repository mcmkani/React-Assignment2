import React, {useState} from 'react';
import NavigationMenu from './NavigationMenu';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Products from './Products.json';
import Item from './Item';

function App() {

  const [productCount, SetProductCount] = useState(0);

  const incrementPRoductCount = (state)=>{
    if(state){
    SetProductCount(productCount+1);
    }
    else{
      SetProductCount(productCount-1);
    }
};

  return (
  <>
    <NavigationMenu count={productCount} /> 
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">       
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {Products.products.map((item, i) => (
            <Item category={item.category} image={item.image} availableforsale={item.availableforsale} price={item.price} oldprice={item.oldprice} rating={item.rating} action={item.action} count={incrementPRoductCount} />
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
