const Category = require("../../models/CategoryModel");

//add category
exports.addCategory = async (req, res) => {
  try {
    const category = req.body.category;
    const iconUrl = req.body.iconUrl;
    console.log(category);
    if (!category || !iconUrl) {
      return res.send({
        success: false,
        message: "Give non empty value",
      });
    }

    const newCategory = new Category({
      category: category,
      imageUrl: iconUrl,
    });

    const savedCategory = await newCategory.save();
    res.send({
      success: true,
      message: "added category successfully",
      data: savedCategory,
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
