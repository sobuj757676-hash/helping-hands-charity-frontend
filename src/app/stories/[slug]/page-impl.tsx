export default function StoryDetail() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-2">A New Start</h1>
      <p className="text-gray-600 mb-6">Beneficiary • Education Support</p>
      <div className="prose max-w-none">
        <p>Story content with images and impact metrics.</p>
      </div>
      <div className="mt-6">
        <a className="px-4 py-2 rounded-md bg-charity-500 text-white" href="/donate">Support This Cause</a>
      </div>
    </div>
  )
}
