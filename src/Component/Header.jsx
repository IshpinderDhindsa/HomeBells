import {Link} from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

export const Header=()=>{
   // State to handle the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [location,setLocation]=useState('');
  // const handleLocation=(e)=>{
  //   setLocation(e.target.value);
    
    
  // }
 
  


  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="flex font-serif z-10  text-center sticky top-0 font-medium text-gray-100 bg-gray-700 shadow-lg justify-between items-center  mx-auto px-10 min-h-12">
        
        <div>
          <Link to="/" className="text-2xl text-nowrap transform transition-transform duration-300 hover:shadow-lg pr-10 mr-10 tracking-tighter">
            Home Bells
          </Link>
        </div>

        
        {/* <div className="hidden md:flex ml-10 px-10 flex justify-center w-2/3 items-center gap-3">
          <input
            className="rounded-md text-left tracking-tighter outline-none p-1 bg-gray-200 text-gray-800"
            type="text"
            name="location"
            placeholder="Enter the location"
            value={location}
            onChange={handleLocation}
          />
          <button type="submit" onSubmit={(e)=>{
            
            e.preventDefault();
            
          }}>
            <CiSearch className="border-b-2 border-transparent hover:border-gray-100 text-3xl transition duration-300 hover:scale-110" />
          </button>
        </div> */}

        {/* Navigation Links */}
        <div className="w-1/2 px-1 flex justify-right items-center gap-2">
          <nav className=" hidden lg:flex gap-6 justify-right items-center text-nowrap w-full">
            <Link to="/listproperty" className="border-b-2 tracking-tighter border-transparent hover:border-gray-100 text-xl transform transition-transform duration-300 hover:scale-110 text-center hover:shadow-lg">
              List Property
            </Link>
            <Link to="/listings" className="border-b-2 tracking-tighter border-transparent hover:border-gray-100 text-xl transform transition-transform duration-300 hover:scale-110 text-center hover:shadow-lg">
              Properties 
            </Link>
            <Link to="/about" className="border-b-2 tracking-tighter border-transparent hover:border-gray-100 text-xl transform transition-transform duration-300 hover:scale-110 text-center hover:shadow-lg">
              My Profile
            </Link>
            <Link to="/contact" className="border-b-2 tracking-tighter border-transparent hover:border-gray-100 text-xl transform transition-transform duration-300 hover:scale-110 text-center hover:shadow-lg">
              Settings
            </Link>
          </nav>
          
          
          

          
        </div>
        <div className="w-1/2 px-1 flex-row-reverse justify-right items-center gap-2">

        <button
            className=" lg:hidden transition duration-200 hover:scale-110 text-right text-2xl p-2 rounded-md justify-right hover:bg-gray-600"
            onClick={toggleDropdown}
          >
            <FiAlignJustify />
          </button>

        </div>
        {/* Dropdown Menu - Only visible on small screens and when dropdownOpen is true */}
        {dropdownOpen && (
            <div className=" absolute flex-col mb-3  top-10 right-0  w-full  bg-gray-700 text-white p-4 mt-2  shadow-xl lg:hidden border-t border-gray-50 border-opacity-50">
              <Link to="/listproperty" className=" w-1/2 mx-auto block py-3 border-b-2 border-transparent transition duration-200 hover:border-gray-100 text-nowrap" onClick={toggleDropdown}>List Property</Link>
              <Link to="/listings" className=" w-1/2 mx-auto block py-3 border-b-2 border-transparent transition duration-200 hover:border-gray-100 text-nowrap" onClick={toggleDropdown}>Properties</Link>
              <Link to="/about" className="w-1/2 mx-auto block py-3 border-b-2 border-transparent transition duration-200 hover:border-gray-100 text-nowrap" onClick={toggleDropdown}>My Profile</Link>
              <Link to="/contact" className="w-1/2 mx-auto block py-3 border-b-2 border-transparent transition duration-200 hover:border-gray-100 text-nowrap" onClick={toggleDropdown}>Settings</Link>
            </div>
          )}
      </div>
    </>
  );
}