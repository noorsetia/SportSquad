const features = [
  {
    title: "Real-Time Slot Visibility",
    description: "See available time slots instantly before confirming your booking."
  },
  {
    title: "Multi-Sport Venues",
    description: "From cricket grounds to futsal arenas, choose your game."
  },
  {
    title: "Secure Confirmation",
    description: "Instant confirmation and hassle-free scheduling."
  }
]

const Features = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-28">
      <div className="section-container px-6">
        <h3 className="text-4xl dark:text-white font-bold text-center mb-16">
          Built for Modern Sports Enthusiasts
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
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
