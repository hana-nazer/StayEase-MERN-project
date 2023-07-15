import React, { useRef } from "react";
import { uploadImg } from "../api calls/admin";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/categorySlice";
import { addCategory } from "../api calls/admin";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function CategoryForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.category);

  const formik = useFormik({
    initialValues: {
      category: "",
      icon: null,
    },
    validate: (values) => {
      const errors = {};
      if (!values.category.trim()) {
        errors.category = "Category is required";
      } else if (
        categories.some(
          (cat) => cat.category.toLowerCase() === values.category.toLowerCase()
        )
      ) {
        errors.category = "Category is already added";
      }
      if (!values.icon) {
        errors.icon = "Icon is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const { category, icon } = values;
        const formData = new FormData();
        formData.append("category", category);
        formData.append("icon", icon);

        const response = await addCategory(formData);
        if (response.success) {
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          dispatch(setCategory(response.data));
          resetForm();
        }
      } catch (error) {
        if (error.message === "500") {
          navigate("/admin/error500");
        }
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="w-3/4 p-4 m-4 mt-10 mb-10 border lg:w-1/2">
        <p className="mb-3 text-xl font-semibold text-center">Add Category</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="category">Category name</label>
            <input
              className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="text"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.category && formik.errors.category && (
              <span className="text-sm text-red-500">
                {formik.errors.category}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="icon">Category Icon</label>
            <input
              className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="file"
              id="icon"
              name="icon"
              onChange={(event) => {
                formik.setFieldValue("icon", event.currentTarget.files[0]);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.icon && formik.errors.icon && (
              <span className="text-sm text-red-500">{formik.errors.icon}</span>
            )}
          </div>
          <button
            className="w-full p-2 text-white bg-gray-700 rounded-lg"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CategoryForm;
