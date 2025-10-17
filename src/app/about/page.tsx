import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Helping Hands',
}

export default function AboutPage() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-6">About Helping Hands</h1>
      <p className="text-gray-700 mb-4">We are dedicated to empowering communities through education support, healthcare access, emergency relief, and sustainable development programs. Transparency and accountability guide our mission.</p>
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Mission & Vision</h2>
          <p className="text-gray-700">Our mission is to uplift vulnerable populations by providing essential aid, resources, and opportunities for growth. Our vision is a world where every individual has access to basic needs and the chance to thrive.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Impact by Numbers</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Over 25,000 lives impacted</li>
            <li>More than 120 communities served</li>
            <li>1,200 active volunteers</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
