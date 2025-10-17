export default function EventDetail() {
  return (
    <div className="container-responsive py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-2">Food Distribution</h1>
          <p className="text-gray-600 mb-4">Date: Nov 20, 2025 • Time: 10:00 AM • Location: Dhaka</p>
          <p className="text-gray-700 mb-6">Full event description with requirements and goals. Volunteers can register after login.</p>
          <a className="px-4 py-2 rounded-md bg-charity-500 text-white" href="#">Register</a>
        </div>
        <aside className="space-y-4">
          <div className="border rounded-lg p-4 bg-white shadow h-56">Map</div>
          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="font-semibold mb-2">Volunteer Requirements</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>20 volunteers needed</li>
              <li>Basic crowd management</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
