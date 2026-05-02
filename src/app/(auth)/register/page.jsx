import GoogleSingIn from "@/components/login/GoogleSingIn";
import RegisterForm from "@/components/register/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-5 bg-orange-50 rounded-lg shadow max-w-90 mx-auto overflow-hidden my-10 space-y-3">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-600">Start your journey with us</p>
        </div>
        <RegisterForm />
        <GoogleSingIn />
        <div className="text-center">
          Already have an account?{" "}
          <Link
            href={`/login`}
            className="bg-linear-to-br from-orange-600 to-orange-400 text-transparent bg-clip-text font-semibold"
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
