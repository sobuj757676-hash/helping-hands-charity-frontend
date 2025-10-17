export default function AdminDashboard() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-4">
        {[ 'Total Families Helped', 'Active Volunteers', 'Total Donations', 'Upcoming Events' ].map((k) => (
          <div key={k} className="border rounded-lg p-6 bg-white shadow">
            <p className="text-gray-500 text-sm">{k}</p>
            <p className="text-2xl font-bold">—</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg p-6 bg-white shadow h-72">Donation Trends (chart)</div>
        <div className="border rounded-lg p-6 bg-white shadow h-72">Volunteer Participation (chart)</div>
      </div>
    </div>
  )
}
