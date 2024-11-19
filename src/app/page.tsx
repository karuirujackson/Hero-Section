import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo - Only Icon (Yellow).svg';
import MenuBtn from '../assets/Menu button.svg';
import Badge from '../assets/Badge.svg';
import ChevronRight from '../assets/Chevron right.svg';
import Logos from '../assets/Logos.svg';

const page = () => {
  return (
    <div className="bg-[#0A6847] h-screen">
      <div className="relative top-6 mx-5">
        <nav className="flex items-center justify-between space-x-44">
          <div className="text-yellow-500">
            <Image src={Logo} alt="" />
          </div>
          <div className="text-white">
            <Image src={MenuBtn} alt='' />
          </div>
        </nav>
        <section className="flex-col space-y-4 mt-10">
          <div className="">
            <div className="flex">
              <button className="flex items-center justify-center space-x-4 mx-5 py-1 rounded-full bg-[#064E3B]">
                <Image className='ml-1' src={Badge} alt='' />
                <div className="flex gap-2">
                  <span className="text-white font-light">Visit our sample creator page</span>
                  <Image className='mr-2' src={ChevronRight} alt='chevron-right' />
                </div>
              </button>
            </div>
            <div className="mx-5 space-y-4 mb-10">
              <h2 className="text-4xl text-white tracking-tight font-extrabold leading-10">
                Invite your fans to <br /> <span className="text-yellow-400">cook along with you</span>
              </h2>
              <p className="text-[#E5E7EB] font-normal text-base leading-6">
                Cook with your followers using Along With! We provide the ingrdients in the exact quantities specified in your recipes for an interactive cooking experience. Make cooking fun & interactive for your fans with Along With.
              </p>
            </div>
          </div>
          <div className="mx-5 space-y-4">
            <div className="text-white">
              <h3 className="text-sm leading-5 font-semibold tracking-wide uppercase">Reach your audience on all platforms</h3>
            </div>
            <div className="flex">
              <Image src={Logos} alt='social-icons' />
            </div>
          </div>
        </section>
      </div>
      <section className="flex-col mt-10 h-48">
        <form action="" className='bg-white p-4'>
          <div className="">
            <h3 className="text-sm leading-5 font-medium">Schedule a call with us</h3>
          </div>
          <input type="text" className='border rounded-md mt-6 px-3 py-2 w-96 shadow-sm' placeholder='Social media profile link' />
          <input type="text" className='border rounded-md mt-6 px-3 py-2 w-96 shadow-sm' placeholder='Full name' />
          <input type="text" className='border rounded-md mt-6 px-3 py-2 w-96 shadow-sm' placeholder='Email address' />
          <input type="text" className='border rounded-md mt-6 px-3 py-2 w-96 shadow-sm' placeholder='Mobile number' />
          <button className="border rounded-md mt-6 px-4 py-2 w-96 shadow-sm bg-[#F3CA52]">Talk to us!</button>
          <div className="bg-[#E5E7EB] mt-8 h-0.5 w-96 "></div>
          <div className="mt-7 p-4">
            <p className="text-gray-400 text-sm leading-5 font-normal">
              By signing up, you agree to our <span className='text-black font-medium'>Terms, Data Policy</span>  and <span className='text-black font-medium'>Cookies Policy.</span>
            </p>
          </div>
        </form>
      </section>
    </div>
  )
}

export default page;