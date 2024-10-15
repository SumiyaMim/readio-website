/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import bannerImage from '../assets/images/banner.jpg';

export default function Header() {
  return (
    <div>
      <div 
        className="relative bg-cover bg-bottom h-screen"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Navbar />
        <div className="absolute inset-0 flex flex-col justify-center text-white px-10 lg:px-[140px]">
          <h1 className="text-base md:text-lg font-normal mb-2">Unleash Your Imagination Through Books</h1>
          <h2 className="text-6xl md:text-7xl font-normal mb-12">Reading Adventures</h2>
          <button className='bg-gray-900 px-8 text-gray-100 py-2 text-lg rounded-3xl w-fit'>See More</button>
        </div>
      </div>
    </div>
  );
}
