import { useEffect, useState } from "react"
import BookingForm from "./BookingForm"
import BookingDashboard from "./BookingDashboard"

const BookingSection = () => {

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings")
    return saved ? JSON.parse(saved) : []
  })

  const [editingBooking, setEditingBooking] = useState(null)

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings))
  }, [bookings])

  const addOrUpdateBooking = (data) => {
    if (editingBooking) {
      setBookings(prev =>
        prev.map(b =>
          b.id === editingBooking.id
            ? { ...b, ...data }
            : b
        )
      )
      setEditingBooking(null)
    } else {
      const newBooking = {
        id: Date.now(),
        ...data
      }
      setBookings(prev => [...prev, newBooking])
    }
  }

  const deleteBooking = (id) => {
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  const editBooking = (booking) => {
    setEditingBooking(booking)
  }

  return (
    <section id="booking" className="bg-white dark:bg-gray-900 py-12 transition">
      <div className="section-container px-6">

        <BookingForm
          onSubmit={addOrUpdateBooking}
          editingBooking={editingBooking}
          clearEdit={() => setEditingBooking(null)}
        />

        <BookingDashboard
          bookings={bookings}
          onDelete={deleteBooking}
          onEdit={editBooking}
        />

      </div>
    </section>
  )
}

export default BookingSection
