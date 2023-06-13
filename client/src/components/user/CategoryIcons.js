import React, { useEffect, useState } from "react";
import styles from "../../stylesheets/hideScroll.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/categorySlice";
import { getCategory } from "../../api calls/resort";
function CategoryIcons() {
  const categories = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  const fetchCategory = async () => {
    try {
      const response = await getCategory();
      if (response.success) {
        dispatch(setCategory(response.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onCategoryClick = async (category) => {
    console.log(category);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div
        className={`${styles.scrollcontainer} flex justify-center items-center w-5/12 space-x-4 overflow-auto  bg-white gap-10 h-24 bg-opacity-90 shadow-lg rounded-lg`}
      >
        {categories.map((category) => (
          <div
            className={`${styles.imageContainer} cursor-pointer`}
            key={category.id}
            onClick={() => onCategoryClick(category.category)}
          >
            <img
              className={`w-8 h-8 ${styles.image}`}
              src={category.imageUrl}
              alt="Category Icon 1"
            />
            <span className={styles.subtitle}>{category.category}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryIcons;