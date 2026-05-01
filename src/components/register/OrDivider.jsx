const OrDivider = () => {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-gray-300" />
      <span className="text-gray-500 text-sm font-medium select-none">OR</span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
};

export default OrDivider;
