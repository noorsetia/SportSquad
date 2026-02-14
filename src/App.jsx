import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import BookingForm from "./components/BookingForm"

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <BookingForm />
      </main>
    </div>
  )
}

export default App