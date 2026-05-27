import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <ScrollReveal>
      <div className="min-h-screen pt-16 flex items-center justify-center" style={{ backgroundColor: 'var(--pp-bg)' }}>
        <div className="w-full max-w-md px-6 py-12">
          <div className="bg-white rounded-[var(--radius-card)] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="text-center mb-8">
              <h1
                className="mb-2"
                style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '28px', color: 'var(--pp-text)' }}
              >
                Welcome Back
              </h1>
              <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>
                Login to your Parmar Properties account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                    style={{ fontSize: '15px' }}
                    required
                  />
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--pp-text-muted)' }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2"
                  style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                    style={{ fontSize: '15px' }}
                    required
                  />
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                    style={{ color: 'var(--pp-text-muted)' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" style={{ color: 'var(--pp-text-muted)' }} />
                    ) : (
                      <Eye className="w-5 h-5" style={{ color: 'var(--pp-text-muted)' }} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded accent-[var(--pp-primary)]" />
                  <span style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="transition-colors hover:text-[var(--pp-primary-dark)]"
                  style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-primary)' }}
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white transition-colors hover:bg-[var(--pp-primary-dark)]"
                style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="transition-colors hover:text-[var(--pp-primary-dark)]"
                  style={{ fontWeight: 600, color: 'var(--pp-primary)' }}
                >
                  Sign up
                </Link>
              </p>
            </div>

            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--pp-border)]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className="px-4 bg-white"
                  style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}
                >
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="py-3 px-4 rounded-[var(--radius-btn)] border border-[var(--pp-border)] transition-colors hover:bg-[var(--pp-bg)] flex items-center justify-center gap-2"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="py-3 px-4 rounded-[var(--radius-btn)] border border-[var(--pp-border)] transition-colors hover:bg-[var(--pp-bg)] flex items-center justify-center gap-2"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
