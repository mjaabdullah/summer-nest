import { Button } from "@heroui/react";
import Link from "next/link";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="bg-linear-to-br from-orange-600 to-orange-400 w-fit text-white py-1.5 px-4 rounded-full font-semibold">
        ☀️ Summer Collection {new Date().getFullYear()}
      </div>
      <h1 className="text-2xl sm:text-4xl/12 font-bold">
        Beat the Heat. <br />
        <span className="bg-linear-to-br from-orange-600 to-orange-400 text-transparent bg-clip-text">
          Stay Cool
        </span>{" "}
        This Summer
      </h1>
      <span className="text-amber-700">
        Discover summer essentials to keep you fresh, comfortable & stylish all
        season.
      </span>
      <Link href={`/products`}>
        <Button
          className={`bg-linear-to-br from-orange-600 to-orange-400 hover:text-white`}
        >
          Shop Now <HiMiniArrowLongRight />
        </Button>
      </Link>
      <div className="flex items-center gap-1.5 flex-wrap text-amber-700 ">
        <span className="flex items-center">
          <RxDotFilled /> Free Shipping
        </span>
        <span className="flex items-center">
          <RxDotFilled /> Quality Products
        </span>
        <span className="flex items-center">
          <RxDotFilled /> Easy Returns
        </span>
      </div>
    </div>
  );
};

export default HeroLeft;
