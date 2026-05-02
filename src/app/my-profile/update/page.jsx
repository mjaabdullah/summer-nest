import UpdateForm from "@/components/myProfile/Update";

const UpdatePage = () => {
  return (
    <div className="py-10 px-4">
      <h1 className=" text-center text-2xl md:text-3xl font-bold">
        Update your Profile
      </h1>
      <div className="max-w-100 mx-auto my-10 bg-orange-50/50 rounded-lg shadow-sm flex flex-col items-center p-6 space-y-3">
        <UpdateForm />
      </div>
    </div>
  );
};

export default UpdatePage;
