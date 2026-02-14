const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="section-container px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sports<span className="text-yellow-500">Quad</span>
        </h1>

        <a
          href="#booking"
          className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
