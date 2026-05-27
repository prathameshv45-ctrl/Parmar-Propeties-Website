import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', formData);
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center" style={{ backgroundColor: 'var(--pp-bg)' }}>
      <div className="w-full max-w-md px-6 py-12">
        <div className="bg-white rounded-[var(--radius-card)] p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
          <div className="text-center mb-8">
            <h1
              className="mb-2"
              style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '28px', color: 'var(--pp-text)' }}
            >
              Create Account
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>
              Join Parmar Properties today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '15px' }}
                  required
                />
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{ color: 'var(--pp-text-muted)' }}
                />
              </div>
            </div>

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
                htmlFor="phone"
                className="block mb-2"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full pl-11 pr-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '15px' }}
                  required
                />
                <Phone
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2"
                style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-[var(--radius-btn)] border border-[var(--pp-border)] outline-none focus:border-[var(--pp-primary)]"
                  style={{ fontSize: '15px' }}
                  required
                />
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{ color: 'var(--pp-text-muted)' }}
                />
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded accent-[var(--pp-primary)]" required />
              <span style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>
                I agree to the{' '}
                <Link to="/terms" className="text-[var(--pp-primary)] hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[var(--pp-primary)] hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3 rounded-[var(--radius-btn)] bg-[var(--pp-primary)] text-white transition-colors hover:bg-[var(--pp-primary-dark)]"
              style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>
              Already have an account?{' '}
              <Link
                to="/login"
                className="transition-colors hover:text-[var(--pp-primary-dark)]"
                style={{ fontWeight: 600, color: 'var(--pp-primary)' }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
