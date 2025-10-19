// Single source of truth for Home route. No duplicate /page files.
import SiteLayout from './(site)/layout'
import HomePage from './home'

export default function RootHome() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  )
}
