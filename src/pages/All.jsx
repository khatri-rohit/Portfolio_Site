import '../style/All.scss'
import Profile from '../components/Profile';
import DisplayMap from '../components/DIsplayMap';
import ImageSlider from '../components/ImageSlider';
import StaticPlayer from '../components/StaticPlayer';
import Skills from '../components/Skills';


const All = () => {
  return (
    <>
      <div className="layout container mx-auto">
        <div className="box box1">
          <Profile />
        </div>
        <div className="box box2 shadow-xl">
          <DisplayMap />
        </div>
        <div className="box box3 shadow-xl">
          <ImageSlider />
        </div>
        <div className="box box3 shadow-xl">
          <StaticPlayer />
        </div>
        <div className="box box4 shadow-xl">
          <Skills />
        </div>
      </div>

    </>
  )
};

export default All;
