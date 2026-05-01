import { Button } from "@heroui/react";
import Image from "next/image";
import { MdStarBorderPurple500 } from "react-icons/md";

const ProductCard = ({ product }) => {
  const { name, brand, price, rating, description, image, category, stock } =
    product;
  return (
    <div className="bg-gray-100 shadow rounded-lg  max-w-80">
      <div className="relative w-full h-37.5">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg  "
        />
      </div>
      <div className="p-4 space-y-3">
        <span className="text-gray-500">{category}</span>
        <h3 className="text-2xl font-bold">{name}</h3>

        <div className="flex justify-between">
          <span className="text-yellow-500 text-2xl flex  gap-1">
            <MdStarBorderPurple500 />
            <span className="text-gray-600 text-xl">{rating}</span>
          </span>
          <span className="text-2xl text-red-600 font-bold">${price}</span>
        </div>

        <Button fullWidth>View Details</Button>
      </div>
    </div>
  );
};

export default ProductCard;
