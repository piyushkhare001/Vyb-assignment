'use client'
import { FaArrowLeft  } from "react-icons/fa";
import { FaArrowRight  } from "react-icons/fa";

import Image from "next/image"
import delhi from  '../../../public/delhi.jpeg'
import mumbai from '../../../public/mumbai.jpeg'





export default  function Section2 (){
    

    
    return (
      <div className="relative  sm:h-[20rem] w-full lg:h-[34rem] flex items-center p-10  z-20  bg-green-50 rounded-lg overflow-hidden border border-dark-800">
        <div className="flex transition-transform duration-500 " >
          
            <div  className="w-full flex-shrink-0 lg:m-10   ">
          <div className="flex   justify-between lg:p-4 lg:pr-14 sm:gap-20 lg:pb-24">
        <div className="text-3xl sm:text-base font-extrabold font-mono"> Product </div>
        
        <div className="flex items-center sm:gap-2  justify-between lg:gap-6">
        <button className="bg-transparent sm:h-18 sm:w-16 sm:text-xs font-serif text-center flex gap-2 hover:bg-black text-black font-semibold hover:text-white lg:py-2 lg:px-4 border border-black-500 hover:border-transparent rounded">
 {` Itinerary >`}
</button>
<button className="bg-green-900 text-white font-serif lg:py-2 sm:h-10 sm:w-16 sm:text-xs  lg:px-4 border border-green-700 rounded">
Demo Store
</button>
        </div>
          </div>
         <main className=" flex lg:pl-8 lg:justify-between    relative  lg:w-4/5 lg:m-4">
             <div  className=" flex flex-col justify-around sm:mt-10 lg:pl-10 lg:pb-8 sm:w-2/5 lg:w-3/5"> 
                 
                    <div className="text-3xl sm:text-xl font-extrabold font-mono"> Delhi Itinerary </div>
                   <p className="font-sans sm:hidden text-dark-200 ">velit vitae ipsum incidunt, tenetur expedita voluptatibus consequuntur reiciendis repellendus nostrum eligendi et corrupti consequatur pariatur vel quia amet doloribus voluptate quam iste officiis similique veritatis. Officiis!</p>
                   <p className="font-sans text-xs lg:hidden text-dark-200 ">velit vitae ipsum incidunt </p>
 
                     <div className=" flex sm:gap-2 lg:gap-6 pt-16 ">
                     <button className="bg-transparent flex sm:p-2 sm:items-center lg:gap-2 sm:h-10 sm:w-20 sm:text-xs   text-green-900 font-semibold  lg:py-2 lg:px-4 border border-green-900 rounded">
   Rs.350
</button>
<button className="bg-green-900 sm:h-10 sm:p-2  sm:w-20 sm:text-xs text-white font-bold lg:py-2 lg:px-4 border border-green-700 rounded">
 More
</button> </div>

             </div>
             
  <Image src={delhi} alt="Slide" className="lg:w-64 lg:h-44  sm:h-16 sm:w-24 absolute z-40 object-cover rounded-2xl  lg:bottom-0 lg:top-16 sm:left-[10rem] sm:top-24  lg:right-20 " />
  <Image src={mumbai} alt="Slide" className="lg:w-56 lg:h-56 sm:h-20 sm:w-24 absolute z-30 object-cover rounded-2xl lg:bottom-0 lg:top-0 sm:left-[12rem]  sm:top-16  lg:right-0 " />

            
            </main>
            </div>
          
        </div>
  
        <button  className="absolute top-1/2 lg:left-8 sm:left-1 transform lg:h-16 lg:w-16 rounded-full flex justify-center items-center -translate-y-1/2 p-2 bg-gray-800 text-white ">
         <FaArrowLeft className="lg:text-3xl sm:text-xs"/>
        </button>
        
        <button  className="absolute top-1/2 lg:right-8 sm:right-1 lg:h-16 lg:w-16 transform -translate-y-1/2 p-2 flex justify-center items-center bg-gray-800 text-white rounded-full">
    <FaArrowRight className="lg:text-3xl sm:text-xs" />
        </button>
      </div>
    );
  }