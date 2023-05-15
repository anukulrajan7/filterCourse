import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spiner from './components/Spiner';
import {  toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

import {filterData , apiUrl} from './data';


export default function App() {
  const [data ,setData] = useState({});
  const [isLoading , setLoading]= useState(false);
  const [category, setCategory] = useState(filterData[0].title)

   async function fetchData  (){
    setLoading(true);
      try{
          const response = await fetch(`${apiUrl}`);
          const data = await response.json();
          const datas = data.data;
          setData(datas);
      }catch(err){
   
       toast.error("Network Error");
      }
      setLoading(false);
  }
useEffect(function (){
  fetchData();
},[])
 
  return (
    <div className='bg-slate-900 flex flex-col h-screen overflow-y-auto pb-7 gap-4 '>
      <div>
        <Navbar title ="Top Course"></Navbar>
      </div>
      <div className='lg:w-[1080px] place-self-center w-full '>
      <Filter filterData ={filterData} setCategory={setCategory}/>
      </div>
      <div className='lg:w-[1080px] px-10   mx-auto   w-full mb-[80%] md:mb-5'>
    
      {
        isLoading ? <Spiner/> : <Cards courses ={data} category={category}/>
      }
  
      </div>
    </div>
  )
}
