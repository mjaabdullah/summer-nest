import Hero from "@/components/hero/Hero";
import PopularProducts from "@/components/popularProducts/PopularProducts";
import SummerTips from "@/components/summerTips/SummerTips";
import TopBrands from "@/components/topBrands/TopBrands";


export default function Home() {
  return (
    <main>
      <Hero />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
    </main>
  );
}
