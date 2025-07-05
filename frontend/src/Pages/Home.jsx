import React, { useState, useRef } from 'react';
import axios from 'axios';

const FolderIcon = () => (
  <svg
    className="inline-block mr-2 w-5 h-5 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
    />
  </svg>
);

const FileIcon = () => (
  <svg
    className="inline-block mr-2 w-4 h-4 text-gray-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7V3a1 1 0 011-1h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1v-4"
    />
  </svg>
);

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <svg className="animate-spin h-8 w-8 text-blue-500" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </div>
);

const Home = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const [url, setUrl] = useState('');
  const [repo, setRepo] = useState([]);
  const [currentPath, setCurrentPath] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [file, setFile] = useState([]);
  const [content, setContent] = useState('');
  const [document, setDocument] = useState('');
  const [loading, setLoading] = useState(false);
  const [repoLoading, setRepoLoading] = useState(false);
  const [copyMsg, setCopyMsg] = useState('');

  // Refs for scrolling
  const codeRef = useRef(null);
  const docRef = useRef(null);

  // Show copy message at top for 2 seconds
  const handleCopy = () => {
    navigator.clipboard.writeText(document);
    setCopyMsg('Documentation copied successfully!');
    setTimeout(() => setCopyMsg(''), 2000);
  };

  // Fetch repo and tree
  const fetchRepos = async (url) => {
    setCurrentPath('');
    setHistory([]);
    setHistoryIndex(-1);
    setContent('');
    setDocument('');
    setRepoLoading(true);
    try {
      const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)(?:\/|$)/);
      if (!match) {
        setRepoLoading(false);
        console.error('Invalid GitHub URL');
        return;
      }
      const owner = match[1];
      const repoName = match[2];

      // Get default branch
      const repoRes = await axios.get(`https://api.github.com/repos/${owner}/${repoName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      const branch = repoRes.data.default_branch || 'main';

      // Get branch info for tree SHA
      const branchRes = await axios.get(`https://api.github.com/repos/${owner}/${repoName}/branches/${branch}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      const sha = branchRes.data.commit.commit.tree.sha;

      // Get full tree recursively
      const treeRes = await axios.get(`https://api.github.com/repos/${owner}/${repoName}/git/trees/${sha}?recursive=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      });
      setRepo(treeRes.data.tree);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
    setRepoLoading(false);
  };

  // Get current folder/file list based on currentPath
  const getCurrentItems = () => {
    if (!repo.length) return [];
    const items = repo.filter(item => {
      if (currentPath === '') {
        return !item.path.includes('/');
      }
      const prefix = currentPath + '/';
      const rest = item.path.slice(prefix.length);
      return item.path.startsWith(prefix) && rest && !rest.includes('/');
    });
    return items;
  };

  // Navigation handlers
  const handleOpenFolder = (item) => {
    const newPath = item.path;
    const newHistory = history.slice(0, historyIndex + 1);
    setHistory([...newHistory, newPath]);
    setHistoryIndex(newHistory.length);
    setCurrentPath(newPath);
    setContent('');
    setDocument('');
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const prevPath = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(prevPath);
      setContent('');
      setDocument('');
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const nextPath = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(nextPath);
      setContent('');
      setDocument('');
    }
  };

  const handleRoot = () => {
    setCurrentPath('');
    setHistory([]);
    setHistoryIndex(-1);
    setContent('');
    setDocument('');
  };

  // File click
  const fetchfile = async (sha, type, url) => {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    const owner = match[1];
    const repoName = match[2];

    if (type === 'blob') {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repoName}/git/blobs/${sha}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );
        const decodedContent = atob(response.data.content);
        setContent(decodedContent);
        setDocument('');
        if (codeRef.current) codeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
      return;
    }
  };

  const handleGenerateDocs = async () => {
    if (docRef.current) {
      docRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setLoading(true);
    setDocument('');
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/docs/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setDocument(data.documentation);
    } catch (error) {
      setDocument('Failed to generate documentation.');
      console.error('Error generating documentation:', error);
    }
    setLoading(false);
  };

  // UI
  const items = getCurrentItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col relative">
      {/* Copy Success Message */}
      {copyMsg && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-2 rounded-full shadow-lg font-semibold animate-fade-in">
            {copyMsg}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-white shadow-md border-b">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 w-full md:w-96 border outline-none rounded-2xl text-sm shadow-sm"
          placeholder="Enter your GitHub repo link..."
        />
        <button
          onClick={() => fetchRepos(url)}
          className="p-2 px-6 rounded-xl text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center min-w-[100px]"
          disabled={repoLoading}
        >
          {repoLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : (
            "Submit"
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full bg-white border-r shadow-sm p-4 flex flex-col">
          <div className="flex items-center mb-2 gap-2">
            <button
              onClick={handleBack}
              disabled={historyIndex <= 0}
              className={`p-2 rounded-full ${historyIndex <= 0 ? 'bg-gray-200 text-gray-400' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
              title="Back"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleForward}
              disabled={historyIndex === -1 || historyIndex >= history.length - 1}
              className={`p-2 rounded-full ${historyIndex === -1 || historyIndex >= history.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
              title="Forward"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={handleRoot}
              className="ml-2 px-3 py-1 rounded bg-gray-100 hover:bg-blue-100 text-blue-600 text-xs font-semibold"
            >
              Root
            </button>
            <span className="ml-2 text-xs text-gray-500 truncate max-w-[120px]">{currentPath || 'root'}</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {repoLoading ? (
              <div className="flex items-center justify-center h-full">
                <LoadingSpinner />
              </div>
            ) : repo.length === 0 ? (
              <div className="text-gray-400">No folder found</div>
            ) : (
              <ul>
                {items.map((item) =>
                  item.type === 'tree' ? (
                    <li
                      key={item.sha}
                      className="flex items-center cursor-pointer px-2 py-1 rounded hover:bg-blue-50 transition font-medium text-gray-700"
                      onClick={() => handleOpenFolder(item)}
                    >
                      <FolderIcon />
                      {item.path.split('/').pop()}
                    </li>
                  ) : (
                    <li
                      key={item.sha}
                      className="flex items-center cursor-pointer px-2 py-1 rounded hover:bg-blue-100 transition text-gray-800"
                      onClick={() => fetchfile(item.sha, item.type, url)}
                    >
                      <FileIcon />
                      {item.path.split('/').pop()}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </aside>

        {/* Code Section */}
        <main
          ref={codeRef}
          className="md:w-2/5 w-full border-r bg-gray-50 flex flex-col"
          style={{ maxHeight: 'calc(100vh - 80px)', height: 'calc(100vh - 80px)' }}
        >
          <div className="flex justify-between items-center p-4 border-b bg-white">
            <h2 className="text-xl font-semibold">Code</h2>
            <button
              onClick={handleGenerateDocs}
              className="p-2 px-4 rounded-xl text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition"
              disabled={!content}
            >
              Generate Docs
            </button>
          </div>
          <div className="flex-1 overflow-auto p-2">
            <pre className="w-full h-full bg-black text-green-200 rounded-lg p-4 text-xs md:text-sm overflow-auto"
              style={{ minHeight: '300px', maxHeight: 'calc(100vh - 180px)' }}>
              {content || 'Select a file to view its code.'}
            </pre>
          </div>
        </main>

        {/* Documentation Section */}
        <section
          ref={docRef}
          className="md:w-2/5 w-full bg-white flex flex-col"
          style={{ maxHeight: 'calc(100vh - 80px)', height: 'calc(100vh - 80px)' }}
        >
          <div className="p-4 border-b bg-white flex justify-between items-center">
            <h2 className="text-xl font-semibold">Documentation</h2>
            <button
              onClick={handleCopy}
              className="p-2 px-4 rounded-xl text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition"
            >Copy</button>
          </div>
          <div className="flex-1 overflow-auto p-2">
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <LoadingSpinner />
              </div>
            ) : (
              <pre className="w-full h-full bg-gray-100 rounded-lg p-4 text-gray-800 text-xs md:text-sm overflow-auto"
                style={{ minHeight: '300px', maxHeight: 'calc(100vh - 180px)' }}>
                {document || 'Generated documentation will appear here.'}
              </pre>
            )}
          </div>
        </section>
      </div>
      {/* Animation for fade-in */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeInDown 0.5s;
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;