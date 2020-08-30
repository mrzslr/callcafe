import React, { useState } from "react";
import ContentLoader from "components/ContentLoader";
import CategoryMenu from "components/CategoryMenu";
import menu from "data/menu";
import coffees from 'data/coffees';
import foods from 'data/foods';
import breakfasts from 'data/breakfasts';
import cakes from 'data/cakes';
import colddrinks from 'data/cold_drinks';
import flavors from 'data/flavors';
import salads from 'data/salads';
import shakes from 'data/shakes';
import tailedcoffees from 'data/tailed_coffees';
import tailedcoldcoffees from 'data/tailed_cold_coffees';
import teas from 'data/teas';
import warmdrinks from 'data/warm_drinks';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(menu[0].key);
  const [products,setProducts] = useState(coffees);

  const onCategoryMenuChanged = (activeKey) => {
    
    // food - hot - cold  - ...
    setActiveCategory(activeKey);
    switch(activeKey){
      case 'foods':
        setProducts(foods)
        console.log(activeKey)
      break;
      case 'coffees':
        setProducts(coffees)
        console.log(activeKey)
      break;
      case 'breakfasts':
        setProducts(breakfasts)
        console.log(activeKey)
      break;
      case 'cakes':
        setProducts(cakes)
        console.log(activeKey)
      break;
      case 'colddrinks':
        setProducts(colddrinks)
        console.log(activeKey)
      break;
      case 'flavors':
        setProducts(flavors)
        console.log(activeKey)
      break;
      case 'salads':
        setProducts(salads)
        console.log(activeKey)
      break;
      case 'shakes':
        setProducts(shakes)
        console.log(activeKey)
      break;
      case 'tailedcoffees':
        setProducts(tailedcoffees)
        console.log(activeKey)
      break;
      case 'tailedcoldcoffees':
        setProducts(tailedcoldcoffees)
        console.log(activeKey)
      break;
      case 'teas':
        setProducts(teas)
        console.log(activeKey)
      break;
      case 'warmdrinks':
        setProducts(warmdrinks)
        console.log(activeKey)
      break;
      
        default:
          setProducts(coffees)
          
        
    }
    
  };

  return (
    <div>
      <ContentLoader products={products} />
      
      <CategoryMenu
        menu={menu}
        activeCategory={activeCategory}
        onCategoryChanged={onCategoryMenuChanged}
      />
    </div>
  );
};

export default Home;
