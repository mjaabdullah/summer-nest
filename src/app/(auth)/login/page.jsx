import GoogleSingIn from "@/components/login/GoogleSingIn";
import LoginForm from "@/components/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-5 bg-orange-50 rounded-lg shadow max-w-90 mx-auto overflow-hidden my-10 space-y-3">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-gray-600">Login to access your account</p>
        </div>
        <LoginForm />
        <GoogleSingIn />
      </div>
    </div>
  );
};

export default LoginPage;
