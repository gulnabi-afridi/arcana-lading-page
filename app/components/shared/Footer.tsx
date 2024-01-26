import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-[#012A36] text-white 4xl:py-[250px] 3xl:py-[120px] py-[70px] 3xl:mt-[1rem] 4xl:mt-[4rem]'>
      <footer className='w-[85%] text-[16px] m-auto flex flex-col gap-[3rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
          <div className='flex flex-col gap-[1.5rem]'>
            <div className='w-[140px] 2xl:w-[190px] 3xl:w-[490px] 4xl:w-[860px] 3xl:h-[190px] 2xl:h-[90px] 4xl:h-[420px] h-[35px] relative'>
              <Image
                src='/images/logo.svg'
                className='object-fill'
                alt='logo'
                fill
              />
            </div>
            <div className='flex items-center gap-[2rem] 3xl:gap-[5rem] 4xl:gap-[7rem] ml-[10px]'>
              <FaTwitter className='text-white w-[20px] 2xl:w-[40px] 3xl:w-[60px] 4xl:w-[100px] 4xl:h-[100px] 3xl:h-[60px] 2xl:h-[40px] h-[20px]' />
              <FaFacebookF className='text-white w-[20px] 2xl:w-[40px] 3xl:w-[60px] 4xl:w-[100px] 4xl:h-[100px] 3xl:h-[60px] 2xl:h-[40px] h-[20px]' />
              <FaLinkedin className='text-white w-[20px] 2xl:w-[40px] 3xl:w-[60px] 4xl:w-[100px] 4xl:h-[100px] 3xl:h-[60px] 2xl:h-[40px] h-[20px]' />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row justify-between gap-[1em]'>
            {footer.map((item, index) => {
              return (
                <div key={index} className=''>
                  <h3 className='text-[1em] 2xl:text-[2em] 3xl:text-[3.5em] 4xl:text-[5em] font-[500] leading-[28px] text-white mb-[1em] 3xl:mb-[1em] 4xl:mb-[1.4em] opacity-50'>
                    {item.category}
                  </h3>
                  <div className='flex flex-col gap-[8px] 3xl:gap-[2em] 4xl:gap-[5.5em]'>
                    {item.list.map((ls, index) => {
                      return (
                        <Link
                          key={index}
                          href='/'
                          className='text-[1em] 2xl:text-[1.2em] 3xl:text-[2em] 4xl:text-[3.8em] font-[500] leading-[28px] text-white hover:opacity-80'
                        >
                          {ls}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col gap-[1rem]'>
          <div className='w-full h-[2px] my-[0rem] 3xl:my-[2rem] 4xl:my-[5rem] bg-white opacity-20'></div>
          <p className='text-[14px] 2xl:text-[22px] 3xl:text-[32px] 4xl:text-[50px] text-white font-[500] leading-[24px] opacity-50'>
            Arcana Labs LLC © All Rights Reserved {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

const footer = [
  {
    category: 'Company',
    list: ['About us', 'Blog', 'Media Kit', 'Careers'],
  },
  {
    category: 'Products',
    list: ['Vaults', 'Markets', 'Trading Bot', 'API'],
  },
  {
    category: 'Legal',
    list: ['Privacy Policy', 'Terms & Conditions', 'Disclaimer'],
  },
];
