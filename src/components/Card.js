import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
let course = props.course;
let likedData = props.likedData;
let setLikedData = props.setLikedData;
 const [like,setLike]=useState(true);
 let clickHandler = function(){
  if(likedData.includes(course.id)){
    setLikedData((liked)=>{
      return liked.filter((item)=>{
        return item !== course.id
      })
    })
    toast.warning('liked removed');
    console.log("liked removed");
  }
  else{
    if(likedData.length===0){
      setLikedData([course.id])
      toast.success("liked course")
    }
    else{
      setLikedData((data)=>{
       return [ ...data,[course.id]]
      })
    }
  }
  like?setLike(false):setLike(true);
 }
  return (
    <div className='card flex flex-col items-center w-fit h-fit shadow-md shadow-gray-700 mb-9 md:w-[80%] mx-auto md:gap-10 md:font-serif lg:w-full
    overflow-y-hidden relative rounded-sm  gap-7 bg-gray-800'>
      <div className='img-cont relative w-fit '>
        <img className="img  w-fit"src={course.image.url} alt={course.image.alt} />
      </div>
      
      <div className='btn-cont absolute top-[10rem] right-[8px] text-3xl px-2 bg-white w-fit rounded-full'>
        <button className='text-2xl hover:px-1 transition-all duration-75  ' onClick={clickHandler}>
       {like?<FcLikePlaceholder/>:<FcLike/>}
        </button>
      </div>
      <div className='title px-3 text-center'>
        <h3 className='text-white font-semibold text-[24px]'>{course.title}</h3>
        
      </div>
      <div className='desc px-2 w-full pb-2  text-white'>
        <p> { course.description.split('.')[0]  }{'  '}
            ....</p>
      </div>
    </div>
  )
}
