export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-charity-50 to-white">
        <div className="container-responsive py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-charity-800 mb-6">Helping Hands Charity</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">Together we can make a difference. Join us to support education, healthcare, and emergency relief for communities in need.</p>
              <div className="flex gap-4">
                <a className="px-6 py-3 rounded-md bg-charity-500 text-white font-semibold shadow hover:bg-charity-600 transition" href="/donate">Donate Now</a>
                <a className="px-6 py-3 rounded-md border border-charity-500 text-charity-700 font-semibold hover:bg-charity-50 transition" href="/volunteer">Become a Volunteer</a>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <img className="w-full h-full object-cover rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1600147184943-00b68b2ba87f?q=80&w=1600&auto=format&fit=crop" alt="Charity helping hands" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-responsive py-16">
        <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { label: 'Total Donations', value: '৳12,50,000+' },
            { label: 'Lives Impacted', value: '25,000+' },
            { label: 'Communities Served', value: '120+' },
            { label: 'Active Volunteers', value: '1,200+' },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-lg bg-white shadow border">
              <p className="text-2xl font-bold text-charity-700">{item.value}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
