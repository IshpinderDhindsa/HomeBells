import { useState } from "react";
import {Link} from 'react-router-dom';

export const Home=()=>{
    const [selectedOption,setSelectedOption]=useState('');
    const [location,setLocation]=useState('');
    function handleSelectedOption(e){
        setSelectedOption(e.target.value);
    }
    function handleLocationChange(e){
        setLocation(e.target.value);
        console.log(location);

    }

    return <>
    <div className="my-20 mx-auto bg-gray-50 p-4  text-gray-700 flex justify-center align-items">
        <div className="flex-col m-10  rounded-xl shadow-lg transition duration-300 hover:shadow-2xl p-6 max-w-xl min-w-sm w-2/3 border-solid border border-gray-900 justify-center items-center">
            <h1 className="text-center font-semibold text-wrap text-3xl mb-4">Shift Yourself with Ease</h1>
            <div className="flex gap-6 md:gap-0 flex-col mt-8 md:flex-row md:my-4 md:mx-auto justify-center items-center md:border-collapse">
              
                    
                    <select id="cities" name="cities" className="w-full rounded md:w-1/4 p-2 bg-gray-600 hover:bg-gray-700 text-gray-100  md:rounded-none "
                    onChange={handleSelectedOption}
                    value={selectedOption}
                    >
                        <option value="chandigarh">Chandigarh</option>
                        <option value="mohali">Mohali</option>
                        <option value="delhi">Delhi</option>
                        <option value="gurugaon">Gurugaon</option>
                        <option value="zirakpur">Zirakpur</option>
                        <option value="panchkula">Panchkula</option>
                    </select>
                    <input type="type" placeholder="Search City or landmark" className="w-full rounded md:rounded-none md:w-1/2 p-2 bg-gray-300 outline-none text-gray-700 " value={location} onChange={handleLocationChange}></input>
                    <button type="submit" className="w-full md:w-1/4 p-2 bg-gray-600 hover:bg-gray-700 text-gray-100 rounded
                     md:rounded-none">Search</button>
             
            </div>

            <div className="flex mt-4 p-2 flex flex-col justify-center items-center gap-4">
                <h1 className="text-center font-semibold text-wrap tracking-tight opacity-70">Are you a property owner and want to list your property? </h1>
                <Link to="/listproperty" className="bg-red-900 hover:bg-red-800 duration-200 transition w-full text-center hover:scale-110 hover:rounded text-lg p-1 rounded-none text-white max-w-40">List Property</Link>
            </div>

             
        </div>

    </div>
    
    </>;
}