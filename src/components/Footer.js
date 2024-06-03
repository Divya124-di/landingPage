import React from 'react'
import frame from '../assests/Frame.png';
import phone from '../assests/phone.png';
import mail from '../assests/mail.png';

const Footer = () => {
  return (
    <div>
     {/* FAQ Section */}
   
     <section className=" p-12 w-10/12 mx-auto mt-20">
     <p>FAQ</p>
        <h1 className="text-4xl font-bold mb-1">Frequently Asked </h1>
        <h1 className='text-4xl font-bold mb-6'>Questions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8   mx-auto">
          <div className=' bg-[#FF5555] text-white  p-4 rounded-lg hover:scale-105 duration-300'>
            <h3 className="text-2xl font-bold mb-2">The Best Financial Accounting App Ever!</h3>
            <p className="">Arcu At Dictum Sapien Mollis Vulputate Sit Accumsan Ultricies, Urna Bibendum Duis Ullamcorper.</p>
          </div>
          <div className='p-4 bg-[#FF5555] text-white p-4 rounded-lg hover:scale-105 duration-300   mb-2 md:bg-transparent md:border border-black'>
            <h3 className=" text-2xl font-bold mb-2 md:text-black ">The Best Financial Accounting App Ever!</h3>
            <p className="md:text-gray-600">Arcu At Dictum Sapien Mollis Vulputate Sit Accumsan Ultricies, Urna Bibendum Duis Ullamcorper.</p>
          </div>
          <div className='p-4 bg-[#FF5555] text-white p-4 rounded-lg hover:scale-105 duration-300   mb-2 md:bg-transparent md:border border-black '>
            <h3 className=" text-2xl font-bold mb-2 md:text-black ">The Best Financial Accounting App Ever!</h3>
            <p className="md:text-gray-600">Arcu At Dictum Sapien Mollis Vulputate Sit Accumsan Ultricies, Urna Bibendum Duis Ullamcorper.</p>
          </div>
          <div className=' bg-[#FF5555] text-white  p-4 rounded-lg hover:scale-105 duration-300'>
            <h3 className="text-2xl font-bold mb-2">The Best Financial Accounting App Ever!</h3>
            <p className="">Arcu At Dictum Sapien Mollis Vulputate Sit Accumsan Ultricies, Urna Bibendum Duis Ullamcorper.</p>
          </div>
         
          <div className=' bg-[#FF5555] text-white  p-4 rounded-lg hover:scale-105 duration-300'>
            <h3 className="text-2xl font-bold mb-2">The Best Financial Accounting App Ever!</h3>
            <p className="">Arcu At Dictum Sapien Mollis Vulputate Sit Accumsan Ultricies, Urna Bibendum Duis Ullamcorper.</p>
          </div>
          <div className='p-4 bg-[#FF5555] text-white p-4 rounded-lg hover:scale-105 duration-300   mb-2 md:bg-transparent md:border border-black'>
            <h3 className=" text-2xl font-bold mb-2 md:text-black ">The Best Financial Accounting App Ever!</h3>
            <p className="md:text-gray-600">Arcu At Dictum Sapien Mollis Vulputate Sit Accumsan Ultricies, Urna Bibendum Duis Ullamcorper.</p>
          </div>
        
        </div>
      </section>
     



     <div className=' w-[400px] h-[308px] md:w-[990px] md:h-[508px] mx-auto mt-[100px] mb-[70px]'>
        <img className='' src={frame}></img>
     </div>


             {/* Footer */}

             <div className=' w-[400px] md:w-[840px] mx-auto   flex justify-between mb-[80px]  '>
                <div className=''>
                <h1 className=' text-2xl font-bold md:text-3xl mb-3'>🔥Uifry</h1>
                <div className='flex mb-3'>
                    <img className='mx-2' src={mail}></img>
                <a className='text-sm md:text-lg hover:text-[#FF5555] cursor-pointer'>Help@Frybix.com</a>
                </div>
                <div className='flex mb-3'>
                    <img className='mx-2' src={phone}></img>
                    <a className='text-sm md:text-lg hover:text-[#FF5555] cursor-pointer'>+1234567890</a>
                </div>
               
                </div>
                <div>
                <h1 className=' text-xl font-semibold md:text-2xl mb-2'>Links</h1> 
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Home</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>About Us</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Bookings</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Blog</p>
                </div>
               
                <div>
                <h1 className='text-xl font-semibold md:text-2xl mb-2'>Legal</h1>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Terms Of Use</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Privacy Policy</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Cookie Policy</p>
                    </div>
              
                <div>
                <h1 className='text-xl font-semibold md:text-2xl mb-2'>Product</h1>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Take Tour</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Live Chat</p>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Reviews</p>
                    </div>
               
                <div>
                <h1 className='text-xl font-semibold md:text-2xl mb-2 mr-1'>Newsletter</h1>
                <p className='text-sm md:text-lg mb-3 hover:text-[#FF5555] cursor-pointer'>Stay Up To Date</p>
                    </div>
               
             </div>
             <footer className=" bg-gray-900 text-gray-400 p-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">🔥Uifry</div>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-white">Terms of Use</a>
            <a href="#about" className="hover:text-white">Privacy Policy</a>
            <a href="#pricing" className="hover:text-white">Cookie Policy</a>
          </nav>
          <p>© 2022 Uifry.com All Rights Reserved</p>
        </div>
      </footer>
</div>
  )
}

export default Footer;