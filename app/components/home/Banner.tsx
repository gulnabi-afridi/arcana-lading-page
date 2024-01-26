import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import * as Icons from '../../svg/Icons';

export default function Banner() {
  return (
    <Wrapper style='bg-[#212939] py-[1rem] sm:py-[1.2rem] 3xl:py-[2rem] 4xl:py-[4rem] px-[5px] w-full max-w-[480px] 2xl:max-w-[35%] rounded-[20px] mx-auto'>
      <div className='flex justify-center items-center gap-[12px sm:gap-[2rem] 3xl:gap-[3rem] 4xl:gap-[5rem]'>
        <Icons.pyth className='w-[24%] 4xl:w-[38%]  h-[5%] ' />
        <Icons.openBook className='w-[30%] 4xl:w-[48%] h-[5%]' />
        <Icons.phoneix className='w-[33%] 4xl:w-[50%] h-[5%]' />
      </div>
    </Wrapper>
  );
}
