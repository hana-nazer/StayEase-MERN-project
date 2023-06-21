import React, { useRef } from "react";
import { uploadImg } from "../api calls/admin";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice";
import { addCategory } from "../api calls/admin";

function CategoryForm() {
  const dispatch = useDispatch();

  const categorySubmit = async (event) => {
    event.preventDefault();
    try {
      const category = event.target.category.value;
      const iconFile = event.target.icon.files[0];
      const imageUrl = await uploadImg(iconFile);
      let formData = {
        category: category,
        iconUrl: imageUrl,
      };
      const response = await addCategory(formData);
      if (response.success) {
        dispatch(setCategory(response.data));
        console.log(response.data);
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <div className="w-3/4 p-4 m-4 mt-10 mb-10 border lg:w-1/2">
        <p className="mb-3 text-xl font-semibold text-center">Add Category</p>
        <form onSubmit={categorySubmit}>
          <div className="mb-4">
            <label htmlFor="category">Category name</label>
            <input
              className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="text"
              id="category"
              name="category"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="icon">CategoryIcon</label>
            <input
              className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="file"
              id="icon"
              name="icon"
            />
          </div>
          <button className="w-full p-2 text-white bg-gray-700 rounded-lg">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CategoryForm;
