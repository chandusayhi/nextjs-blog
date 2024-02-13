import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full bg-gradient-to-b from-slate-900 to-blue-500'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest font-bold uppercase text-[#ececf0]'>
          Subjects Handled
        </p>
        <h2 className='py-4 text-cyan-500'>What I&apos;ve Taught</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Database Management System'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='21CS53'
          />
          <ProjectItem
            title='BigData Analytics'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='18CS72'

          />
          {/* <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
