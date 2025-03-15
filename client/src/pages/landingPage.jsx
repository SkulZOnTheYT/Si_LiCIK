
function landingPage() {
  return (
    <div className="navbar fixed w-full transition-all">
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center p-4">
          <h1 className="font-extrabold text-4xl">SI <span className="text-yellow-300">LiCIK</span></h1>
          <div>
            <ul className="xl:text-4xl flex justify-between items-center p-6 space-x-10 font-bold">
              <li className="text-[20px] hover:underline"><a href="#">Home</a></li>
              <li className="text-[20px] hover:underline"><a href="#AboutUs">About Us</a></li>
              <li className="text-[20px] hover:underline"><a href="#Fitur">Fitur</a></li>
            </ul>
          </div>
          <div>
          <button className="bg-yellow-300 font-bold text-black rounded-3xl w-25 h-10 hover:bg-yellow-400">Sign Up</button>
          </div>
        </header>
      </div>
    </div>
  )

}

export default landingPage
