import Box1 from '../components/Box1';
import DisplayMap from '../components/DIsplayMap';
import '../style/All.scss'

const All = () => {
  return (
    <>
      <div className="p-3 layout container mx-auto">
        <div className="box box1">
          <Box1 />
        </div>
        <div className="box box2">
          <div className="relative w-full">
            <DisplayMap />
          </div>
        </div>
        <div className="box box3">Box 3</div>
        {/* <div className="box box4">Box 4</div> */}
        {/* <div className="w-1/2 bg-white drop-shadow-xl h-[50ch] m-3"></div>
        <div className="w-1/2 bg-white drop-shadow-xl h-[50ch]"></div> */}
      </div>
    </>
  )
};

export default All;
