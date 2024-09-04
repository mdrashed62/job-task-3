import { useState } from "react";

const Navbar = ({ setActiveTab }) => {
  const [activeButton, setActiveButton] = useState("aboutMe");

  const handleButtonClick = (tabName) => {
    setActiveButton(tabName);
    setActiveTab(tabName);
  };

  const navLinks = (
    <>
      <li className="flex-1 justify-center  font-semibold items-center">
        <button
          onClick={() => handleButtonClick("aboutMe")}
          className={`${
            activeButton === "aboutMe" ? "bg-[#2B3440] text-white" : ""
          } px-4 py-2 rounded-lg`}
        >
          About Me
        </button>
      </li>
      <li className="flex-1  font-semibold justify-center items-center">
        <button
          onClick={() => handleButtonClick("experience")}
          className={`${
            activeButton === "experience" ? "bg-[#2B3440] text-white" : ""
          } px-4 py-2 rounded-lg`}
        >
          Experience
        </button>
      </li>
      <li className="flex-1 justify-center items-center font-semibold">
        <button
          onClick={() => handleButtonClick("recommended")}
          className={`${
            activeButton === "recommended" ? "bg-[#2B3440] text-white" : ""
          } px-4 py-2 rounded-lg`}
        >
          Recommended
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar rounded-3xl bg-black text-white mx-auto">
      <div className="flex justify-center w-full lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex justify-between w-full">
        <ul className="menu menu-horizontal px-1 w-full">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
