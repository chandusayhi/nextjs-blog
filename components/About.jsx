import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-b from-slate-900 to-blue-500'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest font-bold  text-[#eaeaf1]'>
            About
          </p>
          <h2 className='py-4  text-cyan-500'>Who I Am</h2>
          <p className='py-2 text-white'>
          Driven and accomplished Assistant Professor with 14 years of dedicated experience 
          in undergraduate education. Adept at fostering engaging learning environments, 
          delivering dynamic lectures, and guiding students toward academic excellence. 
          Demonstrated expertise in curriculum development. 
          Committed to nurturing the intellectual growth and professional development 
          of students while contributing to the advancement of knowledge in the academic community. 
          Proven track record of mentorship, leadership, and collaboration, 
          seeking to inspire the next generation of scholars and educators."
          </p>
          <p className='py-2 text-white'>
          Experienced Assistant Professor specializing in Computer Science and Engineering, 
          with a proficiency in website development using the MERN stack, 
          expertise in DevOps methodologies, and a 
          deep understanding of blockchain technology.
          Leveraging 14 years of hands-on experience in academia and industry,
          I am dedicated to preparing students for the rapidly evolving landscape of technology. 
          My passion lies in cultivating innovative learning environments that blend theory with 
          practical application, equipping students with the skills and knowledge needed to excel
          in today's digital era. With a focus on collaborative learning and interdisciplinary 
          exploration, I am committed to inspiring the next generation of developers, engineers, and technologists. 
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-white underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-white rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
