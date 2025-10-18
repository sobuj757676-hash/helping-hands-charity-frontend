import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import { 
  HeartIcon, 
  UserGroupIcon, 
  HomeIcon, 
  AcademicCapIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  GiftIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  BanknotesIcon,
  TrophyIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

export default function DonatePage() {
  const donationAmounts = [
    { 
      amount: 500, 
      label: '৳500',
      impact: 'Provides school supplies for 5 children',
      icon: AcademicCapIcon,
      popular: false
    },
    { 
      amount: 1000, 
      label: '৳1,000',
      impact: 'Feeds a family of 5 for a week',
      icon: HomeIcon,
      popular: true
    },
    { 
      amount: 2500, 
      label: '৳2,500',
      impact: 'Medical treatment for one patient',
      icon: HeartIcon,
      popular: false
    },
    { 
      amount: 5000, 
      label: '৳5,000',
      impact: 'Emergency shelter for a displaced family',
      icon: ShieldCheckIcon,
      popular: false
    },
  ]

  const paymentMethods = [
    {
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: CreditCardIcon,
      fees: 'Small processing fee applies',
      secure: true
    },
    {
      name: 'Mobile Banking',
      description: 'bKash, Nagad, Rocket',
      icon: DevicePhoneMobileIcon,
      fees: 'No additional fees',
      secure: true
    },
    {
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      icon: BanknotesIcon,
      fees: 'No fees, 100% goes to charity',
      secure: true
    },
  ]

  const campaigns = [
    {
      title: 'Flood Relief Emergency',
      description: 'Urgent support needed for flood-affected families in Sylhet',
      raised: 85000,
      goal: 150000,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=400&auto=format&fit=crop',
      urgent: true
    },
    {
      title: 'Education for All',
      description: 'Building classrooms and providing scholarships',
      raised: 120000,
      goal: 200000,
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=400&auto=format&fit=crop',
      urgent: false
    },
  ]

  const donorBenefits = [
    { icon: CheckCircleIcon, text: '100% tax deductible donation' },
    { icon: CheckCircleIcon, text: 'Instant digital receipt via email' },
    { icon: CheckCircleIcon, text: 'Regular impact updates and stories' },
    { icon: CheckCircleIcon, text: 'Invitation to exclusive donor events' },
    { icon: CheckCircleIcon, text: 'Personalized thank you from beneficiaries' },
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Major Donor',
      content: 'The transparency and impact reporting from Helping Hands gives me complete confidence in my donations.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=100&auto=format&fit=crop'
    },
    {
      name: 'Mohammed Khan',
      role: 'Monthly Donor',
      content: 'Seeing the direct impact of my monthly contribution through photos and stories is incredibly rewarding.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="charity" className="mb-4">
            🎯 Make an Impact Today
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Donation <span className="text-gradient">Changes Lives</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every contribution, no matter the size, creates a ripple effect of positive change in communities across Bangladesh.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-charity-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <HeartSolidIcon className="h-6 w-6 text-charity-500" />
                  Make a Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Donation Amount Selection */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-4 block">
                    Select Donation Amount
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {donationAmounts.map((option) => {
                      const Icon = option.icon
                      return (
                        <button
                          key={option.amount}
                          className={`relative p-6 border-2 rounded-xl text-left transition-all duration-200 hover:border-charity-400 hover:shadow-md group ${
                            option.popular ? 'border-charity-500 bg-charity-50' : 'border-gray-200'
                          }`}
                        >
                          {option.popular && (
                            <Badge className="absolute -top-2 left-4 bg-charity-500">
                              Most Popular
                            </Badge>
                          )}
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="text-2xl font-bold text-gray-900">{option.label}</p>
                              <p className="text-sm text-gray-600 mt-1">{option.impact}</p>
                            </div>
                            <Icon className="h-8 w-8 text-charity-500 group-hover:scale-110 transition-transform" />
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  
                  {/* Custom Amount */}
                  <div className="mt-4">
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Or enter custom amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">৳</span>
                      <Input 
                        type="number" 
                        placeholder="Enter amount" 
                        className="pl-8 text-lg font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation Frequency */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-4 block">
                    Donation Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['One-time', 'Monthly', 'Yearly'].map((frequency) => (
                      <button
                        key={frequency}
                        className="p-4 border-2 border-gray-200 rounded-lg text-center hover:border-charity-400 transition-colors"
                      >
                        <p className="font-semibold">{frequency}</p>
                        {frequency === 'Monthly' && (
                          <p className="text-xs text-charity-600 mt-1">Most impact</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-4 block">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <button
                          key={method.name}
                          className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-charity-400 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Icon className="h-6 w-6 text-charity-500" />
                              <div>
                                <p className="font-semibold text-gray-900">{method.name}</p>
                                <p className="text-sm text-gray-600">{method.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              {method.secure && (
                                <Badge variant="success" className="mb-1">
                                  🔒 Secure
                                </Badge>
                              )}
                              <p className="text-xs text-gray-500">{method.fees}</p>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Donor Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Donor Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input placeholder="Full Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="tel" placeholder="Phone Number" />
                    <Input placeholder="Address (Optional)" />
                  </div>
                </div>

                {/* Dedication Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Dedication (Optional)</h3>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-charity-400 transition-colors">
                        In Honor Of
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:border-charity-400 transition-colors">
                        In Memory Of
                      </button>
                    </div>
                    <Input placeholder="Person's Name" className="hidden" />
                  </div>
                </div>

                {/* Submit Button */}
                <Button size="xl" className="w-full group">
                  <HeartSolidIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Complete Donation
                  <span className="ml-2 font-bold">৳1,000</span>
                </Button>

                {/* Security & Trust */}
                <div className="pt-6 border-t">
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                      <span>256-bit SSL Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span>PCI DSS Compliant</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Active Campaigns */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Campaigns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {campaigns.map((campaign) => {
                  const progress = (campaign.raised / campaign.goal) * 100
                  return (
                    <div key={campaign.title} className="space-y-3">
                      {campaign.urgent && (
                        <Badge variant="destructive" className="animate-pulse">
                          🚨 Urgent
                        </Badge>
                      )}
                      <Image
                        src={campaign.image}
                        alt={campaign.title}
                        width={300}
                        height={150}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{campaign.description}</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">৳{campaign.raised.toLocaleString()} raised</span>
                          <span className="font-semibold">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-charity-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Goal: ৳{campaign.goal.toLocaleString()}
                        </p>
                      </div>
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <Link href={`/campaigns/${campaign.title.toLowerCase().replace(' ', '-')}`}>
                          Support This Campaign
                        </Link>
                      </Button>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Donor Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GiftIcon className="h-5 w-5 text-charity-500" />
                  Donor Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {donorBenefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>

            {/* Donor Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What Donors Say</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="space-y-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}