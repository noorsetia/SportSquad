const features = [
  {
    title: "Real-Time Slot Visibility",
    description: "See available time slots instantly before confirming your booking."
  },
  {
    title: "Verified Venues",
    description: "All listed grounds are variefed for safety, maintenance, and availability accuracy."
  },
  {
    title: "Smart Notifications",
    description: "Recieve instant confirmation and reminders for upcoming bookings."
  }
]

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="section-container px-6">
        <h3 className="text-4xl dark:text-white font-bold text-center mb-16">
          Built for Modern Sports Enthusiasts
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-700 hover:border-yellow-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="text-2xl text-white font-semibold mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
