import { useState } from "react"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    date: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const isValid =
    formData.name.trim() &&
    formData.sport &&
    formData.date

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return

    console.log(formData)
    setSubmitted(true)
    setFormData({ name: "", sport: "", date: "" })
  }

  return (
    <section id="booking" className="bg-white py-28">
      <div className="section-container px-6">
        <div className="max-w-2xl mx-auto bg-gray-50 p-12 rounded-3xl shadow-sm">
          <h3 className="text-3xl font-bold text-center mb-10">
            Reserve Your Slot
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />

            <select
              name="sport"
              value={formData.sport}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="">Select Sport</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Badminton">Badminton</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />

            <button
              disabled={!isValid}
              className={`w-full py-4 rounded-xl font-semibold transition ${
                isValid
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm Booking
            </button>

            {submitted && (
              <p className="text-green-600 text-center text-sm">
                Booking submitted successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
