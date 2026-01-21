import Image from "next/image";
import {
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#EFFFF0] border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="ChargeFlow" width={42} height={42} />
              <span className="font-bold text-lg">CHARGEFLOW</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Powering India's EV Revolution <br /><br />
              ChargeFlow connects EV owners with charging station hosts
              across India. Find charging points, book slots, and power
              your journey seamlessly.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Home",
                "About Us",
                "Find Chargers",
                "Become a Host",
                "Pricing",
                "Contact Us",
              ].map((link) => (
                <li key={link} className="hover:text-[#29B605] cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "EV Charging",
                "Host Registration",
                "Customer Support",
                "How It Works",
                "Pricing Plans",
                "Mobile App",
              ].map((service) => (
                <li key={service} className="hover:text-[#29B605] cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <FiMapPin className="text-[#29B605]" />
                Sector 18, Noida, India
              </li>
              <li className="flex gap-2">
                <FiMail className="text-[#29B605]" />
                support@chargeflow.com
              </li>
              <li className="flex gap-2">
                <FiPhone className="text-[#29B605]" />
                +91-7887209295
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-4 text-[#29B605]">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <span>© 2025 ChargeFlow. All Rights Reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-[#29B605] cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-[#29B605] cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
