import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

const sections = ["home", "stats", "features", "testimonials", "booking"]
const Navbar = () => {
    const [active, setActive] = useState("home")

    useEffect(() => {
        const observers = []

        sections.forEach((section) => {
            const element = document.getElementById(section)
            if (!element) return 

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(section)
                    }
                },
                { threshold: 0.5 }
            )

            observer.observe(element)
            observers.push(observer)
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [])


    const {  theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition">
        <div className="section-container px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Sport<span className="text-yellow-500">Squad</span>
            </h1>

            <nav className="hidden md:flex gap-6">
                {sections.map((section) => (
                    <a 
                        key={section}
                        href={`#${section}`}
                        className={`text-sm font-medium transition ${
                            active === section 
                                ? "text-yellow-500 border-b-2 border-yellow-500 pb-1"
                                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    {theme !== "light" ? "Dark Mode" : "Light Mode"}
                </button>

                <a
                href="#booking"
                className="bg-black dark:bg-yellow-500 dark:text-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                Book Now
                </a>
            </div>
        </div>
    </header>
  )
}

export default Navbar
