const BookingDashboard = ({ bookings, onDelete, onEdit }) => {
    if (bookings.length === 0) return null

    return (
        <div className="mt-16 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Your Bookings 
            </h4>

            <div className="space-y-4">
                {bookings.map((booking) => (
                    <div key={booking.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                                {booking.sport}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {booking.name} • {booking.date}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => onEdit(booking)}
                                className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition"
                            >
                                Reschedule 
                            </button>

                            <button 
                                onClick={() => onDelete(booking.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                            >
                                Cancel 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookingDashboard