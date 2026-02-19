import { useState, useMemo } from "react"

const BookingForm = ({ onSubmit, editingBooking, clearEdit }) => {

  const initialData = useMemo(() => ({
    name: editingBooking?.name || "",
    sport: editingBooking?.sport || "",
    date: editingBooking?.date || ""
  }), [editingBooking])

  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
    }

    if (!formData.sport) {
      newErrors.sport = "Please select a sport."
    }

    if (!formData.date) {
      newErrors.date = "Please choose a date."
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past."
      }
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    setErrors(prev => ({
      ...prev,
      [name]: ""
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)
    setSuccess(false)

    await new Promise(resolve => setTimeout(resolve, 1000))

    onSubmit(formData)

    setLoading(false)
    setSuccess(true)

    setFormData({
      name: "",
      sport: "",
      date: ""
    })

    clearEdit()
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-12 rounded-3xl shadow-sm">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        {editingBooking ? "Reschedule Booking" : "Reserve Your Slot"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={errors.name ? "true" : "false"}
            className={`w-full p-4 rounded-xl border transition ${
              errors.name
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name}
            </p>
          )}
        </div>

        {/* Sport */}
        <div>
          <label htmlFor="sport" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Sport
          </label>

          <select
            id="sport"
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            required
            aria-invalid={errors.sport ? "true" : "false"}
            className={`w-full p-4 rounded-xl border transition ${
              errors.sport
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400"
            }`}
          >
            <option value="">Select Sport</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Badminton">Badminton</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Tennis">Tennis</option>
          </select>

          {errors.sport && (
            <p className="text-red-500 text-sm mt-2">
              {errors.sport}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Booking Date
          </label>

          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            aria-invalid={errors.date ? "true" : "false"}
            className={`w-full p-4 rounded-xl border transition ${
              errors.date
                ? "border-red-500 focus:ring-2 focus:ring-red-400"
                : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400"
            }`}
          />

          {errors.date && (
            <p className="text-red-500 text-sm mt-2">
              {errors.date}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition ${
            loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-black dark:bg-yellow-500 dark:text-black text-white hover:bg-gray-800"
          }`}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Processing...
            </>
          ) : editingBooking ? (
            "Update Booking"
          ) : (
            "Confirm Booking"
          )}
        </button>

        {success && (
          <p className="text-green-600 text-center text-sm">
            Booking submitted successfully.
          </p>
        )}

      </form>
    </div>
  )
}

export default BookingForm
