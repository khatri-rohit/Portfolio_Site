import Profile from '../components/Profile';
import DisplayMap from '../components/DIsplayMap';
import ImageSlider from '../components/ImageSlider';
import '../style/All.scss'
import StaticPlayer from '../components/StaticPlayer';

const All = () => {
  return (
    <>
      <div className="p-5 layout container mx-auto">
        <div className="box box1">
          <Profile />
        </div>
        <div className="box box2 rounded-3xl shadow-xl h-fit">
          <DisplayMap />
        </div>
        <div className="box box3 rounded-3xl shadow-xl h-fit">
          <ImageSlider />
        </div>
        <div className="box box3 rounded-3xl shadow-xl">
          <StaticPlayer />
        </div>
        {/* <div className="box box4">Box 4</div> */}
        {/* <div className="w-1/2 bg-white drop-shadow-xl h-[50ch] m-3"></div>
        <div className="w-1/2 bg-white drop-shadow-xl h-[50ch]"></div> */}
      </div>

    </>
  )
};

export default All;
