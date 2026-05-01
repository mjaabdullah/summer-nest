"use client";
import logo from "@/app/logo.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaProductHunt } from "react-icons/fa";
import NavLink from "./NavLink";
const Navbar = () => {
  console.log("function running...");
  // const { data, error } = await authClient.getSession();
  const { data, error } = authClient.useSession();

  console.log(data?.user);
  return (
    <header className="shadow-sm bg-white sticky top-0 z-50 ">
      <nav className="container mx-auto flex justify-between items-center px-4 py-2 sm:py-4">
        <Link href={`/`}>
          <div className="flex gap-1 items-center">
            <Image alt="Logo" src={logo} width={40} height={40} />
            <span className="hidden md:block font-bold text-3xl bg-linear-to-br from-orange-600 to-orange-400 text-transparent bg-clip-text">
              SummerNest
            </span>
          </div>
        </Link>
        <ul className="flex gap-1">
          <NavLink path={`/`} name={`Home`}>
            <FaHome />
          </NavLink>
          <NavLink path={`/products`} name={`Products`}>
            <FaProductHunt />
          </NavLink>
          {data?.user && (
            <NavLink path={`/my-profile`} name={`My Profile`}>
              <CgProfile />
            </NavLink>
          )}
        </ul>
        <div className="flex items-center gap-2.5">
          {data?.user ? (
            <Link
              onClick={async () => await authClient.signOut()}
              href={`/`}
              className="text-white py-1 md:py-1.5 px-3 md:px-4 font-semibold rounded-full text-sm md:text-[16px] bg-linear-to-br from-orange-600 to-orange-400"
            >
              Log Out
            </Link>
          ) : (
            <>
              <Link
                href={`/login`}
                className="ring ring-gray-300 py-1 md:py-1.5 px-3 md:px-4 font-semibold rounded-full text-sm md:text-[16px] hover:bg-linear-to-br from-orange-600 to-orange-400 hover:text-white"
              >
                {" "}
                Login
              </Link>
              <Link
                href={`/register`}
                className="text-white py-1 md:py-1.5 px-3 md:px-4 font-semibold rounded-full text-sm md:text-[16px] bg-linear-to-br from-orange-600 to-orange-400"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
