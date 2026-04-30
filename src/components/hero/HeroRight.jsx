const HeroRight = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-orange-100 p-4 rounded-full">
        <div className="bg-orange-300 p-4 rounded-full">
          <div className="bg-linear-to-br from-orange-600 to-orange-400 rounded-full flex flex-col justify-center items-center p-6 gap-0">
            <h2 className="text-5xl font-extrabold text-white">35%</h2>
            <h4 className="text-white font-semibold">OFF</h4>
            <span className="text-white">Summer Sale</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
