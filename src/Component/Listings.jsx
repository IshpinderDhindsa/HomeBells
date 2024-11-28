import {  useLoaderData } from 'react-router-dom';
import { Card } from '../ui/Card';
import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";


export const Listings=()=>{
    const[data,setData]=useState(useLoaderData().properties);
    const[filterProperties,setFilterProperties]=useState(data);
    const[location,setLocation]=useState('');
    const[filters,setFilters]=useState({
        minVal:0,
        maxVal:50000000,
        area:1500,
        furnishing:"",
        type:""

    })
    function handleLocationChange(e){
        setLocation(e.target.value);
    }
     //this is filter out the properties by filtering over the filter
    function onFilter(){
        const newData=data.filter((item)=>
             {
                
                const minCheck= parseInt(item.price)>=filters.minVal;
                const maxCheck= parseInt(item.price) <= filters.maxVal;
                const areaCheck= parseInt(item.size) <= filters.area;
                const furnishedCheck= item.furnishing.toLowerCase() === filters.furnishing.toLowerCase();
                const typeCheck= item.type.toLowerCase() === filters.type.toLowerCase();

                
                
                return(minCheck && maxCheck && areaCheck &&  furnishedCheck && typeCheck);
             }
        );
        console.log(newData);
        setFilterProperties(newData);
        

    }
    //search by Location
    function searchByLocation(){
        const newData=data.filter(item=> item.location.toLowerCase().includes(location.toLowerCase()));
        console.log(newData);
        setFilterProperties(newData);
    }
    // reset the filter component
    function onReset(){
        setFilters({minVal:0,
            maxVal:50000000,
            area:1500,
            furnishing:"",
            type:""});
        setFilterProperties(data);
        window.scrollTo(0,0);

    }
    
    
     return (
        <>
        <div className="flex flex-col sm:flex-row justify-left  sm:justify-center items-center gap-6 gap-y-10 sm:mx-12 mx-16 my-10 p-4">
        
        <CiLocationOn  className="text-3xl"/>
        <input type="type" placeholder="Search City or landmark" className="bg-gray-200 shadow-md outline-none focus:shadow-lg focus:border-gray-800 rounded-md w-5/6 sm:w-1/2 p-2 max-w-lg" value={location} onChange={handleLocationChange}></input>
         <button type="button" className="bg-gray-700 text-white text-md font-semibold transition duration-300 hover:bg-gray-800 p-2 rounded-md w-5/6 sm:w-1/6" onClick={searchByLocation}> Search</button>
         
        
        </div>
        <div className=" grid gap-x-0 grid-cols-12 justify-center align-center mx-8">
        
        <div className=" mx-1 my-8 col-span-3 shadow-xl bg-gray-100 px-1 border border-gray-300">
            <h1 className="my-1 font-semibold text-2xl tracking-wide text-center py-4 px-1 border-b-2 ">Filters</h1>
            <div className="flex flex-col items-center my-10 ">
                <input
                    type="range"
                    id="minVal"
                    name="minVal"
                    min="500000"
                    max="10000000"
                    step="5000"
                    value={filters.minVal}
                    onChange={(e)=>{
                        setFilters({...filters,minVal : parseInt(e.target.value)});
                    }}
                    className=" h-2 w-4/5 bg-gray-200 rounded-lg cursor-pointer"
                />
                <span className="mt-2 text-lg tracking-tight">Min Price : {filters.minVal}</span>
            </div>
            <div className="flex flex-col items-center my-10 border-b-2">
                <input
                    type="range"
                    id="maxVal"
                    name="maxVal"
                    min="5000000"
                    max="50000000"
                    step="5000"
                    value={filters.maxVal}
                    onChange={(e)=>{
                        setFilters({...filters,maxVal: parseInt(e.target.value)});
                    }}
                    className=" h-2 w-4/5 bg-gray-200 rounded-lg cursor-pointer"
                />
                <span className="mt-2 text-lg tracking-tight">Max Price : {filters.maxVal}</span>
            </div>

            <div className="flex flex-col items-center my-10 border-b-2">
                <input
                    type="range"
                    id="area"
                    name="area"
                    min="50"
                    max="2000"
                    step="10"
                    value={filters.area}
                    onChange={(e)=>{
                        setFilters({...filters,area: parseInt(e.target.value)});
                    }}
                    className=" h-2 w-4/5 bg-gray-200 rounded-lg cursor-pointer"
                />
                <span className="mt-2 text-lg tracking-tight">Area (in Square metres) : {filters.area}</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-10 mx-2">
                <label className="font-semibold text-xl tracking-wider" htmlFor='furnishing'>Furnished Type</label>
                <select id="furnishing" className="rounded-md mt-4  w-3/4 text-sm p-1 outline-none focus:shadow-lg border border-gray-300 focus:outline-none focus:border-gray-700 " name="furnishing" value={filters.furnishing} onChange={(e)=>{
                        setFilters({...filters,furnishing: e.target.value});
                    }}>
                    <option value="" disabled>Select</option>
                    <option value="fully-furnished">Fully</option>
                    <option value="semi-furnished">Semi</option>
                    
                </select>
                
            </div>

            <div className="flex flex-col justify-center items-center gap-2 my-10 mx-2">
            <label className="font-semibold text-xl tracking-wider " htmlFor='type'>Property Type</label>
                <select className="rounded-md mt-4  w-3/4 text-sm p-1 outline-none focus:shadow-lg border border-gray-300 focus:outline-none focus:border-gray-700 "  id="type" name="type" value={filters.type} onChange={(e)=>{
                        setFilters({...filters,type:e.target.value});
                    }}>
                    <option value="" disabled>Select type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="cottage">Cottage</option>
                    <option value="farmhouse">Farmhouse</option>
                    <option value="penthouse">Penthouse</option>
                </select>
                
            </div>
            <div className="flex justify-center my-5 mx-4">
                <button className='px-4 py-2 rounded-xl w-3/4 tracking-wider bg-green-800 text-white transform duration-200 hover:tracking-widest hover:shadow-xl' type="submit" onClick={onFilter}>Filter</button>
            </div>
            <div className="flex justify-center mx-4 my-2  ">
                <button className='px-4 py-2 rounded-xl w-3/4 tracking-wider bg-red-800 text-white transform duration-200 hover:tracking-widest hover:shadow-xl' type="reset" onClick={onReset}>Reset</button>
            </div>
            

           
        </div>
        <div className="col-span-9">

        <ul className="grid lg:grid-cols-3 sm:grid-cols-2  justify.center items.center gap-6 gap-y-10 sm:mx-16 lg:mx-24 mx-16 my-10 p-4 ">
            {filterProperties.map( (item, index) =>{
                return (
                    <Card index={index} item={item}/>

                );
            })}
        </ul>

        </div>
        

        </div>
        
       
        </>
     );
       
}