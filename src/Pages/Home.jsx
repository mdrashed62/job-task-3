
import PartOne from "../Components/PartOne";
import PartTwo from "../Components/PartTwo";

const Home = () => {
  return (
    <div  className='grid grid-cols-2 gap-4 p-2'>
      {/* section one*/}
      <div className="bg-[#565758] min-h-screen rounded-2xl">

      </div>
      {/*end section one*/}
  
    {/* section two */}
      <div className="">
      <PartOne/>
      <PartTwo/>
      </div>
      {/* end section two */}
    </div>
  );
};

export default Home;
