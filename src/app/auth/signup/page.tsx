import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up | Helping Hands',
}

export default function SignUpPage() {
  return (
    <div className="container-responsive py-12 max-w-md">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input className="border rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input className="border rounded-md px-3 py-2 w-full" type="email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input className="border rounded-md px-3 py-2 w-full" type="password" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <select className="border rounded-md px-3 py-2 w-full">
            <option>Volunteer</option>
            <option>Donor</option>
            <option>Beneficiary</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 rounded-md bg-charity-500 text-white">Create Account</button>
      </form>
      <p className="text-sm text-gray-600 mt-4">Already have an account? <a href="/auth/signin" className="text-charity-600 underline">Sign in</a></p>
    </div>
  )
}
