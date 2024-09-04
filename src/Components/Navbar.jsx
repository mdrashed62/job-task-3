import { useState } from "react";

const Navbar = ({ setActiveTab }) => {
  const [activeButton, setActiveButton] = useState("aboutMe");

  const handleButtonClick = (tabName) => {
    setActiveButton(tabName);
    setActiveTab(tabName);
  };

  const navLinks = (
    <>
     <div className="flex justify-center items-center p-2">
     <li className="flex-1 justify-center font-semibold items-center">
        <button
          onClick={() => handleButtonClick("aboutMe")}
          className={`${
            activeButton === "aboutMe" ? "bg-[#28292F] text-white" : "text-[#A3ADB2]"
          } px-4 py-2 rounded-lg`}
        >
          About Me
        </button>
      </li>
      <li className="flex-1 font-semibold justify-center items-center">
        <button
          onClick={() => handleButtonClick("experience")}
          className={`${
            activeButton === "experience" ? "bg-[#28292F] text-white" : "text-[#A3ADB2]"
          } px-4 py-2 rounded-lg`}
        >
          Experience
        </button>
      </li>
      <li className="flex-1 justify-center items-center font-semibold">
        <button
          onClick={() => handleButtonClick("recommended")}
          className={`${
            activeButton === "recommended" ? "bg-[#28292F] text-white" : "text-[#A3ADB2]"
          } px-4 py-2 rounded-lg`}
        >
          Recommended
        </button>
      </li>
     </div>
    </>
  );

  return (
    <div className=" rounded-3xl bg-[#171717] text-white mx-auto">
      <div className="flex justify-between w-full">
        <ul className="px-1 w-full">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
