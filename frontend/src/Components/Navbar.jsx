import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for token changes (login/logout from other tabs)
  useEffect(() => {
    const syncToken = () => setToken(localStorage.getItem('token'));
    window.addEventListener('storage', syncToken);
    return () => window.removeEventListener('storage', syncToken);
  }, []);

  // Update token when route changes (fixes navbar not updating after login)
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Code Gen</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {token && (
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `text-lg font-semibold ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                }
                end
              >
                Home
              </NavLink>
            )}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-semibold ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              About
            </NavLink>
            <div className="flex space-x-4 ml-6">
              {!token ? (
                <>
                  <Link to="/login" className="py-2 px-4 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition">Login</Link>
                  <Link to="/signup" className="py-2 px-4 bg-green-500 text-white text-sm rounded-full hover:bg-green-600 transition">Sign Up</Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition"
                >
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white border-t border-gray-200 shadow-lg flex flex-col h-full">
          <div className="flex-1 px-4 py-8 flex flex-col space-y-4">
            {token && (
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `block py-2 text-lg font-semibold ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                }
                end
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            )}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 text-lg font-semibold ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="block py-2 text-base bg-blue-500 text-white rounded-full text-center hover:bg-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block py-2 text-base bg-green-500 text-white rounded-full text-center hover:bg-green-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="block py-2 text-base bg-red-500 text-white rounded-full text-center hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;