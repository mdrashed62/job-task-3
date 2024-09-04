
import PartOne from "../Components/PartOne";
import PartTwo from "../Components/PartTwo";

const Home = () => {
  return (
    <div  className='grid grid-cols-2 gap-6 p-2'>
      <div className="bg-[#565758] min-h-screen rounded-2xl">

      </div>
  
      <div className="">
      <PartOne/>
      <PartTwo/>
      </div>
    </div>
  );
};

export default Home;
