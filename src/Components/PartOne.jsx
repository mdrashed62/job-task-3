import { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "../Pages/AboutMe";
import Experience from "../Pages/Experience";
import Recommended from "../Pages/Recommended";
import { FaRegQuestionCircle } from "react-icons/fa";
import '../StyleWithCss/style.css';

const PartOne = () => {
  const [activeTab, setActiveTab] = useState("aboutMe");

  const renderContent = () => {
    switch (activeTab) {
      case "aboutMe":
        return <AboutMe />;
      case "experience":
        return <Experience />;
      case "recommended":
        return <Recommended />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="bg-[#363C43] flex items-center text-white rounded-2xl">
      <div className="flex w-full">
        {/* First div */}
        <div className="flex flex-col items-center gap-[100px] w-[50px] mt-4">
          <div className="ml-[15px]">
          <svg width=" 2em" height="2em">
            <defs>
              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#4A4E54" offset="0%" />
                <stop stopColor="#A3ADBA" offset="100%" />
              </linearGradient>
            </defs>
            <FaRegQuestionCircle style={{ fill: "url(#icon-gradient)" }} />
          </svg>
          </div>

          <div className="grid grid-cols-2 gap-[2px]">
            <div className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
            <div className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
            <div className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
            <div className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
            <div className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
            <div className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
          </div>
        </div>

        {/* Second div */}
        <div className="w-full p-4">
          <Navbar setActiveTab={setActiveTab} />
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PartOne;
