import { Link, useNavigate, NavLink } from "react-router-dom"
import url from "../utils/url"

export default function NavbarDashboard({user}) {
  const isAuthenticated = !!user;
  const navigate = useNavigate();
  
  const handleLinkClick = (path) => {
    navigate(path);
    document.getElementById("my-drawer-3").checked = false;
  }
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
              <NavLink to='/dashboard' className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
                Si <span className="text-yellow-300">LiCIK</span>
              </NavLink>
            </div>
  
            <div className="hidden lg:flex items-center gap-12 font-bold">
              <NavLink
                to='/dashboard/analisis'
                className="text-[20px] text-gray-700 tracking-wide transition-all duration-300 ease-in-out hover:text-yellow-500 hover:underline hover:underline-offset-8 hover:scale-105 "
              >
                Analisis
              </NavLink>
              <NavLink
                to='/dashboard/literasi'
                className="text-[20px] text-gray-700 tracking-wide transition-all duration-300 ease-in-out hover:text-yellow-500 hover:underline hover:underline-offset-8 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
              >
                Literasi
              </NavLink>
              <Link
                to="/"
                className="text-[20px] text-gray-700 tracking-wide transition-all duration-300 ease-in-out hover:text-yellow-500 hover:underline hover:underline-offset-8 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
              >
                Home
              </Link>
            </div>
              {isAuthenticated ? (
              <div className="dropdown dropdown-end ml-8">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User avatar"
                      src={user.avatar}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to='/dashboard' className="justify-between">
                      Dashboard
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li><Link to={'/profil'}>Profile</Link></li>
                  <li><a href={`${url.apiUrl}/auth/logout`}>Logout</a></li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-warning rounded-full font-bold text-black hover:bg-yellow-500 mr-2 ml-14">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
          <div className="mt-16"></div>
        </div>
  
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-6 w-80 min-h-full bg-base-100 shadow-xl text-base-content transition-all duration-300 ease-in-out">
            <li className="mb-4">
              <button
                onClick={() => handleLinkClick('/dashboard')}
                className="text-[20px] font-bold text-gray-700 btn btn-ghost w-full justify-start hover:bg-yellow-100 hover:text-yellow-500 transition-all duration-300 ease-in-out rounded-lg group"
              >
                Dashboard Si<span className="text-yellow-400 group-hover:text-yellow-500">LiCIK</span>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleLinkClick('/dashboard/literasi')}
                className="text-[20px] font-bold text-gray-700 btn btn-ghost w-full justify-start hover:bg-yellow-100 hover:text-yellow-500 transition-all duration-300 ease-in-out rounded-lg group"
              >
                Analisis <span className="text-yellow-400 group-hover:text-yellow-500">Bisnis</span>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => handleLinkClick("/dashboard/literasi")}
                className="text-[20px] font-bold text-gray-700 btn btn-ghost w-full justify-start hover:bg-yellow-100 hover:text-yellow-500 transition-all duration-300 ease-in-out rounded-lg group"
              >
                Literasi<span className="text-yellow-400 group-hover:text-yellow-500">Finansial</span>
              </button>
            </li>
            <li className="mt-10">
              <button
                onClick={() => handleLinkClick("/")}
                className="btn btn-primary bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg w-full font-bold text-[20px] transition-all duration-300 ease-in-out rounded-lg"
              >
                Balik ke Home
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }