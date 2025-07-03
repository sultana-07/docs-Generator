import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full bg-white border-t shadow-inner mt-8 pt-8 pb-4">
    <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
      {/* Top: Brand & Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
          <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          </svg>
          <span>Code Gen</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 text-sm">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <a href="https://github.com/sultana-07" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">GitHub</a>
         
          <span className="hidden md:inline">|</span>
          <span className="text-gray-400">&copy; {new Date().getFullYear()} Code Gen. All rights reserved.</span>
        </div>
        <div className="flex space-x-3">
          <a href="https://github.com/sultana-07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="w-6 h-6 text-gray-500 hover:text-blue-600 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.56 22 16.75 22 12.26 22 6.58 17.52 2 12 2z"/>
            </svg>
          </a>
         
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>
      {/* Policies and Terms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-sm">
        <div>
          <h3 className="font-bold text-blue-700 mb-2">Privacy Policy</h3>
          <p>
            We respect your privacy. Code Gen does not store your code or documentation. All processing is done securely and temporarily. We do not share your data with third parties. For analytics, we may collect anonymized usage data to improve our service.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-blue-700 mb-2">Terms of Service</h3>
          <p>
            By using Code Gen, you agree to use the service for lawful purposes only. You are responsible for ensuring you have the rights to access and generate documentation for any code you provide. Code Gen is provided as-is, without warranty of any kind.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-blue-700 mb-2">Our Services</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>AI-powered code documentation</li>
            <li>Instant GitHub repo browsing</li>
            <li>Modern, responsive UI</li>
            <li>Copy & export docs easily</li>
            <li>Open source & free to use</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;