'use client';

import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import Drawer from './Drawer';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Wrapper style='bg-transperent py-[25px] w-full sm:py-[40px] absolute top-0'>
      <header className='w-full'>
        {drawer && (
          <RxCross2
            className='text-white w-[30px] h-[30px] absolute top-[2rem] left-[1rem] z-20 cursor-pointer sm:hidden'
            onClick={handleDrawer}
          />
        )}
        <div className='flex m-auto items-center 4xl:-ml-[26rem] gap-0 4xl:gap-48 justify-between max-w-[522px] 2xl:max-w-[1000px] 3xl:max-w-[1800px] 4xl:max-w-[1400px]'>
          {header.map((item, index) => {
            return (
              <>
                {index === 2 ? (
                  <Link href='/'>
                    <div className='w-[140px] 4xl:w-[500px] 4xl:h-[200px] 2xl:w-[210px] 3xl:w-[300px] 2xl:h-[85px] 3xl:h-[150px] h-[35px] relative'>
                      <Image
                        src={item.name}
                        fill
                        className='object-fill'
                        alt='logo'
                      />
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={item.path}
                    className='text-[16px] 2xl:text-[28px] 3xl:text-[45px] 4xl:text-[70px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer relative after:absolute after:w-0 after:bottom-0 4xl:after:-bottom-10 after:left-0 after:h-[2px] after:bg-white hover:after:w-full after:duration-200'
                  >
                    {item.name}
                  </Link>
                )}
              </>
            );
          })}
          {!drawer && (
            <GiHamburgerMenu
              className='text-white w-[30px] h-[30px] cursor-pointer sm:hidden'
              onClick={handleDrawer}
            />
          )}
        </div>
        {drawer && <Drawer />}
      </header>
    </Wrapper>
  );
}

const header = [
  {
    path: '/',
    name: 'Markets',
  },
  {
    path: '/',
    name: 'Vaults',
  },
  {
    path: '/',
    name: '/images/logo.svg',
  },
  {
    path: '/',
    name: 'Tools',
  },
  {
    path: '/',
    name: 'Docs',
  },
];
