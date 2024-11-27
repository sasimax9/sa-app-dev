import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Rajahmundry.</p>
            <p>East Godavari District.</p>
            <p>Phone: +91</p>
            <p>Email: info@quickservice.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Feedback / Complaints</h3>
            <form>
              <Input type="phone number" placeholder="Your phone number" className="mb-2" />
              <Textarea placeholder="Your Message" className="mb-2" />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Quick Service. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Disclaimer: The information, services, and connections provided by our website are intended solely for general informational purposes. We facilitate access to skilled workers, freelancers, and contractors, but we do not directly employ or manage these service providers. 



By using our website, you acknowledge and agree that we are not responsible for any issues, misunderstandings, or conflicts that occur as a result of your interactions with service providers accessed through our platform..
          </p>
        </div>
      </div>
    </footer>
  )
}

