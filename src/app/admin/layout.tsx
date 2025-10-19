export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-[240px_1fr]">
      <aside className="hidden lg:flex flex-col border-r bg-white">
        <div className="h-16 px-4 flex items-center border-b font-bold text-charity-700">
          🤝 Helping Hands — Admin
        </div>
        <nav className="p-3 space-y-1">
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin">Dashboard</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/volunteers">Volunteers</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/donors">Donors</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/beneficiaries">Beneficiaries</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/events">Events</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/donations">Donations</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/aid">Aid Distribution</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/posts">Posts</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/messages">Messages</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/staff">Staff</a>
          <a className="block px-3 py-2 rounded-md hover:bg-charity-50" href="/admin/settings">Settings</a>
        </nav>
      </aside>

      <div className="min-h-screen flex flex-col">
        <header className="h-16 border-b bg-white/80 backdrop-blur px-4 flex items-center justify-between">
          <div className="font-semibold">Admin Panel</div>
          <div className="flex items-center gap-2">
            <a className="px-3 py-1.5 rounded-md border" href="/">View Site</a>
            <button className="px-3 py-1.5 rounded-md bg-charity-500 text-white">Logout</button>
          </div>
        </header>
        <main className="p-4 lg:p-6 bg-gray-50 flex-1">{children}</main>
      </div>
    </div>
  )
}
