import Box1 from '../components/Box1';
import DisplayMap from '../components/DIsplayMap';
import ImageSlider from '../components/ImageSlider';
import '../style/All.scss'

const All = () => {
  return (
    <>
      <div className="p-5 layout container mx-auto">
        <div className="box box1">
          <Box1 />
        </div>
        <div className="box box2 rounded-3xl shadow-xl h-fit">
          <DisplayMap />
        </div>
        <div className="box box3 rounded-3xl shadow-xl h-fit">
          <ImageSlider />
        </div>
        {/* <div className="box box4">Box 4</div> */}
        {/* <div className="w-1/2 bg-white drop-shadow-xl h-[50ch] m-3"></div>
        <div className="w-1/2 bg-white drop-shadow-xl h-[50ch]"></div> */}
      </div>

      {/* <input type="input" list='colors' className='border-4' />
      <datalist id='colors'>
        <option value="red">red</option>
        <option value="blue">yellow</option>
        <option value="yellow">pink</option>
      </datalist> */}
    </>
  )
};

export default All;
