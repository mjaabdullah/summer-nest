import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaSnapchat,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t-4 border-orange-600 bg-linear-to-br from-amber-50 to-orange-50">
      <section className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-bold text-3xl bg-linear-to-br from-orange-600 to-orange-400 text-transparent bg-clip-text">
              SummerNest
            </span>
            <span className="max-w-70 inline-block">
              Your one-stop destination for premium summer essentials. Stay
              fresh, cool & stylish all season long.
            </span>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-xl text-gray-500">Contact</h3>
            <ul className="text-shadow-gray-500">
              <li className="flex items-center gap-1">
                <MdOutlineMailOutline />
                <span className="inline-block mb-1">
                  support@summernest.com
                </span>
              </li>
              <li className="flex items-center gap-1">
                <FaPhoneAlt />
                +880 1510-000 005
              </li>
              <li className="flex items-center gap-1">
                <FaLocationDot />
                12 Beach Road, Dhaka
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl text-gray-500">Legal</h3>
            <ul className="text-shadow-gray-500">
              <li className="hover:text-orange-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                Cookie Policy
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                Refund Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap-reverse gap-3.5 justify-between mt-5 pt-6 border-t-2 border-amber-200">
          <div>
            © {new Date().getFullYear()} SummerStore. All rights reserved.
          </div>

          <ul className="flex gap-2">
            <li className="p-2 bg-gray-200 text-lg rounded-lg cursor-pointer">
              <FaFacebook />
            </li>
            <li className="p-2 bg-gray-200 text-lg rounded-lg cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="p-2 bg-gray-200 text-lg rounded-lg cursor-pointer">
              <FaInstagram />
            </li>
            <li className="p-2 bg-gray-200 text-lg rounded-lg cursor-pointer">
              <FaSnapchat />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
