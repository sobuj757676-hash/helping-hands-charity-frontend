export default function ContactPage() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="border rounded-md px-3 py-2 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="border rounded-md px-3 py-2 w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input className="border rounded-md px-3 py-2 w-full" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <select className="border rounded-md px-3 py-2 w-full">
              <option>General</option>
              <option>Partnership</option>
              <option>Media</option>
              <option>Volunteer</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="border rounded-md px-3 py-2 w-full" rows={5} />
          </div>
          <button className="px-4 py-2 rounded-md bg-charity-500 text-white">Submit</button>
        </form>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
          <p className="text-gray-700">Address: 123 Charity Road, Dhaka</p>
          <p className="text-gray-700">Phone: +880 1XXX-XXXXXX</p>
          <p className="text-gray-700">Email: info@helpinghands.org</p>
          <div className="h-64 bg-gray-100 rounded mt-4" />
        </div>
      </div>
    </div>
  )
}
