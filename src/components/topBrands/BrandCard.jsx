const BrandCard = ({ name }) => {
  return (
    <div className="py-2.5 px-3.5 md:py-5 md:px-7 text-2xl md:text-3xl font-bold shadow bg-gray-50 rounded-lg text-gray-600 mr-5 my-2">
      {name}
    </div>
  );
};

export default BrandCard;
