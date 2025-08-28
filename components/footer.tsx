import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/blog" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/ezee-logo.png"
                alt="Ezee Admissions Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold">Ezee Admissions</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for ethical college admissions and
              scholarships. Merit-driven guidance from certified experts with
              44+ years of experience.
            </p>

            {/* Newsletter Signup 
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white mb-1">Address:</p>
                <p className="text-sm">
                  Besides Saraswati Educare's EzeeStudy
                  <br />
                  Near Ramdev Jwellars
                  <br />
                  Lal Chakki Chowk
                  <br />
                  Ulhasnagar 4
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone:</p>
                <p className="text-sm">
                  +91 98340 72235
                  <br />
                  +91 95886 94935
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email:</p>
                <p className="text-sm">ezeeadmissions2025@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ezee Admissions. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Powered by{" "}
            <a
              href="https://mintingbrands.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              MintingBrands
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
