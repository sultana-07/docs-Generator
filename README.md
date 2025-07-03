# Code Gen

**Code Gen** is a modern, open-source web application that allows you to instantly generate beautiful, AI-powered documentation for your codebase. Connect your GitHub repository, browse your project files, and create clear, concise docs with a single click.

---

## Features

- 🌐 **GitHub Integration:** Paste your GitHub repo link and instantly browse your project structure.
- 📂 **Folder & File Explorer:** Navigate your repo with a clean, non-hierarchical folder view.
- 🧠 **AI-Powered Documentation:** Generate clear, accurate documentation for any file using advanced AI models.
- 💻 **Code Preview:** View code with syntax highlighting directly in your browser.
- 📋 **Copy & Export:** Copy generated docs or export for use in your own README files or wikis.
- 🔒 **Privacy First:** Your code is never stored; all documentation is generated on the fly.
- 📱 **Responsive Design:** Works beautifully on both desktop and mobile devices.
- 🆓 **Open Source:** Free to use and contribute.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express, OpenAI API (or similar for AI documentation generation)
- **Other:** GitHub REST API v3

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- GitHub Personal Access Token (for API access)
- OpenAI API Key (or your own AI backend)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/document-gen.git
cd document-gen


2. Setup the Backend
cd backend
npm install


Create a .env file in the backend folder:

OPENAI_API_KEY=your_openai_api_key
PORT=5000


GitHub Copilot
2. Setup the Backend
Create a .env file in the backend folder:

Start the backend server:
npm start

3. Setup the Frontend
cd ../frontend
npm install

Create a .env file in the frontend folder:
VITE_GITHUB_TOKEN=your_github_personal_access_token

Start the frontend development server:
npm run dev

4. Usage
Open http://localhost:5173 in your browser.
Paste your GitHub repository link and click Submit.
Browse your repo, select a file, and click Generate Docs.
Copy or export the generated documentation as needed.

Folder Structure

document-gen/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── main.jsx
│   │   └── ...
│   └── ...
│
└── [README.md](http://_vscodecontentref_/0)

API Endpoints
Backend
POST /api/docs/upload
Body: { content: "file content" }
Response: { documentation: "AI generated docs" }
Frontend
Uses GitHub REST API for repo and file browsing.
Privacy Policy
Code Gen does not store your code or documentation. All processing is done securely and temporarily. We do not share your data with third parties. For analytics, we may collect anonymized usage data to improve our service.

Terms of Service
By using Code Gen, you agree to use the service for lawful purposes only. You are responsible for ensuring you have the rights to access and generate documentation for any code you provide. Code Gen is provided as-is, without warranty of any kind.

Contributing
We welcome contributions! Please open issues or pull requests on GitHub.

License
This project is MIT Licensed.

Contact
GitHub: your-username
Email: support@codegen.com
Made with ❤️ by the Code Gen Team

Replace `your-username` and API keys with your actual details.
This README covers both backend and frontend setup,
```
