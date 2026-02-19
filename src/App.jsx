import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import BookingSection from "./components/BookingSection"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <BookingSection />
        <Footer />
      </main>
    </div>
  )
}

export default App