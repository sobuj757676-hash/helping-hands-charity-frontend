import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const TIERS = [
  { name: 'Bronze', min: 100, max: 499, color: 'bg-amber-100 text-amber-800' },
  { name: 'Silver', min: 500, max: 1999, color: 'bg-gray-100 text-gray-800' },
  { name: 'Gold', min: 2000, max: 9999, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Platinum', min: 10000, max: Infinity, color: 'bg-purple-100 text-purple-800' },
]

const MOCK = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Donor ${i + 1}`,
  email: `donor${i + 1}@example.com`,
  total: Math.floor(Math.random() * 20000),
  lastDonation: '2025-09-21',
}))

function tierOf(amount: number) {
  return TIERS.find(t => amount >= t.min && amount <= t.max) || TIERS[0]
}

export default function AdminDonors() {
  return (
    <div className="container-responsive py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Donors</h1>
          <p className="text-gray-600">Tiers, insights and retention</p>
        </div>
        <Button asChild><Link href="/donate">New Donation</Link></Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            <div className="flex gap-3">
              <Input placeholder="Search name or email" className="w-64" />
              <select className="border rounded-md px-3 py-2">
                <option>All Tiers</option>
                {TIERS.map(t => (
                  <option key={t.name}>{t.name}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export CSV</Button>
              <Button variant="outline">Export PDF</Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Total Donated</th>
                  <th className="px-4 py-2">Tier</th>
                  <th className="px-4 py-2">Last Donation</th>
                  <th className="px-4 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {MOCK.map(d => {
                  const t = tierOf(d.total)
                  return (
                    <tr key={d.id}>
                      <td className="px-4 py-2 font-medium">{d.name}</td>
                      <td className="px-4 py-2 text-gray-600">{d.email}</td>
                      <td className="px-4 py-2">৳{d.total.toLocaleString()}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${t.color}`}>{t.name}</span>
                      </td>
                      <td className="px-4 py-2">{d.lastDonation}</td>
                      <td className="px-4 py-2 text-right">
                        <div className="inline-flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Thank You</Button>
                          <Button variant="outline" size="sm">Receipt</Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
