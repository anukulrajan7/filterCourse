import React from 'react'

export default function Filter({filterData,setCategory}) {
 const fitlterField = (e)=>{
   setCategory(e);
 }  



  return (
    <div className='flex flex-wrap w-full items-center my-4 justify-center px-4 gap-5'>
      {
        filterData.map((data)=>
          (<button
            onClick={()=>{fitlterField(data.title)}}
         
            className='bg-purple-700 shadow-sm shadow-purple-300 text-white font-semibold px-3 py-3 text-xl rounded-md hover:bg-gray-800
            ' key={data.id}>{data.title}</button>))
      }
    </div>
  )
}
