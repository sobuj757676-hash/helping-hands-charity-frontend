import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const MOCK = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Rahim Uddin ${i + 1}`,
  email: `rahim${i + 1}@example.com`,
  hours: Math.floor(Math.random() * 120),
  status: i % 3 === 0 ? 'Pending' : 'Active',
  joined: '2025-08-12',
}))

export default function AdminVolunteers() {
  return (
    <div className="container-responsive py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Volunteers</h1>
          <p className="text-gray-600">Approve, track and manage volunteers</p>
        </div>
        <Button asChild><Link href="#">Invite Volunteer</Link></Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            <div className="flex gap-3">
              <Input placeholder="Search name or email" className="w-64" />
              <select className="border rounded-md px-3 py-2">
                <option>All Status</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Inactive</option>
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
                  <th className="px-4 py-2">Hours</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {MOCK.map(v => (
                  <tr key={v.id}>
                    <td className="px-4 py-2 font-medium">{v.name}</td>
                    <td className="px-4 py-2 text-gray-600">{v.email}</td>
                    <td className="px-4 py-2">{v.hours}h</td>
                    <td className="px-4 py-2">
                      <Badge variant={v.status === 'Active' ? 'success' : v.status === 'Pending' ? 'warning' : 'outline'}>
                        {v.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-2 text-right">
                      <div className="inline-flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        {v.status === 'Pending' ? (
                          <Button size="sm">Approve</Button>
                        ) : (
                          <Button variant="outline" size="sm">Deactivate</Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
