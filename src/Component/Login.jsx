import {Link} from 'react-router-dom'
export const Login=()=>{
    return <>
        <div className="flex items-center justify-center min-h-screen font-mono bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl w-2/3 max-w-xl">
        <h2 className="text-5xl text-gray-600  font-black  mb-4 text-center tracking-wider">LogIn</h2>
        <h3 className='text-center text-sm opacity-50 font-bold'>Welcome Again! You've been missed.</h3>
        <form className='mx-6 mt-10'>
          <div className="mb-5 ">
            <label className="block text-xl font-bold  text-gray-600 mb-3" htmlFor="username">
              Username or Phone
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-md focus:border-gray-700 focus:bg-gray-50 "
              required
            />
          </div>
          <div className="mb-10">
            <label className="block text-xl font-bold text-gray-600 mb-3" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-md focus:border-gray-700 focus:bg-gray-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full tracking-widest bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 hover:text-white transition duration-200 focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className=" mt-4 text-right ">
          <Link to="/" className="p-1 rounded-md text-md text-grey-600 hover:font-bold ">
            Recover Password?
          </Link>
        </div>
        <div className="mt-4 text-center transform transition-transform duration-300 hover:scale-110 ">
          <span className="text-sm font-bold tracking-tighter text-gray-700">Don't have an account? </span>
          <Link to="/Signup" className="text-gray-600 transform transition-transform duration-200 hover:scale-110 ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    </>;
}