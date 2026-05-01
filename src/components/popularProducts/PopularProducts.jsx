import { getProducts } from "@/lib/getData";
import ProductCard from "../products/ProductCard";

const PopularProducts = () => {
  const products = getProducts();
  const popularProducts = products.filter((p) => p.rating > 4.6);
  return (
    <div className="container mx-auto p-4 my-10">
      <div className="text-center space-y-3">
        <h2 className=" text-gray-800 text-3xl md:text-5xl font-bold">
          Popular Products
        </h2>
        <p className=" text-lg text-gray-600">
          Handpicked summer essentials loved by our customers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mt-5 justify-items-center">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
