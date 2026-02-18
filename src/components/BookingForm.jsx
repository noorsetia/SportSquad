import { useState } from "react"

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    date: ""
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
        newErrors.name = "Nmae i required."
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

    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log("Booking Data:", formData)
    
    setLoading(false)
    setSuccess(true)

    setFormData({
        name: "",
        sport: "",
        date: ""
    })
  }

  return (
    <section id="booking" className="bg-white dark:bg-gray-900 py-28 transition">
      <div className="section-container px-6">
        <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-12 rounded-3xl shadow-sm">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Reserve Your Slot
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
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                    errors.name
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400"
                }`}
                />
                {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-2">
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
                id="sport"g
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                requiredaria-invalid={errors.sport ? "true" : "false"}
                aria-describedby={errors.sport ? "sport-error" : undefined}
                className={`w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                    errors.sport
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400"
                }`}
                >
                    <option value="">Select Sport</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Volleyball">VolleyBall</option>
                    <option value="Tennis">Tennis</option>
                </select>
                {errors.sport && (
                    <p id="sport-error" className="text-red-500 text-sm mt-2">
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
                aria-describedby={errors.date ? "date-error" : undefined}
                className={`w-full p-4 rounded-xl border border-gray-200  dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${
                    errors.date
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-yellow-400"
                }`}
                />
                {errors.date && (
                    <p id="date-error" className="text-red-500 text-sm mt-2">
                        {errors.date}
                    </p>
                )}
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading ? "true" : "false"}
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
      </div>
    </section>
  )
}

export default BookingForm
