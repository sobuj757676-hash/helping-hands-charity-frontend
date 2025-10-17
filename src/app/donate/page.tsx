export default function DonatePage() {
  return (
    <div className="container-responsive py-12">
      <h1 className="text-4xl font-bold mb-6">Donate</h1>
      <form className="max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <div className="grid grid-cols-4 gap-2">
            {[25,50,100,250].map(a => (
              <button key={a} type="button" className="px-3 py-2 rounded-md border">${a}</button>
            ))}
            <input className="col-span-4 border rounded-md px-3 py-2" placeholder="Custom amount" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Frequency</label>
          <div className="flex gap-3">
            {['One-time','Monthly','Yearly'].map(f => (
              <button key={f} type="button" className="px-3 py-2 rounded-md border">{f}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <select className="border rounded-md px-3 py-2 w-full">
            <option>Credit/Debit Card</option>
            <option>Bank Transfer</option>
            <option>Mobile Banking (bKash)</option>
          </select>
        </div>
        <button className="px-4 py-2 rounded-md bg-charity-500 text-white">Proceed to Pay</button>
      </form>
    </div>
  )
}
