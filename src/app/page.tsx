'use client';
import { FlipWords } from '@/_components/ui/flip-words';
import Image from 'next/image';
import React from 'react';
import HomeImage from '@/images/home-right.png';
import HomeComponent from '@/_components/Home/HomeComponent';

const Home = () => {
  return (
    <>
      <HomeComponent />
      {/* <div className="flex justify-around h-[50vh] ">
        <div className="flex flex-col">
          <h3 className="text-white uppercase text-[40px] font-medium">
            Hell0,
          </h3>
          <h1 className="text-white uppercase text-[70px] font-medium">
            I am Rutvik Rana
          </h1>
          <FlipWords
            words={[
              'a Full Stack Innovator.',
              'a Tech Enthusiast.',
              'a Freelancer.',
            ]}
            className="text-white text-[24px] font-medium"
          />
        </div>
        <div>
          <Image src={HomeImage} alt="Home Image" className="w-max h-auto" />
        </div>
      </div> */}
    </>
  );
};

export default Home;
