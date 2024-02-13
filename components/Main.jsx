import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-gradient-to-b from-slate-900 to-blue-500' >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-50'>
            EMPOWERING MINDS, SHAPING FUTURES          </p>
          <h1 className='py-4 text-cyan-500'>
            Hello, I&#39;m <span className='text-[#e7e7ef]'> Chandrakant Hatti</span>
          </h1>
          <h1 className='py-2 text-cyan-500'>Assistant Professor from 2011</h1>
          <p className='py-4 text-cyan-400 sm:max-w-[70%] m-auto'>
            Computer Science Engineering Branch in Tontadarya College of Engineering, Gadag
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/chandrakant-hatti-654219115/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/chandusayhi'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://twitter.com/CHANDRA02648930'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTwitter/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail/>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
