import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Chandrakant | Resume</title>
        <meta
          name='description'
          content='I’m a Assistant Professor.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Chandrakant Hatti</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/chandrakant-hatti-654219115/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/chandusayhi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            Accomplished scholar <span className='px-1'>|</span> Experienced faculty{' '}
              <span className='px-1'>|</span> Industry Interested
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Accomplished scholar </p>
            <p className='py-2'>Experienced faculty</p>
            <p>Industry Interested</p>
          </div>
        </div>
        <p>
        Dedicated and dynamic educator aspiring to secure a challenging position as a assistant professor, 
        where I can apply my outstanding teaching abilities to inspire and guide students in core subjects. 
        I bring a well-established history of professional development and a fervent dedication
        to creating an engaging and enriching learning atmosphere. With a decade of expertise as assistant professor 
        specializing in computer science and engineering, I am actively pursuing a challenging role in a 
        forward-thinking academic environment.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>AWS
            <span className='px-2'>|</span> GIT
            <span className='px-2'>|</span>GITHUB
            <span className='px-2'>|</span>JENKINS
            <span className='px-2'>|</span>DOCKER
            <span className='px-2'>|</span>KUBERNETES
            <span className='px-2'>|</span>SONARCUBE
            <span className='px-2'>|</span>ANSIBLE
            <span className='px-2'>|</span>SOLIDITY
            <span className='px-2'>|</span>TRUFFLE
            <span className='px-2'>|</span>METAMASK
            <span className='px-2'>|</span> REMIXIDE
            <span className='px-2'>|</span> GANACHE
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> JAVASCRIPT
            <span className='px-2'>|</span> REACT
            <span className='px-2'>|</span> TAILWIND
            <span className='px-2'>|</span> FIREBASE
            <span className='px-2'>|</span> NEXT JS
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            TONTADARYA COLLEGE OF ENGINEERING
            </span>
            <span className='px-2'>|</span>GADAG,
          </p>
          <p className='py-1 italic'>Assistant Professor (2011 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Contributing 100% to the accreditation of the subjects that I teach.
            </li>
            <li>
            Excellent presentation and communication skills.
            </li>
            <li>
            Collaborate with colleagues on projects, fostering a culture of innovation and 
            collaboration within the department.
            </li>
            <li>
            Teach undergraduate courses in Computer Science and Engineering, 
            consistently receiving positive evaluations from students.
            </li>
          </ul>
        </div>

        
        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Sri Taralabalu Jagadguru Institute of Technology
            </span>
            <span className='px-2'>|</span>Ranebennur,
          </p>
          <p className='py-1 italic'>Lecturer (2010 - 2011)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            A quick learner with analytical skills and strong decision making skills.
            </li>
            <li>
            Excellent communicator and an effective team player..
            </li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            UBDT Institute of Technology
            </span>
            <span className='px-2'>|</span>Davangere,
          </p>
          <p className='py-1 italic'>Master of Technology (August 2009 - September 2011)</p>
          <p className='italic'>
            <span className='font-bold italic'>
            SJMIT Institute of Technology
            </span>
            <span className='px-2'>|</span>Chitradurga,
          </p>
          <p className='py-1 italic'>Bachelor of Engineering (August 2004 - June 2008)</p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        WORKSHOPS/ FDP’s ATTENDED
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Workshop attended from <b>17th to 18th September 2010 </b> at STJIT, Ranebennur on <b>“Artificial Neural Networks and its Applications”</b>.
            </li>
            <li>
            Workshop attended from <b>19th APR to 24th APR 2021</b> at REC, Hulkoti on <b>“Mobile Application Development”</b>.
            </li>
            <li>
            Participated in 30 hours Training program on <b>Advanced Excel, Power BI and Tableau</b> held from <b>3rd Oct 2023 to 21st Oct 2023</b>.
            </li>
            <li>
            Participated in 10 hours International Faculty Development program on <b>Applications of Business Analytics</b> held from <b>9th Oct 2023 to 13th Oct 2023</b>.
            </li>
            <li>
            Participated in 30 hours National Faculty Development program on <b>Cyber Security</b> held from <b>25th Sep 2023 to 14th Oct 2023</b>.
            </li>
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        RESOURCE PERSON
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Resource person in one day value added workshop on <b>“C# & .NET”</b> on <b>30/08/2019</b> at <b>Tontadarya College of Engineering, Gadag</b>.
            </li>
            <li>
            Resource person in one day value added workshop on <b>“Basics of DBMS”</b> on <b>29/01/2020</b> at <b>Government High School, Naragund.</b>.
            </li>
            <li>
            Resource person in Two days value added workshop on <b>“C# & .NET”</b> on <b>21st and 22nd OCT 2020</b> at <b>Tontadarya College of Engineering, Gadag</b>.
            </li>
            <li>
            Resource person in one day value added workshop on <b>“EasyPHP”</b> on <b>25th NOV 2022</b> at <b>Tontadarya College of Engineering, Gadag</b>.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Professional Synopsis
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Department Level Coordinator for NBA Activities & NBA Student
            Performance criteria, involved in getting NBA in the Department of CSE.
            </li>
            <li>
            Department Level Coordinator for NAAC Activities & NAAC Report (SAR)
            Preparation, involved in getting NAAC in the Department of CSE.
            </li>
            <li>
            Project Coordinator of CSE department.
            </li>
            <li>
            Department Level Coordinator for Placement for last 6 years.
            Spearheaded the coordination of student placements within the
            department, ensuring seamless integration of academic knowledge into
            real-world experiences. Provided guidance and support to students
            throughout the placement process, addressing inquiries and assisting in
            the preparation of resumes and interviews
            </li>
            <li>
            Faculty Coordinator for 8 hours TCE Hackathon 2022 organized by
            TCE Engineering College, Gadag on 7
            th June 2022.
            </li>
            <li>
            Department Level Coordinator for Magazine for the three academic
            years 2020. 2021, 2022 with the name of the magazine “ByteTech”.
            </li>
            <li>
            Involved in Mentor and Counseling System at TCE College.
            </li>
            <li>
            Faculty Coordinator for 24-HOURS NATIONAL LEVEL “TCE -
            HACKATHON - 2023” On March 24th and 25th
            , 2023.

            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
