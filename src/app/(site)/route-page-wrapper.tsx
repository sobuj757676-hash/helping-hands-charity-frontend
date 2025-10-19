import SiteLayout from './(site)/layout'
import HomePage from './page-impl'

export default function SiteHomeRoute() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  )
}
