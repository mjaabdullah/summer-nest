import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="container mx-auto my-5 px-4 py-15 min-h-[60vh] flex flex-col-reverse lg:flex-row items-center lg:justify-around gap-10 sm:gap-5 bg-amber-50/30 shadow rounded-lg">
      <HeroLeft />
      <HeroRight />
    </section>
  );
};

export default Hero;
