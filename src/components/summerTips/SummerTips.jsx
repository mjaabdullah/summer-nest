import { getSummerTips } from "@/lib/getData";
import TipsCard from "./TipsCard";

const SummerTips = () => {
  const summerTips = getSummerTips();

  return (
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <h2 className="text-center text-gray-800 text-3xl md:text-5xl font-bold">
        Summer Care Tips
      </h2>
      <span className="text-center text-lg text-gray-600">
        Expert advice to make your summer more enjoyable
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {summerTips.map((tip) => (
          <TipsCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default SummerTips;
