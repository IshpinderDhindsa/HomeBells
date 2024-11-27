import { NavLink, useLoaderData, useParams} from "react-router-dom";
import { PropertyDetails } from "../api/propertyDetails";
import {useState, useEffect} from 'react';
import { ImCross } from "react-icons/im";
export const PropertyBioData=()=>{
    

    const name=useParams().name;
    // console.log(name);
    const [cardDetail,setCardDetail]=useState({});
    const [toggle,setToggle]=useState(false);
    
    
    const properties=useLoaderData().properties;
    

    function handleToggle(){
        setToggle(prev=> !prev);

    }
    

    useEffect(() => {
        // Ensure `loaderData` is available and contains the data
        window.scrollTo(0,0);
        if (properties && name) {
          // Filter the `loaderData` to find the card with matching `id`
          const filteredData = properties.filter(item => item.name===name);
          setCardDetail(filteredData[0]);  // Set the filtered card data
        }
      }, [name, properties]); 
      console.log(cardDetail);
      
    // console.log(photoLength);

    return <>
        <div className={`flex flex-col transition-all sm:flex-row  justify-between  align-center mx-8 p-4 ${toggle ? 'blur-sm' : ' '} `}>
            <div className="flex-row  justify-left aling-center  mb-4 sm:mb-0">
                <h1 className="text-3xl font-normal tracking-widest">{cardDetail.name}</h1>
                <div className="flex justify-left items-center mt-2 sm:mt-8">
                    <h3 className="text-md text-center border-r-2 pr-1 opacity-70  border-gray-700 border-opacity-35">{cardDetail.type}</h3>
                    <h3 className="text-md text-center px-1 opacity-70">{cardDetail.size}</h3>
                </div>
                <h1 className="text-left tracking-wide ">{cardDetail.location}</h1>
            </div>
            <div className="flex-row justify-center sm:justify-centers align-center w-full sm:w-2/5">
                <h1 className="text-center font-semibold text-xl bg-green-950 w-1/3 mt-2 sm:w-2/3 lg:p-2  sm:ml-auto p-1 rounded-md mb-2 text-white sm:text-center">
                    {cardDetail.price}
                </h1>
                <p className="text-md text-left sm:text-right ">{cardDetail.description}</p>
                <div className="flex justify-end">
                <button className="text-lg bg-red-900 p-1 mt-2 text-white rounded transition duration-200 hover:scale-110" onClick={handleToggle}>Contact Owner</button>
                </div>
                
            </div>
            
            
            
        </div>

        <div className={`flex lg:flex-col justify-center align-center mb-4 mx-16 ${toggle ? 'blur-sm': ''} `}>
                <img src={cardDetail.image} alt={`image of ${cardDetail.name}`} className="p-2 w-full sm:w-1/2 mx-auto sm:mx-1 max-w-xl rounded-3xl shadow-lg" />
                
                
                
            </div>
            <div className="flex-row justify-left m-6 md:m-4 p-4 align-center shadow-2xl">
                <div className="">
                <h1 className="text-4xl font-normal text-left mb-4">Overview</h1>
                </div>
                
                <div className="grid grid-cols-12 p-4 gap-6 bg-gray-100 rounded-sm ">
                <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Type of Property</h1>
                        <h1>{cardDetail.type}</h1>
                    </div>
                    <div className="shadow-sm col-span-6 md:col-span-4 px-2 pb-2">
                        <h1 className="font-semibold tracking-wider">Age:</h1>
                        <h1>{cardDetail.age}</h1>
                    </div>
                    <div className="shadow-sm col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Area</h1>
                        <h1>{cardDetail.size}</h1>
                    </div>
                    <div className="shadow-sm col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Security</h1>
                        <h1>{cardDetail.security}</h1>
                    </div>
                    <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Maintenance</h1>
                        <h1>{cardDetail.maintenance}</h1>
                    </div>
                    <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Furnishing</h1>
                        <h1>{cardDetail.furnishing}</h1>
                    </div>
                    <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Balcony</h1>
                        <h1>{cardDetail.balcony}</h1>
                    </div>
                    <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Parking</h1>
                        <h1>{cardDetail.parking}</h1>
                    </div>
                    <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">gaspipeline</h1>
                        <h1>{cardDetail.gaspipeline}</h1>
                    </div>
                    <div className="shadow-sm  col-span-6 md:col-span-4">
                        <h1 className="font-semibold tracking-wider">Entrance Facing</h1>
                        <h1>{cardDetail.entrancefacing}</h1>
                    </div>
                    
                    

                </div>
            </div>

        {toggle && <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-50 shadow-2xl rounded-md absolute  justify-center items-center top-1/4 left-1/4 lg:top-1/3 lg:left-1/3  p-4 ">
            <button onClick={handleToggle} >
            <ImCross className="text-2xl text-right transition duration-300 hover:scale-105" />
                </button> 
                <div className="flex-row justify-center items-center
                p-4">
                <h1 className=" font-semibold text-center text-lg">Owner Name: {cardDetail.contact[0]}</h1>
                <h1 className=" font-semibold text-center text-lg">Contact: {cardDetail.contact[1]}</h1>
                <div className="justify-center items-center flex mt-4">
                    <button className="bg-green-700 text-white p-2 rounded transiton duration-200 hover:scale-105">Call Owner</button>
                </div>
                
                </div>
                
            </div>}     
         
    </>;
}