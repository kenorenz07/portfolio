"use client";

import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Github, Heart, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "/services#web-development" },
      { name: "Mobile Development", href: "/services#mobile-development" },
      { name: "Backend & API", href: "/services#backend-api" },
      { name: "Consulting", href: "/services#consulting" },
    ],
  },
];

const socialIcons = {
  Github,
  Linkedin,
  Mail,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/">
              <motion.h3
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Keno Renz Bacunawa
              </motion.h3>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Web & Mobile Developer with{" "}
              {personalInfo.yearsOfExperience} years of experience crafting
              exceptional digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                whileHover={{ y: -3 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                whileHover={{ y: -3 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Keno Renz Bacunawa. All rights
              reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart size={16} className="text-red-500" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
