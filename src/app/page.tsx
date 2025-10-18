import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { 
  HeartIcon, 
  UserGroupIcon, 
  HomeIcon, 
  AcademicCapIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
  const stats = [
    { 
      label: 'Total Donations', 
      value: '৳12,50,000+', 
      icon: HeartSolidIcon,
      description: 'Raised this year',
      color: 'from-green-400 to-green-600'
    },
    { 
      label: 'Lives Impacted', 
      value: '25,000+', 
      icon: UserGroupIcon,
      description: 'People helped',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      label: 'Communities Served', 
      value: '120+', 
      icon: GlobeAltIcon,
      description: 'Across Bangladesh',
      color: 'from-purple-400 to-purple-600'
    },
    { 
      label: 'Active Volunteers', 
      value: '1,200+', 
      icon: ShieldCheckIcon,
      description: 'Dedicated helpers',
      color: 'from-charity-400 to-charity-600'
    },
  ]

  const programs = [
    {
      title: 'Education Support',
      description: 'Providing quality education and scholarships to underprivileged children',
      impact: '500 children educated',
      icon: AcademicCapIcon,
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop',
      badge: 'Ongoing'
    },
    {
      title: 'Healthcare Access',
      description: 'Free medical camps and healthcare services for rural communities',
      impact: '2,000 patients treated',
      icon: HeartIcon,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop',
      badge: 'Emergency'
    },
    {
      title: 'Emergency Relief',
      description: 'Rapid response for natural disasters and humanitarian crises',
      impact: '5,000 families supported',
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      badge: 'Critical'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Beneficiary Mother',
      content: 'Thanks to Helping Hands, my daughter received a scholarship and is now studying medicine. This organization changed our lives forever.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5
    },
    {
      name: 'Dr. Karim Rahman',
      role: 'Volunteer Doctor',
      content: 'Volunteering with Helping Hands has been the most rewarding experience. The impact we make together is incredible.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      role: 'Regular Donor',
      content: 'I trust Helping Hands completely. They are transparent about fund usage and I can see the real impact of my donations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-charity-50 via-orange-50 to-amber-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        
        <div className="container-responsive relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center min-h-[600px] py-20">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge variant="charity" className="text-sm font-medium px-3 py-1">
                  🎯 Making Impact Since 2020
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  <span className="block">Transform Lives</span>
                  <span className="block text-gradient">Through Giving</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Together we can make a difference. Join us in supporting education, healthcare, and emergency relief for communities across Bangladesh.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl" variant="glow" className="group">
                  <Link href="/donate">
                    <HeartSolidIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Donate Now
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <Link href="/volunteer" className="group">
                    <UserGroupIcon className="h-5 w-5 mr-2" />
                    Become a Volunteer
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>100% Transparent</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Tax Deductible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Secure Payments</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative rounded-3xl overflow-hidden shadow-charity-lg">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="Charity helping hands"
                  width={600}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-charity-600">৳50,000</p>
                          <p className="text-sm text-gray-600">Raised this week</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">156 Donors</p>
                          <p className="text-sm text-gray-600">This month</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-charity-500 text-white p-4 rounded-2xl shadow-lg animate-float">
                <HeartSolidIcon className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white relative">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every donation creates a ripple effect of positive change in communities across Bangladesh.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className={`group hover:shadow-charity-lg transition-all duration-300 hover:-translate-y-2 card-hover animate-fade-in animation-delay-${index * 100}`}>
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl lg:text-4xl font-bold text-gray-900 animate-count-up">
                        {stat.value}
                      </p>
                      <p className="font-semibold text-gray-700">{stat.label}</p>
                      <p className="text-sm text-gray-500">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Key Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support across education, healthcare, and emergency relief initiatives.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Card key={program.title} className={`group hover:shadow-charity-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in animation-delay-${index * 200}`}>
                  <div className="relative">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={program.badge === 'Emergency' ? 'destructive' : program.badge === 'Critical' ? 'warning' : 'success'}
                        className="shadow-sm"
                      >
                        {program.badge}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-charity-600" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-charity-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{program.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="charity" className="text-xs">
                          {program.impact}
                        </Badge>
                        <Button asChild size="sm" variant="ghost" className="group/btn">
                          <Link href={`/programs/${program.title.toLowerCase().replace(' ', '-')}`}>
                            Learn More
                            <ArrowRightIcon className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/programs">
                View All Programs
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been transformed through our collective efforts.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`hover:shadow-charity transition-shadow duration-300 animate-fade-in animation-delay-${index * 100}`}>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-charity relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-responsive relative">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Join thousands of compassionate individuals who are creating positive change in Bangladesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary" className="group">
                <Link href="/donate">
                  <HeartSolidIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Donating
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-charity-600">
                <Link href="/volunteer" className="group">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  Join as Volunteer
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              {[
                { label: 'Active Donors', value: '5,200+' },
                { label: 'Monthly Impact', value: '৳2.5L+' },
                { label: 'Success Stories', value: '850+' },
                { label: 'Partner NGOs', value: '25+' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}