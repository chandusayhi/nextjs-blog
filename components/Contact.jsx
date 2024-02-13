import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-gradient-to-b from-slate-900 to-blue-500'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl font-bold tracking-widest uppercase text-[rgb(249,249,250)]'>
          Contact
        </p>
        <h2 className='py-4 text-cyan-500'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full bg-orange-200 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 text-white'>Chandrakant Hatti</h2>
                <p className='font-bold text-cyan-500'>Assistant Professor</p>
                <p className='py-4 font-bold text-cyan-500'>
                  Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 font-bold text-white'>Connect With Me</p>
                <div className='flex items-center justify-between py-4 '>
                  <a
                    href='https://www.linkedin.com/in/chandrakant-hatti-654219115/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-l from-teal-600 to-gray-50'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/chandusayhi'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-l from-teal-600 to-gray-50'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-l from-teal-600 to-gray-50'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-l from-teal-600 to-gray-50'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl  bg-orange-200 shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-white font-bold text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-white font-bold'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-white font-bold'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-white font-bold'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-white font-bold'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 font-bold mt-4 bg-gradient-to-l from-teal-600 to-gray-50'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg bg-gradient-to-l from-teal-600 to-gray-50 shadow-lime-200 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#e1dfeb]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
