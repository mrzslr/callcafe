import React from "react";
import ContentLoader from "components/ContentLoader";
import CategoryMenu from 'components/CategoryMenu'
const Home = () => {
  return (
    <div>
      <CategoryMenu />
      <ContentLoader />
    </div>
  );
};

export default Home;
