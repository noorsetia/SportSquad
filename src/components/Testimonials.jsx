const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Cricket Enthusiast",
        review: "Booking a ground has never been this smooth. The real-time availability saved us from endless phone calls.",
        rating: 5
    }, 
    {
        name: "Ananya Sharma",
        role: "Football Player",
        review: "Transparent pricing and instant confirmation made the process effortless. highly recommended.",
        rating: 4
    }, 
    {
        name: "Vikram Singh",
        role: "Badminton Coach",
        review: "Clean interface, quick nbooking, and reliable slots. Exactly what local sports communities need.",
        rating: 5
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-gray-50 dark:bg-gray-900 py-12 transition">
            <div className="section-container px-6">
                <h3 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    What Our Users Say 
                </h3>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.name} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({ name, role, review, rating }) => {
    return (
        <div className="bg-gray-800/60 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:border-yellow-500/40 hover:-translate-y-1 transition-all duration-300">
            {/* Star Rating */}
            <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <span 
                        key={index}
                        className={`text-lg ${
                            index < rating 
                            ? "text-yellow-500"
                            : "text-gray-300 dark:text-gary-600"
                        }`}
                    >
                        ★
                    </span>
                ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                "{review}"
            </p>

            <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                    {name}
                </h4>

                <p className="text-sm text-gray-900 dark:text-gray-400">
                    {role}
                </p>
            </div>
        </div>
    )
}

export default Testimonials