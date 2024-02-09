import React, { useState } from 'react';
import Categories from './SidebarComponents/Categories';
import Colors from './SidebarComponents/Colors';
// import Filters from './SidebarComponents/Filters';
import Price from './SidebarComponents/Price';
import Size from './SidebarComponents/Size';
import SubCategories from './SidebarComponents/SubCategories';

const LeftSidebar = () => {

    //******************** Category filter Code Start *****************
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const handleCategorySelect = (categories) => {
  //   setSelectedCategories(categories);
  // };

  // const handleCategoryRemove = (category) => {
  //   const updatedSelectedCategories = selectedCategories.filter(
  //     (selectedCategory) => selectedCategory !== category
  //   );
  //   setSelectedCategories(updatedSelectedCategories);
  // };
   //******************** Category filter Code End *****************

   //******************** Color filter Code Start *****************
  // const [selectedColors, setSelectedColors] = useState([]);
  // const handleColorSelect = (color) => {
  //   setSelectedColors((prevColors) => [...prevColors, color]);
  // };

  // const handleColorRemove = (color) => {
  //   const updatedSelectedColors = selectedColors.filter(
  //     (selectedColor) => selectedColor !== color
  //   );
  //   setSelectedColors(updatedSelectedColors);
  // };
    //******************** Color filter Code End *****************

    //******************** SubCategory filter Code Start *****************
  // const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  // const handleSubCategoriesSelect = (subCategory) => {
  //   setSelectedSubCategories((prevSubCategories) => [
  //     ...prevSubCategories,
  //     subCategory,
  //   ]);
  // };

  // const handleSubCategoriesRemove = (subCategory) => {
  //   const updatedSelectedSubCategories = selectedSubCategories.filter(
  //     (selectedSubCategory) => selectedSubCategory !== subCategory
  //   );
  //   setSelectedSubCategories(updatedSelectedSubCategories);
  // };
  //******************** SubCategory filter Code End *****************

  return (
    <>
      <div className="col-xxl-3 col-lg-4 wow fadeInUp">
        <div className="left-box">
          <div className="shop-left-sidebar">
            <div className="back-button">
              <h3>
                <i className="fa-solid fa-arrow-left" /> Back
              </h3>
            </div>
            {/* <Filters
              selectedCategories={selectedCategories}
              selectedColors={selectedColors || []}
              onCategoryRemove={handleCategoryRemove}
              onSubCategoriesRemove={handleSubCategoriesRemove}
              onColorRemove={handleColorRemove}
            /> */}
            <div className="accordion custome-accordion" id="accordionExample">
              {/* <Categories selectedCategories={selectedCategories || []} onCategorySelect={handleCategorySelect}/>
              <SubCategories selectedSubCategories={selectedSubCategories} onSubCategoriesSelect={handleSubCategoriesSelect}/>
              <Colors onColorSelect={handleColorSelect} selectedColors={selectedColors || []} /> */}
              <Categories/>
              <SubCategories/>
              <Price />
              <Size />
              <Colors/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
