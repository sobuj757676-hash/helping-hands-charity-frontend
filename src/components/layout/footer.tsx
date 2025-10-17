import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  HeartIcon, 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

const footerLinks = {
  programs: [
    { name: 'Education Support', href: '/programs/education' },
    { name: 'Healthcare Access', href: '/programs/healthcare' },
    { name: 'Emergency Relief', href: '/programs/emergency' },
    { name: 'Food Security', href: '/programs/food' },
    { name: 'Shelter Assistance', href: '/programs/shelter' },
  ],
  getInvolved: [
    { name: 'Donate Now', href: '/donate' },
    { name: 'Become a Volunteer', href: '/volunteer' },
    { name: 'Corporate Partnership', href: '/partners' },
    { name: 'Fundraise for Us', href: '/fundraise' },
    { name: 'Events Calendar', href: '/events' },
  ],
  resources: [
    { name: 'Annual Reports', href: '/reports' },
    { name: 'Financial Transparency', href: '/financials' },
    { name: 'Success Stories', href: '/stories' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Help Center', href: '/help' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Complaint Policy', href: '/complaints' },
  ]
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
]

export default function Footer() {
  return (
    <>
      {/* Fixed Donation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-charity-600 text-white py-3 px-4 shadow-lg no-print">
        <div className="container-responsive flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeartSolidIcon className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-medium hidden sm:inline">
              Your donation can change a life today.
            </span>
            <span className="text-sm font-medium sm:hidden">
              Make an impact today.
            </span>
          </div>
          <Button asChild size="sm" variant="secondary" className="shadow-lg">
            <Link href="/donate">
              Donate Now
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>

      <footer className="bg-gray-900 text-white pb-16">
        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <HeartSolidIcon className="h-10 w-10 text-charity-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-2xl font-bold text-white">
                    Helping Hands
                  </span>
                  <div className="text-xs text-charity-400 font-medium tracking-wide">
                    CHARITY FOUNDATION
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed">
                Empowering communities through sustainable development, education, healthcare, and emergency relief across Bangladesh since 2020.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-charity-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    123 Charity Lane, Dhanmondi<br />Dhaka 1205, Bangladesh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-charity-400 flex-shrink-0" />
                  <span className="text-gray-300">+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-charity-400 flex-shrink-0" />
                  <span className="text-gray-300">info@helpinghands.org</span>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🛡️ Verified NGO
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  🏆 Top Rated
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  📊 Transparent
                </Badge>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Programs */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-charity-400">Programs</h4>
                <ul className="space-y-2">
                  {footerLinks.programs.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-charity-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Involved */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-charity-400">Get Involved</h4>
                <ul className="space-y-2">
                  {footerLinks.getInvolved.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-charity-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-charity-400">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-charity-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-lg mb-4 text-charity-400">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest impact stories and updates delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Button type="submit" size="sm" className="w-full">
                    Subscribe
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Button>
                </form>
                <p className="text-xs text-gray-400 mt-2">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="container-responsive py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright & Legal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                <span>© {new Date().getFullYear()} Helping Hands Charity. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  {footerLinks.legal.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className="hover:text-charity-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-1">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-charity-400 hover:bg-gray-800"
                  >
                    <Link href={social.href} aria-label={social.name}>
                      {/* You would replace these with proper social media icons */}
                      <span className="text-lg">
                        {social.icon === 'facebook' && '🌐'}
                        {social.icon === 'twitter' && '🐦'}
                        {social.icon === 'instagram' && '📷'}
                        {social.icon === 'linkedin' && '💼'}
                        {social.icon === 'youtube' && '🎥'}
                      </span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Registration Info */}
        <div className="bg-gray-950 py-4">
          <div className="container-responsive text-center">
            <p className="text-xs text-gray-500">
              Registered Charity No: BD-NGO-2020-001234 | 
              Tax Exempt Status: 80G Certified | 
              FCRA Registration: 083781234
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}