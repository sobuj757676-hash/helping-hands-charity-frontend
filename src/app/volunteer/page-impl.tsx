export default function VolunteerDashboard() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-3xl font-bold mb-6">Volunteer Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-4">
        {[ 'Total Hours', 'Events Attended', 'Status', 'Member Since' ].map((k) => (
          <div key={k} className="border rounded-lg p-6 bg-white shadow">
            <p className="text-gray-500 text-sm">{k}</p>
            <p className="text-2xl font-bold">—</p>
          </div>
        ))}
      </div>
    </div>
  )
}
