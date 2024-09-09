'use client'
import { useState } from 'react';

export default function Section3() {
    const [value, setValue] = useState(5000); // Initial slider value set to 50
    const [value2, setValue2] = useState(50000);
    const handleChange = (e :  any) => {
      setValue(e.target.value); // Update the value on change
    };
    const handleChange2 = (e :  any) => {
        setValue2(e.target.value); // Update the value on change
      };
 
    return (
 
        
      <div className='z-20 w-full h-auto bg-blue-50 flex flex-col gap-8 p-4 items-center '>  
            <h1 className='font-bold  text-2xl text-center'> ESTIMATE EARNING POTENTIAL </h1>
            
            <div className = ' flex lg:pr-96  flex-col gap-3'>
                
                <label htmlFor="options" className="text-lg font-medium text-gray-700 mb-2">
                Whick type of infulencer you are ?
  </label>
  <select
    id="options"
    className="lg:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
  >
    <option value="">Select infulencer type...</option>
    <option value="option1">youtuber</option>
    <option value="option2">instagram</option>
    <option value="option3">twiter</option>
    <option value="option4"> snapchat</option>
  </select>

              </div>

            <div className=' flex flex-col  sm:flex-col  justify-betwwen pt-8 sm:gap-6 lg:gap-36 items-center'>
              <div className='flex sm:flex-col lg:gap-56'> 
                <div  className='flex  flex-col   items-center'>
                 
                    <p  className='font-serif text-xl '
                    > How many followers do you have ? </p>
                    <div className="w-full max-w-lg mx-auto py-8">

             
                    <input type="range" min="500" value={value}   className='  w-64' onChange={handleChange} max="10000" step="1"    style={{
            accentColor: 'green',
            background: 'linear-gradient(to right, #22c55e 0%, #22c55e ' + value + '%, #e5e7eb ' + value + '%, #e5e7eb 100%)',
          }} />

  </div>
  <div className='h-12 shadow-light-400   w-16  font-bold rounded-lg  bg-green-100 p-3 text-center   '> 5k </div> 

</div>
                <div className='sm:hidden flex  flex-col  gap-3'>
                    <h1 className= ' sm:hidden font-serif  text-xl'> Monthly Earning </h1>
                  <div className=" sm:hidden flex flex-col gap-5">
                 <p className=  'font-semibold sm:hidden text-3xl text-green-800'> ₹ {value}</p> 
          
               
                  </div>
                </div>
                
                </div>
            </div>

            <div className=' flex sm:flex-col  justify-betwwen sm:gap-6  items-center'>
                <div  className='flex sm:flex-col lg:gap-40    '>
                  <div className='flex flex-col items-center'>
                    <p  className='font-serif text-xl '
                    > How many Products  do you list monthly ? </p>
                    <div className="w-full max-w-lg mx-auto py-8">
                    {/* <input
          min="0"
          max="100"
          value={value2}
          onChange={handleChange2}
          className="
            w-64
            h-6
            bg-green-500
            rounded-lg
            appearance-none
            focus:outline-none
            focus:ring-0
            focus:shadow-none
            range-input
          "
          style={{
            accentColor: 'green',
            background: 'linear-gradient(to right, #22c55e 0%, #22c55e ' + value + '%, #e5e7eb ' + value + '%, #e5e7eb 100%)',
          }}
      /> */}

<input type="range" min="5000" value={value2}   className='  w-64' onChange={handleChange2} max="100000" step="1"    style={{
            accentColor: 'green',
            background: 'linear-gradient(to right, #22c55e 0%, #22c55e ' + value + '%, #e5e7eb ' + value + '%, #e5e7eb 100%)',
          }} />
</div>


  <div className='h-12 shadow-light-400   w-16  font-bold rounded-lg  bg-green-100 p-3 text-center  '> 50k </div> 
               
</div>

                <div className='flex sm:hidden  flex-col    gap-3'>
                    <h1 className='font-serif   sm:hidden text-xl'> Monthly Earning </h1>
                  <div className=" flex flex-col  sm:hidden gap-5">
                 <p className=  'font-semibold  sm:hidden text-3xl text-green-800'> ₹ {value2}</p> 
    
                 </div>
                 </div>
            </div>
            </div>
   
<div className='bg-green-900  text-white font-bold py-2 px-4 text-center   w-44 border border-green-900 rounded'>
Calculate
</div>

<div className=' lg:hidden flex gap-7 p-2  pt-2'>
                 <div className='flex lg:hidden  flex-col    gap-3'>
                    <h1 className='font-serif lg:hidden text-xl'> Monthly Earning </h1>
                  <div className=" flex flex-col lg:hidden gap-5">
                 <p className=  'font-semibold lg:hidden text-3xl text-green-800'> ₹ {value2}</p> 
    
                 </div>
                 
                 </div>
                  <div className='lg:hidden flex   flex-col  gap-3'>
                    <h1 className= ' lg:hidden font-serif  text-xl'> Monthly Earning </h1>
                  <div className=" lg:hidden flex flex-col gap-5">
                 <p className=  'font-semibold lg:hidden text-3xl text-green-800'> ₹ {value}</p> 
          
            
                  </div>
                  </div>
                </div>


    </div>
   

    )
}
