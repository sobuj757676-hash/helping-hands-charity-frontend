export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-responsive py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-3">Helping Hands</h4>
          <p className="text-sm text-gray-600">Making a difference through coordinated charity efforts.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input className="border rounded-md px-3 py-2 flex-1" placeholder="Enter your email" />
            <button className="px-4 py-2 rounded-md bg-charity-500 text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Helping Hands Charity</div>
    </footer>
  )
}
