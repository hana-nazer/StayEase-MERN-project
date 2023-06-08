import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice";
import { addCategory } from "../api calls/admin";

function CategoryForm() {
  const categoryRef = useRef("");
  const dispatch = useDispatch();

  const submit = async (event) => {
    event.preventDefault();
    let newCategory = categoryRef.current.value.trim();
    if (newCategory !== "") {
      try {
        const response = await addCategory({ category: newCategory });
        if (response.success) {
          const categoryData = Array.isArray(response.data) ? response.data : [];
          dispatch(setCategory(categoryData));
          categoryRef.current.value = "";
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-1/2 p-4 mt-10 border">
      <p className="mb-3 text-xl font-semibold">Category</p>
      <form onSubmit={submit}>
        <div className="mb-4">
          <input
            className="w-3/4 px-3 py-2 mr-1 border border-gray-400 rounded-lg"
            type="text"
            id="category"
            name="category"
            ref={categoryRef}
          />
          <button className="w-20 p-2 text-white bg-gray-700 rounded-lg">Add</button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
