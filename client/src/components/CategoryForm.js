// import React, { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { setCategory } from "../redux/categorySlice";
// import { addCategory } from "../api calls/admin";

// function CategoryForm() {
//   const categoryRef = useRef("");
//   const dispatch = useDispatch();

//   const submit = async (event) => {
//     event.preventDefault();
//     let newCategory = categoryRef.current.value.trim();
//     if (newCategory !== "") {
//       try {
//         const response = await addCategory({ category: newCategory });
//         if (response.success) {
//           const categoryData = Array.isArray(response.data) ? response.data : [];
//           dispatch(setCategory(categoryData));
//           categoryRef.current.value = "";
//         } else {
//           console.log(response.data.message);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div className="w-1/2 p-4 mt-10 border">
//       <p className="mb-3 text-xl font-semibold text-center">Add Category</p>
//       <form onSubmit={submit}>
//         <div className="mb-4">
//           <label for='category'>Category name</label>
//           <input
//               className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
//             type="text"
//             id="category"
//             name="category"
//             ref={categoryRef}
//           />
//         </div>
//         <div className="mb-4">
//           <label for="icon">CategoryIcon</label>
//           <input
//             className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
//             type="file"
//             id="icon"
//             name="icon"
//             ref={categoryRef}
//           />
//         </div>
//         <button className="w-full p-2 text-white bg-gray-700 rounded-lg">Add</button>

//       </form>
//     </div>
//   );
// }

// export default CategoryForm;

import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice";
import { addCategory } from "../api calls/admin";

import { uploadImg } from "../api calls/admin";

function CategoryForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      category: "",
      icon: null,
    },
    validate: (values) => {
      const errors = {};

      if (!values.category) {
        errors.category = "Category name is required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        let iconUrl = await uploadImg(values.icon);
        console.log("iconUrl", iconUrl);

        let formData = {
          category: values.category,
          iconUrl,
        };
        const response = await addCategory(formData);
        if (response.success) {
          dispatch(setCategory(response.data));
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="w-1/2 p-4 mt-10 border">
      <p className="mb-3 text-xl font-semibold text-center">Add Category</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category">Category name</label>
          <input
            className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
            type="text"
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category && (
            <div className="text-red-500">{formik.errors.category}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="icon">CategoryIcon</label>
          <input
            className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
            type="file"
            id="icon"
            name="icon"
            onChange={(event) => {
              formik.setFieldValue("icon", event.currentTarget.files[0]);
            }}
          />
        </div>
        <button
          className="w-full p-2 text-white bg-gray-700 rounded-lg"
          type="submit"
          disabled={!formik.isValid}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
