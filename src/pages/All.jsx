import '../style/All.scss'
import Profile from '../components/Profile';
import DisplayMap from '../components/DIsplayMap';
import ImageSlider from '../components/ImageSlider';
import StaticPlayer from '../components/StaticPlayer';
import Skills from '../components/Skills';


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
        <div className="box box3 rounded-3xl shadow-xl h-fit">
          <StaticPlayer />
        </div>
        <div className="box box4 rounded-3xl shadow-xl h-fit">
          <Skills />
        </div>
      </div>

    </>
  )
};

export default All;
