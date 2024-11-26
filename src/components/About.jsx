import bookImage from '../assets/images/book.jpg';
import aboutImage from '../assets/images/about.jpg';

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 lg:px-2 py-28">
      <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0'>
        <div className='lg:w-2/5'>
          <h2 className='font-semibold text-3xl'>Our Mission</h2>
          <div className='pt-2'>
            <hr className='border-2 border-orange-500 w-16'/>
          </div>
          <h4 className='pt-8 pb-3 text-[#8b8b8b]'>We make discovering books fun and easy for every reader!</h4>
          <p className='text-justify pb-10'>
            Welcome to Readio, a dedicated destination for book enthusiasts. We take pride in
            offering a carefully curated collection, ranging from timeless classics to
            contemporary bestsellers. We are committed to fostering a love for reading and
            providing an exceptional experience for every visitor.
          </p>
          <button className='border-2 border-orange-500 font-semibold text-orange-600 px-4 py-2'>Learn More</button>
        </div>
        <div className='flex flex-col md:flex-row gap-12 justify-between'>
          <img src={bookImage} alt="Book" className='h-[400px] md:h-96 md:w-80 lg:w-72'/>
          <img src={aboutImage} alt="About" className='h=[400px] md:h-96 md:w-80 lg:w-72'/>
        </div>
      </div>
    </div>
  );
};

export default About;
