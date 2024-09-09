import Image from "next/image"
import  img1 from "../../../public/img1.jpeg"
import  img2 from "../../../public/img2.jpg"
import  img3 from "../../../public/img3.jpg"
import  img4 from "../../../public/img4.jpeg"
import  imgUpd from "../../../public/imgUpd.jpeg"

export default function HeroSubSection ( ) {
    return( 
        <div>
      <div className="flex justify-center relative bottom-12 ">
          <div className="sm:hidden w-4/5 flex justify-evenly items-center border border-20px-black rounded-3xl shadow-xl  hover:shadow-2xl shadow-dark-300 m-4 p-1 ">
            <div className=" sm:hidden flex  flex-col items-center pb-3">
         <Image className="bg-cover" width={150} height={100}   src = {img1} alt= "img"/>
         <span className="block text-2xl font-bold">Travel</span>
         <span className="block text-2xl -mt-2 font-bold">Itinerary</span>
           
        
            </div>

            <div>
            <div className="h-24 w-px bg-black sm:hidden"></div>
            </div>

            <div className=" sm:hidden flex items-center flex-col pb-3 ">
            <Image   width={230} height={360}    src ={img2} alt= "img"/>
    
        <span className="block text-2xl font-bold">Coustom</span>
        <span className="block text-2xl -mt-2 font-bold">Merchendies</span>
            </div>

            <div>
            <div className="h-24 w-px bg-black  sm:hidden"></div>
            </div>
            <div className="flex  items-center flex-col pb-4 sm:hidden">
 <Image    width={160} height={120}   src ={img3} alt= "img"/>
    
        <span className="block text-2xl font-bold relative top-3">Digital</span>
        <span className="block text-2xl -mt-2 font-bold relative top-4">Content</span>
        
            </div>


            <div>        
                 <div className="h-24 w-px bg-black  sm:hidden"></div></div>

                 <div className="flex  items-center flex-col pb-5  sm:hidden">
            <Image   width={170} height={70}     src ={img4} alt= "img"/>
      
        <span className="block text-2xl font-bold relative bottom-2">Fashion</span>
        <span className="block text-2xl -mt-2 font-bold relative bottom-2">Brand</span>
            </div>

            </div>

       </div>


















<div className="flex justify-center relative bottom-12">



       <div className="lg:hidden relative  z-40 flex flex-col w-4/5  items-center m-5 p-8 gap-1 border border-10px-black rounded-3xl  shadow-2xl shadow-dark-300   ">



       <div className="lg:hidden flex justify-between gap-4 pl-2">


           <div className="flex flex-col items-center">
               <Image className=" lg:hidden bg-cover" width={80} height={80}   src = {img1} alt= "img"/>
           
                  
        <span className="block text-md font-bold">Travel</span>
        <span className="block text-md -mt-2 font-bold">Itinerary</span>
                 
                 </div>


     
                 <div className="flex flex-col relative bottom-2 items-center">
           <Image   width={140} height={120}    src ={img2} alt= "img"/>

            
        <span className="block text-md font-bold">Coustom</span>
        <span className="block text-md -mt-2 font-bold">Merchen</span>
       
           </div>


       
       </div>
       
       
       <div className=" lg:hidden flex gap-2 justify-between relative right-2">


       <div className="flex flex-col items-center ">
       <Image    width={120} height={180}  className="bg-transparent"   src ={img3} alt= "img"/>

        
       <span className="block text-md font-bold">Digital</span>
        <span className="block text-md -mt-2 font-bold">Content</span>
       </div>
       




       <div className="flex flex-col  items-center">
       <Image   width={120} height={140}       src ={imgUpd} alt= "img"/>
   
        
       <span className="block text-md font-bold">Fashion</span>
        <span className="block text-md -mt-2 font-bold">Brand</span>
       
       </div>

       </div>
       
</div>
       </div>
  </div>
    )
}