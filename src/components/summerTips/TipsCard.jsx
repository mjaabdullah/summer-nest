const TipsCard = ({ tip }) => {
  const { icon, description, title } = tip;
  return (
    <div className="flex flex-col items-center bg-gray-50 shadow px-5 py-8 rounded-lg">
      <span className="text-5xl">{icon}</span>
      <h2 className="text-2xl font-bold mt-5 mb-2">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default TipsCard;
