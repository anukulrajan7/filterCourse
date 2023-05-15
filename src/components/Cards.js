import React from 'react'
import Card from './Card';
import "./style.css"
import { useState } from 'react';

export default function Cards({courses,category}) {
  // const courses = props.data;
  const[likedData,setLikedData]=useState([]);
  function getCourses (){
  if(category==="All"){

    let allCourses = [];
    Object.values(courses).forEach((array)=>{
      array.forEach((course)=>{
        allCourses.push(course);
      }
      )})
      return allCourses;
    }
    else{
      return courses[category];
    }
  }
  
  return (
    <div className='grid grid-cols-1   lg:grid-cols-3 w-full   gap-3 justify-center items-center      '>
      {
  
        getCourses().map((course)=>(
          <Card className=""
          key={course.id} likedData={likedData} setLikedData={setLikedData} course = {course}/>
        ))
      }
    </div>
  )
}
