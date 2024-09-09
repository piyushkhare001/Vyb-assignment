
'use client'


import Image from "next/image"
import star from '../../../public/start.jpeg'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import icon from '../../../public/icon.gif'

import * as React from 'react';

import { IoCartOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegAddressCard } from "react-icons/fa6";
import Link from 'next/link'
import {  useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { IoStorefrontOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
export  default function Navbar () {
const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  




    return (
      <div>
        
        <main className='flex justify-center '>
           <div className="  z-30 flex items-center p-2 lg:justify-between sm:justify-between mt-3  fixed bg-zinc-200
            backdrop-filter backdrop-blur-lg bg-opacity-30  w-[80%] rounded-3xl ">

          <div>
        <Image
        src={icon}
        alt="My GIF"
        width={75}
        height={40}
        priority={true}  // Ensures the GIF loads quickly for LCP
      />
         </div>

          <div className='flex items-center p-2 gap-3 border sm:w-24 border-slate-950 w-[20%] rounded-3xl '>
          <CiSearch/> search
          </div>


          <div className='flex gap-10 sm:hidden'>
            <p className ='flex gap-1 items-center sm:hidden ' >
            <IoCartOutline/> cart
            </p>
            <p className ='flex gap-1 items-center sm:hidden'>
            <IoInformationCircleOutline/> about
            </p>
            <p className ='flex gap-1 items-center sm:hidden'>
            <IoIosContact/> contact
            </p>
          </div>


          <div className='sm:hidden'> 
          <Dropdown>
  <MenuButton  className ='flex gap-3 items-center'>
    <CgProfile size={20}/> 
    <IoIosArrowDropdown size={20}/>
  </MenuButton>
  <Menu>
   <Link href='/Profile'> <MenuItem > Profile </MenuItem></Link>
   <Link href='/Sign-up'><MenuItem > Sign-up </MenuItem></Link> 
  </Menu>
</Dropdown>
          </div>


 <div className='lg:hidden'>
  <RxHamburgerMenu size={25} onClick={handleToggle}
  />
 
 
     
 </div>
 <div>
  {/* {
    open ? (<>
    
    <div className='h-auto w-[64rem] bg-zinc-200 absolute z-90 pt-14  pb-14 pl-4
            backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-md '>
    <p>Profile </p>
    <p>Store Info </p>
    <p>Earning </p>
    <p> address</p>
    <p> About us</p>
    <p> Contact us</p>
    <div className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"> Login </div>
    </div>
    
    </>) : (<></>)
  } */}
</div>
           </div>  
           
           <Transition
        show={isOpen}
        enter="transition-transform ease-in-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      ><div className='flex  justify-self-end w-[6rem]'>
        <div
          ref={drawerRef}
          className=" h-[50rem]  justify-center pt-5 pb-5 fixed flex p-6 flex-col gap-8 rounded-lg  bg-zinc-200 backdrop-filter backdrop-blur-3xl bg-opacity-5 shadow-lg text-white  z-50"
        >
        
           
                 <div className='flex  flex-col gap-1 items-start'>
                  <div ><Image alt = 'img' src = {star} height={100}  className="rounded-full border aspect-square   text-center border-black "/></div>
                 <p className='text-black font-sans text-2xl'>testing username</p>  
                 <p className='font-sans text-xl text-black'> @UserName </p>
                 </div>
                   <div onClick={ () => {router.push('/Profile')}} className={`text-black text-2xl flex items-center gap-3 cursor-pointer`} > <CgProfile />  Profile</div>
                   <div onClick={ () => {router.push('/Store')}} className={'text-black text-2xl flex items-center gap-3 cursor-pointer'}> <IoStorefrontOutline /> Mystore</div>
                   <div onClick={ () => {router.push('/Earning')}}  className={'text-black text-2xl flex items-center gap-3 cursor-pointer'}> <RiMoneyRupeeCircleFill /> Earning</div>
                   <div onClick={ () => {router.push('/Address')}}  className={'text-black text-2xl flex items-center gap-3 cursor-pointer'}> <FaRegAddressCard />
                   Address</div>

                   <div onClick={ () => {router.push('/')}} className={'text-black text-2xl flex items-center gap-3 cursor-pointer'}> 
                   <IoIosInformationCircleOutline /> About us</div>
                   <div onClick={ () => {router.push('/')}} className={'text-black text-2xl flex items-center gap-3 cursor-pointer'}> 
                   <IoMdContact /> Contact us</div>
                   <div onClick={ () => {router.push('/Log-in')}} className=" flex gap-2 w-24  bg-green-950 text-xl font-sans  text-white font-semibold text-center hover:text-white p-2 items-center justify-center border border-black-500 hover:border-transparent rounded-2xl"> logIn</div>
                   
                   </div>      
            

        </div>
      </Transition>

           </main>
           
           </div>)
}




