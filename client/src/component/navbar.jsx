import { Link, useNavigate } from "react-router-dom"
import url from "../url"

function Navbar({user}) {
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    navigate("/");
    document.getElementById("my-drawer-3").checked = false;
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay
  };

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
              <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
                Si <span className="text-yellow-300">LiCIK</span>
              </h1>
            </div>
  
            <div className="hidden lg:flex items-center gap-12 font-bold">
              <Link to="/" className="text-[20px] hover:underline tracking-wide">
                Home
              </Link>
              <button onClick={() => handleScroll('fitur')} className="text-[20px] hover:underline tracking-wide">
                Fitur
              </button>
              <button onClick={() => handleScroll('cara-kerja')} className="text-[20px] hover:underline tracking-wide">
                Cara Kerja
              </button>
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
                  <li><a>Profile</a></li>
                  <li><a href={`${url.apiUrl}/auth/logout`}>Logout</a></li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-warning rounded-full font-bold text-black hover:bg-yellow-500 mr-4">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
          <div className="mt-16"></div>
        </div>
  
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li className="font-bold text-[20px] mt-5">
              <button onClick={() => handleLinkClick('/')}>Home</button>
            </li>
            <li className="font-bold text-[20px] mt-2">
              <button onClick={() => handleScroll('fitur')}>Fitur Si<span className="text-yellow-300">LiCIK</span></button>
            </li>
            <li className="font-bold text-[20px] mt-2">
              <button onClick={() => handleScroll('cara-kerja')}>Cara Kerja Si<span className="text-yellow-300">LiCIK</span></button>
            </li>
            <li className="mt-10">
            <Link
              to={isAuthenticated ? "/dashboard" : "/login"}
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold justify-center text-[20px]"
            >
              {isAuthenticated ? "Lanjut ke Dashboard" : "Sign Up"}
            </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
  
export default Navbar
