import React, { useEffect } from "react";
import { getCategory } from "../api calls/resort";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice";

function CategoryList() {
  const dispatch = useDispatch();
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const categories = useSelector((state) => state.category.category);
  const role = currentAdmin.role;
  const fetchCategory = async () => {
    try {
      const response = await getCategory(role);
      console.log(response);
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

  return (
    <>
      <div className="w-1/2 p-4 mt-10 border">
        <ul>
          {categories.map((category) => (
            <li className="py-2 border-b border-gray-300" key={category._id}>
              {category.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryList;
