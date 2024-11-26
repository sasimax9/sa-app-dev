import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Service Street</p>
            <p>City, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@servicedirectory.com</p>
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
              <Input type="email" placeholder="Your Email" className="mb-2" />
              <Textarea placeholder="Your Message" className="mb-2" />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Service Directory. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Disclaimer: This is a sample disclaimer text. Please replace with your actual disclaimer.
          </p>
        </div>
      </div>
    </footer>
  )
}

