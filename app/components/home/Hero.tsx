'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // functions for calculating the image dimension

  const calculateImageDimensions = (baseWidth: number, baseHeight: number) => {
    if (windowWidth > 1300) {
      const scale = windowWidth / 1300;
      return { width: baseWidth * scale, height: baseHeight * scale };
    } else if (windowWidth <= 1150) {
      // Slightly reduce the dimensions for screens smaller than 1050px
      const scale = 0.7; // For example, reduce by 10%
      return { width: baseWidth * scale, height: baseHeight * scale };
    }
    return { width: baseWidth, height: baseHeight };
  };

  const leftImageDimensions = calculateImageDimensions(230, 450);
  const rightImageDimensions = calculateImageDimensions(250, 500);

  return (
    <div
      className='h-[100vh] flex flex-col justify-center items-center'
      style={{
        background:
          'conic-gradient(from -45deg at 50% 50%, rgba(18, 121, 163, 0.2) 0deg, rgba(18, 121, 163, 0.3) 46.3deg, rgba(80, 153, 204, 0.12) 360deg)',
      }}
    >
      <div className='max-w-[1300px] 2xl:max-w-[1200px] 3xl:max-w-[1800px] 4xl:max-w-[2100px] 5xl:max-w-[2800px] m-auto px-4 md:px-8'>
        <div className='absolute top-0 left-0 z-10 hidden lg:block'>
          <Image
            src='/images/heroleft.png'
            width={leftImageDimensions.width}
            height={leftImageDimensions.height}
            alt=''
            className=''
          />
        </div>
        <div className='text-white flex flex-col justify-center items-center gap-[1rem] lg:w-[70%] 2xl:w-[100%] mx-auto'>
          <h1 className='font-popins text-center text-[40px] lg:text-[64px] xl:text-[64px] 2xl:text-[80x] 3xl:text-[130px] 4xl:text-[150px] 5xl:text-[250px] font-[600] leading-[50px] lg:leading-[80px] 2xl:leading-[5rem] 3xl:leading-[11rem] 4xl:leading-[14rem] 5xl:leading-[22rem] bg-gradient-to-r from-white via-white to-[#99BEE5] bg-clip-text text-transparent'>
            Intelligent DeFi Liqudity. Tailored for Solana.
          </h1>
          <p className='text-[18px] md:text-[24px] 1xl:text-[30px] 2xl:text-[31px] 3xl:text-[50px] 4xl:text-[85px] font-[500] leading-[28px] md:leading-[36px] 2xl:leading-[45px] 3xl:leading-[65px] 4xl:leading-[110px] text-center lg:w-[60%]'>
            Grow, manage, and sustain your crypto assets using our tools.
          </p>
          <div className='mt-[1rem] 3xl:mt-[2rem] 4xl:mt-[4rem] flex items-center gap-[1rem] 3xl:gap-[2rem] 4xl:gap-[3rem]'>
            <button className='w-fit hover:opacity-80 active:translate-y-[2px] py-[10px] 3xl:py-[16px] 4xl:py-[22px] px-[16px] 3xl:px-[52px] 4xl:px-[90px] rounded-[12px] text-[16px] 2xl:text-[30px] 3xl:text-[50px] 4xl:text-[90px] font-[500] bg-[#5099CC] text-white'>
              Launch App
            </button>
            <button className='w-fit hover:opacity-80 active:translate-y-[2px] py-[10px] 3xl:py-[16px] 4xl:py-[22px] px-[16px] 3xl:px-[52px] 4xl:px-[90px] rounded-[12px] text-[16px] 2xl:text-[30px] 3xl:text-[50px] 4xl:text-[90px] font-[500] bg-[#012A36] text-white'>
              Read Docs
            </button>
          </div>
        </div>
        <div className='absolute top-0 right-0 z-10 hidden lg:block'>
          <Image
            src='/images/heroright.png'
            width={rightImageDimensions.width}
            height={rightImageDimensions.height}
            alt=''
            className=''
          />
        </div>
      </div>
    </div>
  );
}
