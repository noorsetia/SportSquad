import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import BookingForm from "./components/BookingForm"
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
        <BookingForm />
        <Footer />
      </main>
    </div>
  )
}

export default App