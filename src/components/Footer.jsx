import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
          <h3 className="text-white text-lg font-bold mb-3">CS <span className="text-purple-400">—</span> Ticket System</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            A modern customer support platform built to streamline ticket management and improve response times for your team.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Values</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Product & Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Social Links</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-500">
        &copy; 2024 CS Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
