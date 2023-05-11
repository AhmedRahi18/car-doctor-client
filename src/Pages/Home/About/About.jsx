import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen mb-20 mt-10">
      <div className="hero-content flex-col lg:flex-row">
       <div className='lg:w-2/3 relative'>
       <img src={person} className="w-4/5 rounded-lg shadow-2xl"/>
       <img src={parts} className="w-2/4 absolute right-20 top-48 border-8
       border-white rounded-lg shadow-2xl"/>
       </div>
        <div className='lg:w-1/3 me-10 mt-10'>
          <h3 className='text-2xl font-bold text-orange-400 mb-5'>About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field</h1>
          <p className="py-6 text-slate-500 mb-5">
          There are many variations of passages of Lorem Ipsum available, but the majority 
          have suffered alteration in some form, by injected humour, or randomised words 
          which dont look even slightly believable. 
          </p>
          <p className="py-6 text-slate-500 mb-5">
          the majority have suffered alteration in some form, by injected humour, or 
          randomised words which dont look even slightly believable. 
          </p>
          <button className="btn btn-warning text-white font-bold">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
