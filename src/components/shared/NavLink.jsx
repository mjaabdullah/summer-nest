"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, name, children }) => {
  const pathName = usePathname();
  const isActive = pathName === path ? "border-b-2 border-orange-500" : "";

  return (
    <li
      className={`py-1 px-2 hover:bg-slate-200 hover:rounded text-center ${isActive}`}
    >
      <Link href={path}>
        <span className="hidden sm:block text-lg text-gray-700">{name}</span>
        <span className="sm:hidden text-2xl text-gray-800">{children}</span>
      </Link>
    </li>
  );
};

export default NavLink;
