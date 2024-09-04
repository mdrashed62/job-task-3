import  { useState } from "react";
import photo from "../assets/photo.jpeg";
import '..//StyleWithCss/style.css';
import { FaArrowLeft, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";

const PartTwo = () => {
  const [photos, setPhotos] = useState([photo, photo, photo]);

  const handleAddImage = (event) => {
    const newImage = URL.createObjectURL(event.target.files[0]);
    setPhotos([...photos, newImage]);
  };

  return (
    <div className=" bg-[#363C43] flex shadow-2xl items-center rounded-2xl">
      <div className="w-full flex">
        {/* First Column */}
        <div className="flex flex-col items-center gap-[77px] w-[50px] mt-7">
          <div className="ml-[15px]">
            <svg width="2em" height="2em">
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
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="w-2 blankDiv h-2 bg-[#4B4F55]"></div>
            ))}
          </div>
        </div>
        {/* Second Column */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-10 pl-3 pr-7">
            <button className="py-4 px-8 rounded-xl mt-6 bg-[#171717] text-white font-semibold">Gallery</button>
            <div className="flex justify-center items-center gap-8">
              <div className="relative">
                <button className="p-2 px-4 button shadow-2xl mt-6 rounded-2xl text-white">
                  <span className="text-xl mb-[4px] mr-2">+</span>
                  <span className="text-[12px]">ADD IMAGE</span>
                </button>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleAddImage}
                />
              </div>
              <div className="text-xl text-[#6F787C] mt-6 flex items-center gap-3">
                <button className="bg-[#2A2D31] arrowButton rounded-full p-2"><FaArrowLeft /></button>
                <button className="bg-[#2A2D31] arrowButton rounded-full p-2"><FaArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 px-2 gap-3 mr-4">
            {photos.map((img, index) => (
              <img
                className="mb-4 rounded-2xl grayscale-img w-[165px] h-[160px] mx-auto"
                key={index}
                src={img}
                alt={`Photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartTwo;
