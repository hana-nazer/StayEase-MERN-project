import React, { useEffect } from "react";
import { getCategory } from "../api calls/resort";
import { useSelector, useDispatch } from "react-redux";
import { setCategory,chooseCategory } from "../redux/categorySlice";

function CategoryList() {
  const dispatch = useDispatch();
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const categories = useSelector((state) => state.category.category);
  console.log(categories);
  const role = currentAdmin.role;
  const fetchCategory = async () => {
    try {
      const response = await getCategory(role);
      if (response.success) {
        dispatch(setCategory(response.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [categories]);
  
  
  const handleCategory =(category)=>{
    console.log(category);
    dispatch(chooseCategory(category))
  }

  return (
    <>
      <div className="w-1/2 p-4 mt-10 border">
        <ul>
          {categories &&
            categories.map((category) => (
              <li className="flex py-2 mt-6 border-b border-gray-300" key={category._id} onClick={()=>handleCategory(category)}>
              <img src={category.imageUrl} alt={category.category} className="w-10 h-10 mr-2 border" />
              <span className="mr-2 ">{category.category}</span>
            </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryList;
