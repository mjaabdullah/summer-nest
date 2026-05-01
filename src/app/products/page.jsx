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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default productPage;
