import CategoryMenu from 'components/CategoryMenu';
import ContentLoader from 'components/ContentLoader';
import breakfasts from 'data/breakfasts';
import cakes from 'data/cakes';
import coffees from 'data/coffees';
import foods from 'data/foods';
import menu from 'data/menu';
import colddrinks from 'data/cold_drinks';
import flavors from 'data/flavors';
import salads from 'data/salads';
import shakes from 'data/shakes';
import tailedcoffees from 'data/tailed_coffees';
import tailedcoldcoffees from 'data/tailed_cold_coffees';
import teas from 'data/teas';
import warmdrinks from 'data/warm_drinks';
import React, { useState } from 'react';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(menu[0]);
  const [products, setProducts] = useState(coffees);

  const onCategoryMenuChanged = (category) => {
    // food - hot - cold  - ...
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveCategory(category);
    switch (category.key) {
      case 'foods':
        setProducts(foods);

        break;
      case 'coffees':
        setProducts(coffees);

        break;
      case 'breakfasts':
        setProducts(breakfasts);

        break;
      case 'cakes':
        setProducts(cakes);

        break;
      case 'colddrinks':
        setProducts(colddrinks);

        break;
      case 'flavors':
        setProducts(flavors);

        break;
      case 'salads':
        setProducts(salads);

        break;
      case 'shakes':
        setProducts(shakes);

        break;
      case 'tailedcoffees':
        setProducts(tailedcoffees);

        break;
      case 'tailedcoldcoffees':
        setProducts(tailedcoldcoffees);

        break;
      case 'teas':
        setProducts(teas);

        break;
      case 'warmdrinks':
        setProducts(warmdrinks);

        break;

      default:
        setProducts(coffees);
    }
  };

  return (
    <div>
      <ContentLoader products={products} activeCategory={activeCategory} />

      <CategoryMenu
        menu={menu}
        activeCategory={activeCategory}
        onCategoryChanged={onCategoryMenuChanged}
      />
    </div>
  );
};

export default Home;
