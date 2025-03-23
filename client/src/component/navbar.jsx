import { Link } from "react-router-dom"

function Navbar() {
    return (
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="navbar fixed w-full bg-base-100 shadow-sm z-50 px-4">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
  
            <div className="flex-1 ml-4 lg:ml-12">
              <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
                Si <span className="text-yellow-300">LiCIK</span>
              </h1>
            </div>
  
            <div className="hidden lg:flex items-center gap-12 font-bold">
              <Link to="/" className="text-[20px] hover:underline tracking-wide">
                Home
              </Link>
              <a href="#AboutUs" className="text-[20px] hover:underline tracking-wide">
                About Us
              </a>
              <a href="#Fitur" className="text-[20px] hover:underline tracking-wide">
                Fitur
              </a>
              <Link to="/login">
                <button className="btn btn-warning rounded-full font-bold text-black hover:bg-yellow-500 mr-4">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-16"></div>
        </div>
  
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li className="font-bold text-[20px]">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-[20px]">
              <a href="#AboutUs">About Us</a>
            </li>
            <li className="font-bold text-[20px]">
              <a href="#Fitur">Fitur</a>
            </li>
            <li className="mt-4">
              <Link to="/login" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold justify-center text-[20px]" href="#">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  
export default Navbar
