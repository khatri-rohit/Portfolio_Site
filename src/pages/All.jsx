import '../style/All.scss'

const All = () => {
  return (
    <>
      <div className="p-3 layout container mx-auto">
        <div className="box box1">Box 1</div>
        <div className="box box2">
          <div className="relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28578.02942788633!2d74.62897523199038!3d26.447550666568937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6d8fcb7cd01%3A0xcbaf8f12eb8100ee!2sAjmer%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1722859503231!5m2!1sen!2sin"
              width="800"
              height="300"
              className="rounded-3xl"
              allowFullScreen
              loading="lazy"
              style={{ border: '10px' }} />
            <img src="/img/face369.png"
              className="absolute inset-0 w-20"
              alt="bitmoji"
              title="rohit" />
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
