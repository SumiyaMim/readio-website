import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import error from '../assets/error.json';

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[400px] md:w-[600px] lg:w-[800px] mx-auto">
        <Lottie animationData={error} loop={true} />
      </div>
      <div className="mt-10">
        <Link to="/">
          <button className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg text-white">
            <i><BiArrowBack className="text-xl"></BiArrowBack></i>
            <p className="text-sm font-medium">Back to home</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
