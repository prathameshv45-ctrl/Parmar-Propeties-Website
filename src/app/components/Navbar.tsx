import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Developers', path: '/developers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.2)] backdrop-blur-md"
      style={{
        backgroundColor: 'var(--pp-navy-mid)',
        height: '64px',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="flex items-center">
            <div className="font-display font-bold text-2xl text-primary">
              PARMAR
            </div>
            <div className="font-display font-semibold text-2xl text-white ml-1.5">
              PROPERTIES
            </div>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <Link
                to={link.path}
                className="relative py-2 transition-colors font-sans font-medium text-[15px]"
                style={{
                  color: isActive(link.path) ? 'var(--pp-primary)' : 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <span className="hover:text-white transition-colors">
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-active-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden md:flex items-center gap-4"
        >
          <Link
            to="/login"
            className="px-5 py-2.5 text-white transition-colors hover:text-primary font-sans font-medium text-[15px]"
          >
            Login
          </Link>
          <Link
            to="/add-property"
            className="px-6 py-2.5 rounded-btn bg-primary text-white transition-colors hover:bg-primary-dark font-display font-semibold text-[15px]"
          >
            Post Property
          </Link>
        </motion.div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 py-4 px-6 bg-navy-mid shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 border-b border-white/10 font-sans font-medium text-[15px]"
                style={{ color: isActive(link.path) ? 'var(--pp-primary)' : 'white' }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-5 py-2.5 text-center text-white border border-white/20 rounded-btn font-sans font-medium text-[15px]"
              >
                Login
              </Link>
              <Link
                to="/add-property"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 text-center rounded-btn bg-primary text-white font-display font-semibold text-[15px]"
              >
                Post Property
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
