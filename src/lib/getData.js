import products from "@/data/products.json";
import summerTips from "@/data/summerTips.json";

export const getSummerTips = () => {
  return summerTips.summer_tips;
};

export const getProducts = () => {
  return products;
};

export const getProduct = async (params) => {
  const { id } = await params;
  const products = getProducts();
  return products.find((p) => p.id === parseInt(id));
};



