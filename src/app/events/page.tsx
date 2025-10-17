export default function EventsPage() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="border rounded-lg p-6 bg-white shadow">
            <p className="text-sm text-gray-500">Upcoming</p>
            <h3 className="text-xl font-semibold">Food Distribution #{i}</h3>
            <p className="text-gray-600">Dhaka • Nov {10+i}, 2025</p>
            <div className="mt-3 flex gap-2">
              <a href="#" className="px-3 py-2 rounded-md border">View Details</a>
              <a href="#" className="px-3 py-2 rounded-md bg-charity-500 text-white">Register</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
