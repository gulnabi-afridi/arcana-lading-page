import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import * as Icons from '../../svg/Icons';

export default function Banner() {
  return (
    <div className='bg-[#212939] py-[1rem] sm:py-[1.2rem] 3xl:px-[3rem] 3xl:py-[2rem] 4xl:py-[4rem] px-[2rem] 4xl:px-[10rem] w-full max-w-[480px] 2xl:max-w-[40%] rounded-[20px] mx-auto'>
      <div className='flex justify-center items-center gap-[12px] sm:gap-[2rem] 3xl:gap-[3rem] 4xl:gap-[6rem]'>
        <Icons.pyth className='w-[24%] 4xl:w-[40%] h-[5%] ' />
        <Icons.openBook className='w-[32%] 4xl:w-[53%] h-[5%]' />
        <Icons.phoneix className='w-[33%] 4xl:w-[50%] h-[5%]' />
      </div>
    </div>
  );
}
