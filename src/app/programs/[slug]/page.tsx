import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs | Helping Hands',
}

export default function ProgramDetail() {
  return (
    <div className="container-responsive py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">Education Support</h1>
          <p className="text-gray-700 mb-4">Full program description goes here with goals and objectives. Stories of success and impact are highlighted to show transparency and effectiveness.</p>
          <h2 className="text-2xl font-semibold mb-3">How to Support</h2>
          <div className="flex gap-3">
            <a className="px-4 py-2 rounded-md bg-charity-500 text-white" href="/donate">Donate</a>
            <a className="px-4 py-2 rounded-md border" href="/volunteer">Volunteer</a>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="font-semibold mb-2">Impact Metrics</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>500 children educated</li>
              <li>50 scholarship grants</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="font-semibold mb-2">Related Programs</h3>
            <ul className="text-sm text-charity-700 space-y-1">
              <li><a href="#" className="hover:underline">Skills Training</a></li>
              <li><a href="#" className="hover:underline">Food Security</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
