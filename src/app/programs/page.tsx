export default function ProgramsPage() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-6">Programs</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Education Support', impact: '500 children educated' },
          { title: 'Healthcare Access', impact: '2,000 patients treated' },
          { title: 'Emergency Relief', impact: '5,000 families supported' },
          { title: 'Food Security', impact: '30,000 meals provided' },
          { title: 'Shelter Assistance', impact: '800 shelters built' },
          { title: 'Skills Training', impact: '1,000 trainees graduated' },
        ].map((p) => (
          <div key={p.title} className="border rounded-lg p-6 bg-white shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.impact}</p>
            <a href="#" className="mt-3 inline-block text-charity-600 hover:underline">View Details</a>
          </div>
        ))}
      </div>
    </div>
  )
}
