
import PartOne from "../Components/PartOne";
import PartTwo from "../Components/PartTwo";

const Home = () => {
  return (
    <div  className='grid grid-cols-2 gap-4 p-2'>
      {/* section one*/}
      <div className="bg-[#565758] md:w-full min-h-screen rounded-2xl">

      </div>
      {/*end section one*/}
  
    {/* section two */}
      <div>
      <PartOne/>
      <div className="w-[498px] mt-4 mb-4 mx-auto h-[4px] rounded-2xl bg-[#313337]"></div>
      <PartTwo/>
      </div>
      {/* end section two */}
    </div>
  );
};

export default Home;
