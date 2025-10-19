import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  UserGroupIcon,
  UsersIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  PlusIcon,
  DocumentArrowDownIcon,
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline'

export default function AdminDashboard() {
  const metrics = [
    { label: 'Total Families Helped', value: '8,420', icon: UsersIcon, tone: 'text-blue-600 bg-blue-50' },
    { label: 'Active Volunteers', value: '1,276', icon: UserGroupIcon, tone: 'text-emerald-600 bg-emerald-50' },
    { label: 'Total Donations', value: '৳12,50,000', icon: BanknotesIcon, tone: 'text-charity-600 bg-orange-50' },
    { label: 'Upcoming Events', value: '12', icon: CalendarDaysIcon, tone: 'text-purple-600 bg-purple-50' },
  ]

  const quickActions = [
    { label: 'Add Event', icon: PlusIcon, href: '/admin/events/new' },
    { label: 'Record Donation', icon: BanknotesIcon, href: '/admin/donations/new' },
    { label: 'Approve Volunteer', icon: CheckBadgeIcon, href: '/admin/volunteers' },
    { label: 'Export Report', icon: DocumentArrowDownIcon, href: '/admin/reports' },
  ]

  const activities = [
    { title: 'Donation received', detail: '৳10,000 from Rahim Uddin', time: '2m ago' },
    { title: 'Volunteer approved', detail: 'Nusrat Jahan for Medical Camp', time: '15m ago' },
    { title: 'Event created', detail: 'Flood Relief – Sylhet', time: '1h ago' },
    { title: 'Aid distributed', detail: 'Food packs to 120 families', time: '3h ago' },
  ]

  return (
    <div className="container-responsive py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">Overview, insights and quick actions</p>
        </div>
        <Button asChild>
          <Link href="/admin/events/new">
            <PlusIcon className="h-4 w-4 mr-1" /> Create Event
          </Link>
        </Button>
      </div>

      {/* Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => {
          const Icon = m.icon
          return (
            <Card key={m.label} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{m.label}</p>
                    <p className="text-2xl font-bold mt-1">{m.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${m.tone}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts row (placeholders) */}
      <div className="grid gap-6 lg:grid-cols-3 mt-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-6 h-72 flex items-center justify-center text-gray-500">
            <ArrowTrendingUpIcon className="h-6 w-6 mr-2" /> Monthly Donation Trends (chart)
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 h-72 flex items-center justify-center text-gray-500">
            <UserGroupIcon className="h-6 w-6 mr-2" /> Volunteer Participation (chart)
          </CardContent>
        </Card>
      </div>

      {/* Quick actions + Activity */}
      <div className="grid gap-6 lg:grid-cols-3 mt-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="grid gap-3">
              {quickActions.map((a) => {
                const Icon = a.icon
                return (
                  <Button key={a.label} asChild variant="outline" className="justify-start">
                    <Link href={a.href}>
                      <Icon className="h-4 w-4 mr-2" /> {a.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recent Activity</h3>
              <Badge variant="warning" className="inline-flex items-center">
                <BellAlertIcon className="h-4 w-4 mr-1" /> Live
              </Badge>
            </div>
            <div className="divide-y">
              {activities.map((act, i) => (
                <div key={i} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{act.title}</p>
                    <p className="text-sm text-gray-600">{act.detail}</p>
                  </div>
                  <span className="text-xs text-gray-500">{act.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
