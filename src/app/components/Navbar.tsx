import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Developers', path: '/developers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.2)]' : ''
      }`}
      style={{
        backgroundColor: 'var(--pp-navy-mid)',
        height: '64px',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '24px', color: 'var(--pp-primary)' }}>
            PARMAR
          </div>
          <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '24px', color: 'white', marginLeft: '6px' }}>
            PROPERTIES
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative py-2 transition-colors"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                color: isActive(link.path) ? 'var(--pp-primary)' : 'white',
              }}
            >
              {link.name}
              {isActive(link.path) && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: 'var(--pp-primary)' }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-5 py-2.5 text-white transition-colors hover:text-[var(--pp-primary)]"
            style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px' }}
          >
            Login
          </Link>
          <Link
            to="/add-property"
            className="px-6 py-2.5 rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white transition-colors hover:bg-[var(--pp-primary-dark)]"
            style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}
          >
            Post Property
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 py-4 px-6"
          style={{ backgroundColor: 'var(--pp-navy-mid)', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 border-b border-white/10"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '15px',
                color: isActive(link.path) ? 'var(--pp-primary)' : 'white',
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2.5 text-center text-white border border-white/20 rounded-[var(--radius-btn)]"
              style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px' }}
            >
              Login
            </Link>
            <Link
              to="/add-property"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2.5 text-center rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white"
              style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px' }}
            >
              Post Property
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
