
import { NavLink } from 'react-router-dom';
export const Card=({index,item})=>{
    return(
        <li key={index} className="rounded-md group shadow-lg  transition duration-200 hover:scale-105 hover:shadow-xl ">
                        <NavLink to={`/property/${item.name}`}>
                        <img src="https://images.pexels.com/photos/25217481/pexels-photo-25217481/free-photo-of-houses-amongst-fields-in-sweden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Propety Image" className=" w-full object-fit rounded-t-md" />
                        <div className="mt-2 mb-2 p-2 border-t-2 border-b-neutral-600 justify-center items-center">
                        <h1 className="whitespace-nowrap text-lg tracking-tight  truncate font-semibold ">{item.name}</h1>
                        <h1 className="tracking-tighter">{item.location}</h1>
                        <h1 className="p-1 mt-1 bg-red-900 w-1/3 text-center rounded-md text-white">{item.price}</h1>
                        </div>
                        </NavLink>
                       

                    </li>
    );
}