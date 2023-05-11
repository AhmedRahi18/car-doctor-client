import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div>
      <div className="carousel w-[1200px] mx-auto h-[600px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={img1}
            className="w-full rounded-lg"
          />
          <div className="absolute flex items-center rounded-lg
           h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="w-2/5 ms-12 ">
                <h2 className='text-6xl font-bold text-white mb-5'>
                    Affordable Price For Car Servicing</h2>
                <p className='text-white mb-5'>
                   There are many variations of passages of  available, 
                   but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-warning text-white">Discover More</button>
                <button className="btn btn-outline text-white ms-4">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={img2}
            className="w-full"
          />
          <div className="absolute flex items-center rounded-lg
           h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="w-2/5 ms-12 ">
                <h2 className='text-6xl font-bold text-white mb-5'>
                    Affordable Price For Car Servicing</h2>
                <p className='text-white mb-5'>
                   There are many variations of passages of  available, 
                   but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-warning text-white">Discover More</button>
                <button className="btn btn-outline text-white ms-4">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full"
          />
          <div className="absolute flex items-center rounded-lg
           h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="w-2/5 ms-12 ">
                <h2 className='text-6xl font-bold text-white mb-5'>
                    Affordable Price For Car Servicing</h2>
                <p className='text-white mb-5'>
                   There are many variations of passages of  available, 
                   but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-warning text-white">Discover More</button>
                <button className="btn btn-outline text-white ms-4">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full"
          />
          <div className="absolute flex items-center rounded-lg
           h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="w-2/5 ms-12 ">
                <h2 className='text-6xl font-bold text-white mb-5'>
                    Affordable Price For Car Servicing</h2>
                <p className='text-white mb-5'>
                   There are many variations of passages of  available, 
                   but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-warning text-white">Discover More</button>
                <button className="btn btn-outline text-white ms-4">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
