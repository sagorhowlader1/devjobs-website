import { FaRegBookmark } from "react-icons/fa";
import type { IJobType } from "../type";

interface ISavedJobTypeProps {
  savedJobs: IJobType[];
}

const Navbar = ({savedJobs}: ISavedJobTypeProps) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm text-xl font-medium dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Salaries</a>
            </li>
            <li>
              <a href="#">Post a Job</a>
            </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-2xl text-slate-800">
              Dev<span className="text-orange-400">Jobs</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-medium">
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Salaries</a>
            </li>
            <li>
              <a href="#">Post A Job</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-neutral"><FaRegBookmark /> Saved Jobs . {savedJobs.length}</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
