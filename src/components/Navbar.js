import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar bg-transparent container mx-auto">
        <div className="flex-1">
          <Link href="/" className="text-xl flex items-center gap-x-4">
            <MdOutlineFastfood size={30} className="text-base-content" />{" "}
            <p>
              <span className="text-secondary">Cemal</span>
              <span className="text-primary">Cemil</span>
            </p>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm m-1"
            >
              <FaRegUserCircle size={20} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 border-[1px] border-neutral rounded-box z-[1] w-28 p-2 shadow"
            >
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
