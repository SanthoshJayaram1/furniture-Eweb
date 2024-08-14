import Website from "../products/models/website";
import Category from "../products/models/category";
import Subcategory from "../products/models/subCategory";

const processData = async (data: any[]) => {
  for (const row of data) {
    const {
      Name:websiteName,
      Website: websiteURL,
      Category: categoryName,
      Subcategory: subcategoryName,
    } = row as any;

    let website = await Website.findOne({ name: websiteName });
    if (!website) {
      website = new Website({
        name: websiteName,
        url: websiteURL,
      });
      await website.save();
    }

    let category = await Category.findOne({
      name: categoryName,
      website: website._id,
    });
    if (!category) {
      category = new Category({ name: categoryName, website: website._id });
      await category.save();
    }

    let subcategory = await Subcategory.findOne({
      name: subcategoryName,
      category: category._id,
    });
    if (!subcategory) {
      subcategory = new Subcategory({
        name: subcategoryName,
        category: category._id,
      });
      await subcategory.save();
    }
  }
};

export default { processData };
