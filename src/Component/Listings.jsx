import {  useLoaderData } from 'react-router-dom';
import { Card } from '../ui/Card';
import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";


export const Listings=()=>{
    const data=useLoaderData().properties;
    const[location,SetLocation]=useState('');
    function handleLocationChange(e){
        SetLocation(e.target.value);
    }
    
    console.log(data);
     return (
        <>
        <div className="flex flex-col sm:flex-row justify-left  sm:justify-center items-center gap-6 gap-y-10 sm:mx-12 mx-16 my-10 p-4">
        
        <CiLocationOn  className="text-3xl"/>
        <input type="type" placeholder="Search City or landmark" className="bg-gray-200 shadow-md outline-none focus:shadow-lg focus:border-gray-800 rounded-md w-5/6 sm:w-1/2 p-2 max-w-lg" value={location} onChange={handleLocationChange}></input>
                    <button type="submit" className="bg-gray-700 text-white text-md font-semibold transition duration-300 hover:bg-gray-800 p-2 rounded-md w-5/6 sm:w-1/6 ">Search</button>
        </div>
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2  justify.center items.center gap-6 gap-y-10 sm:mx-16 lg:mx-24 mx-16 my-10 p-4 ">
            {data.map( (item, index) =>{
                return (
                    <Card index={index} item={item}/>

                );
            })}
        </ul>
       
        </>
     );
       
}