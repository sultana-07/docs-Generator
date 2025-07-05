
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-2 py-8">
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full p-6 md:p-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 text-center">
          Welcome to Code Gen
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">
          Instantly generate beautiful, AI-powered documentation for your codebase. 
          Connect your GitHub repository, browse your project files, and create clear, concise docs with a single click.
        </p>
        <div className="w-full flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 013 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Easy GitHub Integration</h2>
              <p className="text-gray-600 text-center">Paste your GitHub repo link and instantly browse your project structure, including all folders and files.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-green-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">AI-Powered Docs</h2>
              <p className="text-gray-600 text-center">Generate clear, accurate documentation for any file using advanced AI models. Save time and improve code understanding.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-yellow-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h8a2 2 0 002-2v-6" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Modern UI</h2>
              <p className="text-gray-600 text-center">Enjoy a clean, responsive interface for browsing, viewing code, and docs. Works beautifully on both desktop and mobile devices.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-purple-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Copy & Share</h2>
              <p className="text-gray-600 text-center">Copy generated docs with one click and share with your team or use in your own documentation files.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-pink-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h4v4m0-4V8" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Nested Folder View</h2>
              <p className="text-gray-600 text-center">Explore your repository with a nested folder structure, making it easy to find and select files in large projects.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9z" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Code Preview</h2>
              <p className="text-gray-600 text-center">Preview the code of any file directly in your browser with syntax highlighting and easy navigation.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-teal-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Fast & Secure</h2>
              <p className="text-gray-600 text-center">Your code is never stored. All documentation is generated on the fly, keeping your data safe and private.</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-14 h-14 text-red-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
              </svg>
              <h2 className="text-xl font-semibold mb-1">Export Docs</h2>
              <p className="text-gray-600 text-center">Export your generated documentation for use in your own README files or wikis.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-12">
          <Link
            to="/signup"
            className="mt-4 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full shadow transition"
          >
            Get Started
          </Link>
          <div className="mt-6 text-gray-500 text-base text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </div>
        <div className="mt-12 w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">Why Choose Code Gen?</h3>
          <ul className="list-disc list-inside text-gray-600 text-center space-y-2">
            <li>Save hours writing and maintaining documentation.</li>
            <li>Improve onboarding for new developers with instant, up-to-date docs.</li>
            <li>Works with any public GitHub repository.</li>
            <li>Modern, mobile-friendly design for productivity on any device.</li>
            <li>Open source and free to use.</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Made with ❤️ by the Code Gen Team</h3>
          <p className="text-gray-500 text-sm">
            Open source &nbsp;|&nbsp; <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;