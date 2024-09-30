import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  FacebookIcon,
  TwitterIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-4">
            Get the latest news and updates right in your inbox.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded mb-2 text-gray-800"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center mb-2">
            <LocationMarkerIcon className="h-6 w-6 text-blue-500 mr-2" />
            <span>1234 Street Name, City, State</span>
          </div>
          <div className="flex items-center mb-2">
            <PhoneIcon className="h-6 w-6 text-blue-500 mr-2" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center mb-2">
            <MailIcon className="h-6 w-6 text-blue-500 mr-2" />
            <span>info@company.com</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-600 pt-5">
        <p>&copy; 2024 Bustix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
 