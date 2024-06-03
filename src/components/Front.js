
import React from 'react';
import ReactDom from "react-dom";
import img3 from '../assests/Frame 1.png';
import img2 from '../assests/img2.png';
import img1 from '../assests/img1.png';
import img4 from '../assests/img4.png';


const Front = () => {
  return (
   <div className='  md:w-[1240px] mx-auto bg-gray-50'>
      <div className=''>
      {/* Header */}
      <header className="flex  justify-between items-center p-6">
        <div className="text-2xl font-bold text-red-500">🔥Uifry</div>
        <nav className="space-x-4 ">
          <a href="#home" className=" text-lg text-gray-700 hover:text-red-500 ">Home</a>
          <a href="#about" className=" text-lg text-gray-700 hover:text-red-500">About Us</a>
          <a href="#pricing" className="text-lg text-gray-700 hover:text-red-500">Pricing</a>
          <a href="#features" className=" text-lg text-gray-700 hover:text-red-500">Features</a>
        </nav>
        <button className="mt-4 md:mt-0  text-orange-600 hover:text-white hover:bg-orange-600 py-2 px-4 rounded cursor-pointer mr-[150px] border border-orange-600 text-lg">Download</button>
      </header>
   <div className='flex'>
      {/* Hero Section */}
      <div>
      <section className=" p-12 w-[700px]  h-[300px]">
        <h1 className="text-5xl font-bold mb-4">Make The Best Financial Decisions</h1>
        <p className="text-gray-600 mb-6">Cum Et Convallis Risus Placerat Aliquam, Nunc Sociis Natoque Aliquet Faucibus Tristique Etiam Adipiscing Scelerisque.</p>
        <div className="space-x-4">
          <button className="bg-red-500 text-white hover:text-red-500 hover:bg-white hover:border border-red-500 py-2 px-4 rounded">Get Started</button>
          <button className="bg-transparent text-red-500 border border-red-500 py-2 px-4 rounded hover:text-white hover:bg-red-500">Watch Video</button>
        </div>
      </section>

      <div className=' h-[300px]'>
      <img src={img4} className='w-[500px]'></img>
    </div>
    </div>
      <div className=" hidden md:flex md:w-[540px] md:justify-center md:items-center  md:relative  md:h-[600px] ">
            <img className="w-40 sm:w-[500px] transform rotate-15 absolute z-20 right-1/4 bottom-4 " src={img1} alt="Image 1" />
            <img className="w-40 sm:w-[500px] transform rotate-15 relative z-10 " src={img2} alt="Image 2" />
            <img className="w-40 sm:w-[500px] transform rotate-15 absolute  left-4/4 " src={img3} alt="Image 3" />
          </div>
        
    </div>
   
      </div>
   </div>
  );
}

export default Front;
