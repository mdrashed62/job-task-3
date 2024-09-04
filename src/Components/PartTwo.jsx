import photo from "../assets/photo.jpeg";
import '..//StyleWithCss/style.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const PartTwo = () => {
 
  const photos = [photo, photo, photo];

  return (
    <div className="mt-10 bg-[#363C43] rounded-2xl">
     <div className="w-[511px] mx-auto">
     <div className=" flex justify-between items-center mb-10">
          <button className="py-4 px-10 rounded-xl mt-6 bg-[#171717] text-white font-semibold">Gallery</button>
          <div className="flex justify-center items-center gap-8">
            <button className="p-1 px-4 button shadow-2xl mt-6 rounded-2xl text-white "><span className="text-xl mb-[3px] mr-2">+</span><span className="text-sm">ADD IMAGE</span></button>
            <div className="text-xl text-[#6F787C] mt-6 flex items-center gap-3">
            <button className="bg-[#2A2D31] arrowButton rounded-full p-4"><FaArrowLeft/></button>
            <button className="bg-[#2A2D31] arrowButton rounded-full p-4"><FaArrowRight/></button>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto">
        {photos.map((img, index) => (
          <img className="mb-4 rounded-2xl grayscale-img w-[160px] h-[160px] mx-auto" key={index} src={img} alt={`Photo ${index + 1}`} />
        ))}
      </div>
     </div>
    </div>
  );
};

export default PartTwo;
