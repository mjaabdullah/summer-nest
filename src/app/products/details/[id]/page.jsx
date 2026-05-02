import { getProduct } from "@/lib/getData";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const product = await getProduct(params);
  return {
    title: `${product.name} | SummerNest`,
    description: product.description,
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(params);
  const { name, brand, price, rating, description, image, category, stock } =
    product;

  const fullStars = Math.floor(rating);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-10 relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full" />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl ">
        <p className="text-[11px] tracking-[0.14em] uppercase text-[#c4825a] mb-8 flex flex-wrap items-center gap-2">
          Products <span>›</span> {category} <span>›</span>
          <span className="text-[#d45a1d] font-semibold">{name}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-linear-to-bl from-orange-100 to-amber-50 overflow-hidden rounded-lg shadow-lg">
          <div className="relative overflow-hidden min-h-75 md:min-h-0">
            <div className="" />

            <div className="absolute top-5 left-5 z-10 bg-[#e86c2c] text-white text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-1.5 rounded-full">
              {category}
            </div>

            <div className="absolute top-5 right-5 z-10 text-[#e86c2c] text-[10px] font-bold tracking-[0.12em] px-3 py-1.5 rounded-full border border-[#ffe0c2] bg-amber-100/80">
              ID · #{id}
            </div>

            <Image src={image} alt={name} fill className="object-cover " />
          </div>

          <div className="p-10 md:p-12 flex flex-col gap-0">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#e8a06c] font-semibold">
                {brand}
              </span>
              <div className="flex-1 h-px bg-linear-to-r from-orange-400 to-orange-100/10" />
            </div>

            <h1 className=" text-2xl md:text-3xl font-extrabold leading-[1.18] text-[#1a1008] mb-5">
              {name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-[15px] ${i < fullStars ? "text-orange-500" : "text-orange-200"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[14px] font-bold text-[#e86c2c]">
                {rating}
              </span>
              <span className="text-[#f5cdb0] text-lg">·</span>
              <span className="text-[12px] text-[#c4825a]">
                Verified Rating
              </span>
            </div>

            {/* Info Chips */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {[
                { icon: "🏷️", label: "Category", val: category },
                { icon: "✦", label: "Brand", val: brand },
                { icon: "📦", label: "Stock", val: `${stock} pcs` },
              ].map(({ icon, label, val }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#fde3ca] text-[12px]"
                  style={{ background: "#fff6ef" }}
                >
                  <span className="text-sm">{icon}</span>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-[#c4825a] font-semibold leading-none mb-0.5">
                      {label}
                    </div>
                    <div className="text-[#6b3820] font-bold leading-none">
                      {val}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px mb-5 bg-linear-to-r from-orange-400 to-orange-300/40" />

            <p className="text-[10px] tracking-[0.18em] uppercase text-[#d4956a] font-semibold mb-2">
              Description
            </p>
            <p className="text-[13.5px] leading-[1.9] text-[#7a5a44] font-normal mb-7 grow">
              {description}
            </p>

            <div className="rounded-2xl p-5 flex items-center justify-between border border-[#ffd5b0] bg-linear-to-br from-orange-50/10 to-orange-100">
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#c4825a] mb-1">
                  Price
                </p>
                <p className="text-[42px] font-extrabold text-orange-500 leading-none">
                  <sup className="text-xl font-semibold text-orange-400">$</sup>
                  {price}
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#c4825a] mb-1">
                  In Stock
                </p>
                <p className="text-[28px] font-bold text-[#1a1008] leading-none">
                  {stock}
                </p>
                <p className="text-[11px] text-orange-600 mt-0.5">
                  units available
                </p>
                <div className="w-24 h-1.5 bg-[#fde3ca] rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-orange-400 to-orange-500"
                    style={{
                      width: `${Math.min((stock / 100) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
