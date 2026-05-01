import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/lib/getData";

const productPage = () => {
  const products = getProducts();

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-gray-700 my-2">
          Our Products
        </h1>
        <p className="text-lg text-gray-600">
          Explore our curated collection of summer essentials
        </p>
      </div>
      <div>
        <div></div>
        <div className="grid grid-cols-2 gap-5 items-center my-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default productPage;
