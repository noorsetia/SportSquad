import { useEffect, useRef, useState } from "react"

const statsData = [
    { label: "Venues Listed", value:120 },
    { label: "Bookings Completed", value: 10000 },
    { label: "Customer Satisfaction", value: 98 }
]

const Stats = () => {
    const [startCount, setStartCount] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true)
                }
            },
            { threshold: 0.4 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="stats" ref={sectionRef} className="bg-white dark:bg-gray-900 py-20 transition">
            <div className="section-container px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {statsData.map((stat) => (
                        <StatItem 
                            key={stat.label}
                            label={stat.label}
                            value={stat.value}
                            start={startCount}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const StatItem = ({  label, value, start }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return 

        let startValue = 0 
        const duration = 1500
        const increment = value / (duration / 16)

        const counter = setInterval(() => {
            startValue += increment
            if (startValue >= value) {
                setCount(value)
                clearInterval(counter)
            } else {
                setCount(Math.floor(startValue))
            }
        }, 16)

        return () => clearInterval(counter)
    }, [start, value])

    return (
        <div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {count}
                {label.includes("Bookings") ? "K+" : label.includes("Satisfaction") ? "%" : "+"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
                {label}
            </p>
        </div>
    )
}

export default Stats 