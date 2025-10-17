export default function BlogPage() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <article key={i} className="border rounded-lg p-6 bg-white shadow">
            <div className="h-40 bg-gray-100 rounded mb-4" />
            <h3 className="text-xl font-semibold">Success Story #{i}</h3>
            <p className="text-gray-600">How your donations changed lives.</p>
            <a href="#" className="mt-3 inline-block text-charity-600 hover:underline">Read More</a>
          </article>
        ))}
      </div>
    </div>
  )
}
