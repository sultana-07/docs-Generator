import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">About Code Gen</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Code Gen is a modern documentation generator that helps developers quickly generate, view, and share documentation for their codebases. 
          Simply connect your GitHub repository, browse your project files, and generate beautiful, AI-powered documentation with a single click.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1 flex flex-col items-center">
            <svg className="w-14 h-14 text-blue-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 013 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
            </svg>
            <h2 className="text-xl font-semibold mb-1">Easy to Use</h2>
            <p className="text-gray-600 text-center">Paste your GitHub repo link and generate docs instantly. No setup required.</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <svg className="w-14 h-14 text-green-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18" />
            </svg>
            <h2 className="text-xl font-semibold mb-1">AI Powered</h2>
            <p className="text-gray-600 text-center">Leverage AI to generate clear, concise, and accurate documentation for your code.</p>
          </div>
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

export default About;