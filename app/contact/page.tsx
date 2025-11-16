export default function Contact() {
  return (
    <div className="min-h-screen bg-white md:ml-64 p-8 md:p-16 pt-20 md:pt-16">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold mb-8">Contact</h1>
        
        <div className="space-y-4 text-sm text-gray-800">
          <p>For inquiries, commissions, or collaborations:</p>
          
          <div className="space-y-2">
            <div>
              <span className="text-gray-600">Email:</span>{' '}
              <a href="mailto:hello@konradgalan.com" className="hover:text-red-500 transition-colors">
                galankonrad@gmail.com
              </a>
            </div>
            
            <div>
              <span className="text-gray-600">Instagram:</span>{' '}
              <a 
                href="https://instagram.com/konisupertramp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                @konisupertramp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

