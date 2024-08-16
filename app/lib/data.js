import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const allUsers = await User.find({ username: { $regex: regex } }).skip(
      ITEM_PER_PAGE * (page - 1)
    );
    const users = allUsers.splice(0, 2);
    return { users, hasNext: !!allUsers.length };
  } catch (error) {
    console.log(error);
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const allProducts = await Product.find({ title: { $regex: regex } }).skip(
      ITEM_PER_PAGE * (page - 1)
    );
    const products = allProducts.splice(0, 2);
    return { products, hasNext: !!allProducts.length };
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch users!");
  }
};
