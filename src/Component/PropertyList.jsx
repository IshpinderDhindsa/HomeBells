import {useState} from 'react';
export const PropertyList=()=>{
   
    const [property, setProperty] = useState({
        name: '',
        location: '',
        price: '',
        type: '',
        size: '',
        description: '',
        contactName: '',
        contactNumber: '',
        security: '',
        maintenance: '',
        furnishing: '',
        age: '',
        balcony: '',
        parking: '',
        gasPipeline: '',
        entranceDirection: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setProperty((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(property); // Log form data or send it to your backend
      };
    
      return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl tracking-wider font-normal mb-6 text-center">Add Property Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-lg font-normal mb-1">Property Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={property.name}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter property name"
                  required
                />
              </div>
    
              {/* Location */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 text-lg font-normal mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={property.location}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter the location"
                  required
                />
              </div>
            </div>
    
            {/* Price and Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 text-lg font-normal mb-1">Price (INR)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={property.price}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter price"
                  required
                />
              </div>
    
              {/* Property Type */}
              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 text-lg font-normal mb-1">Property Type</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={property.type}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter property type"
                  required
                />
              </div>
            </div>
    
            {/* Size and Description */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="size" className="block text-gray-700 text-lg font-normal mb-1">Size (sq. ft.)</label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  value={property.size}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter size"
                  required
                />
              </div>
    
              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-lg font-normal mb-1">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter property description"
                  rows="4"
                  required
                />
              </div>
            </div>
    
            {/* Contact Name and Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="contactName" className="block text-gray-700 text-lg font-normal mb-1">Contact Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={property.contactName}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="contactNumber" className="block text-gray-700 text-lg font-normal mb-1">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={property.contactNumber}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter contact number"
                  required
                />
              </div>
            </div>
    
            {/* Additional Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="security" className="block text-gray-700 text-lg font-normal mb-1">Security</label>
                <input
                  type="number"
                  id="security"
                  name="security"
                  value={property.security}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter security amount"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="maintenance" className="block text-gray-700 text-lg font-normal mb-1">Maintenance</label>
                <input
                  type="number"
                  id="maintenance"
                  name="maintenance"
                  value={property.maintenance}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter maintenance fee"
                  required
                />
              </div>
            </div>
    
            {/* Furnishing, Age, Balcony, Parking */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="furnishing" className="block text-gray-700 text-lg font-normal mb-1">Furnishing</label>
                <select
                  id="furnishing"
                  name="furnishing"
                  value={property.furnishing}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  required
                >
                  <option value="">Select Furnishing</option>
                  <option value="semi">Semi</option>
                  <option value="fully">Fully</option>
                </select>
              </div>
    
              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 text-lg font-normal mb-1">Age of Property (in years)</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={property.age}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter property age"
                  required
                />
              </div>
            </div>
    
            {/* Balcony, Parking, Gas Pipeline, Entrance Direction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="balcony" className="block text-gray-700 text-lg font-normal mb-1">Number of Balconies</label>
                <input
                  type="number"
                  id="balcony"
                  name="balcony"
                  value={property.balcony}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter number of balconies"
                  required
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="parking" className="block text-gray-700 text-lg font-normal mb-1">Number of Parking</label>
                <input
                  type="number"
                  id="parking"
                  name="parking"
                  value={property.parking}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  placeholder="Enter number of parking slots"
                  required
                />
              </div>
            </div>
    
            {/* Gas Pipeline, Entrance Direction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-4">
                <label htmlFor="gasPipeline" className="block text-gray-700 text-lg font-normal mb-1">Gas Pipeline</label>
                <select
                  id="gasPipeline"
                  name="gasPipeline"
                  value={property.gasPipeline}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  required
                >
                  <option value="">Select Gas Pipeline</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
    
              <div className="mb-4">
                <label htmlFor="entranceDirection" className="block text-gray-700 text-lg font-normal mb-1">Entrance Facing Direction</label>
                <select
                  id="entranceDirection"
                  name="entranceDirection"
                  value={property.entranceDirection}
                  onChange={handleChange}
                  className="w-full tracking-tighter text-gray-800 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-2xl focus:bg-gray-100 focus:border-gray-800"
                  required
                >
                  <option value="">Select Direction</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                </select>
              </div>
            </div>
            <div className="justify-center align-center flex">
            <button
              type="submit"
              className=" w-full md:w-2/3 tracking-wide text-gray-100 px-4 py-2 bg-gray-800 rounded-lg transform duration-300 hover:tracking-widest"
            >
              Submit Property Details
            </button>
            </div>
            
          </form>
        </div>
      );
    };