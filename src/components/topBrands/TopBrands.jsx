import { getProducts } from "@/lib/getData";
import Marquee from "react-fast-marquee";
import BrandCard from "./BrandCard";

const TopBrands = () => {
  const products = getProducts();
  const topBrand = products.filter((p) => p.rating > 4.5);
  return (
    <div className="container mx-auto p-4 my-10">
      <div className="text-center space-y-3">
        <h2 className=" text-gray-800 text-3xl md:text-5xl font-bold">
          Top Brands
        </h2>
        <p className=" text-lg text-gray-600">
          Trusted brands for quality summer products
        </p>
      </div>
      <div className="gap-10 p-4 mt-5">
        <Marquee>
          <div className="flex space-x-5">
            {topBrand.map((p) => (
              <BrandCard key={p.id} name={p.brand} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
