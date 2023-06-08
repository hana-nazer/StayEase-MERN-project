const Category = require("../../models/CategoryModel");

//add location
exports.addCategory = async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) {
      return res.send({
        success: false,
        message: "Give non empty value",
      });
    }
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.send({
      success: true,
      message: "added category successfully",
      data: newCategory,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

// Fetch all category
exports.category = async (req, res) => {
  try {
    const category = await Category.find();
    res.send({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve category" });
  }
};
