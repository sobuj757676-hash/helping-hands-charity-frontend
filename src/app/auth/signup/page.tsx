import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { EnvelopeIcon, LockClosedIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Sign Up | Helping Hands',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Visual Panel */}
      <div className="relative hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop"
          alt="Helping Hands"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charity-600/40" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Join Our Community</h2>
          <p className="text-white/90 max-w-lg">
            Become a volunteer, donor, or beneficiary. Together, we’ll create lasting change.
          </p>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-charity-600 font-semibold">
              <span className="text-xl">🤝</span> Helping Hands
            </Link>
            <h1 className="text-3xl font-bold mt-3">Create your account</h1>
            <p className="text-gray-600">It only takes a minute to get started</p>
          </div>

          {/* Social Signup */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-3">
              <Image src="/google.svg" alt="Google" width={18} height={18} />
              Sign up with Google
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
            <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">or sign up with email</span></div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <div className="relative">
                  <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input placeholder="Your name" className="pl-10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input type="email" placeholder="you@example.com" className="pl-10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input type="password" placeholder="Create a strong password" className="pl-10" />
                </div>
              </div>
              <Button className="w-full group">
                Create Account
                <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account? <Link href="/auth/signin" className="text-charity-600 underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
