const Hero = () => {
  return (
<section id="home" className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="section-container px-6 py-32 text-center">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
          Simplifying Stadium Bookings
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Discover and reserve premium sports venues with real-time availability,
          transparent pricing, and effortless scheduling.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#booking"
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Reserve Now
          </a>

          <button onClick={() => {
            const section = document.getElementById("features")
            section ?.scrollIntoView({ behavior: "smooth"})
          }}
            className="border border-gray-600 px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Explore Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
