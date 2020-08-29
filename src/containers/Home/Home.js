import React, { useState } from "react";
import ContentLoader from "components/ContentLoader";
import CategoryMenu from "components/CategoryMenu";
import menu from "data/menu";
const Home = () => {
  const [activeCategory, setActiveCategory] = useState(menu[0].key);

  const onCategoryMenuChanged = (activeKey) => {
    console.log(activeKey)
    setActiveCategory(activeKey);
  };

  return (
    <div>
      <ContentLoader />

      <CategoryMenu
        menu={menu}
        activeCategory={activeCategory}
        onCategoryChanged={onCategoryMenuChanged}
      />
    </div>
  );
};

export default Home;
