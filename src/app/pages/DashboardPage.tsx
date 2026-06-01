import { Link } from 'react-router';
import { Home, Heart, MessageSquare, User, LogOut, Edit, Trash2, Eye } from 'lucide-react';

export function DashboardPage() {
  const myListings = [
    { id: '1', title: 'Monte South', status: 'Active', views: 245, enquiries: 12 },
    { id: '2', title: 'Darshan Promesa', status: 'Inactive', views: 128, enquiries: 5 },
  ];

  const enquiries = [
    { id: '1', sender: 'John Doe', property: 'Monte South', date: '2026-05-25', message: 'Interested in viewing...' },
    { id: '2', sender: 'Jane Smith', property: 'Darshan Promesa', date: '2026-05-24', message: 'What is the price...' },
  ];

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <h1 className="mb-8" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}>
          Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="liquid-glass border border-white/5 rounded-[var(--radius-card)] p-4 shadow-card">
              <nav className="space-y-1">
                {[
                  { icon: User, label: 'My Profile', path: '/dashboard/profile' },
                  { icon: Home, label: 'My Listings', path: '/dashboard', active: true },
                  { icon: Heart, label: 'Saved Properties', path: '/dashboard/saved' },
                  { icon: MessageSquare, label: 'Enquiries', path: '/dashboard/enquiries' },
                  { icon: LogOut, label: 'Logout', path: '/logout' },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-[var(--radius-btn)] transition-colors ${
                      item.active
                        ? 'bg-[var(--pp-primary-light)] text-[var(--pp-primary)]'
                        : 'text-[var(--pp-text-muted)] hover:bg-white/5'
                    }`}
                    style={{ fontSize: '15px', fontWeight: item.active ? 600 : 400 }}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            <div className="liquid-glass border border-white/5 rounded-[var(--radius-card)] p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h2 style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px', color: 'var(--pp-text)' }}>
                  My Listings
                </h2>
                <Link
                  to="/add-property"
                  className="px-5 py-2.5 rounded-[var(--radius-btn)] bg-primary text-black transition-all hover:bg-primary-dark btn-gold-shimmer"
                  style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px' }}
                >
                  Add Property
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-3 px-4" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                        Property
                      </th>
                      <th className="text-left py-3 px-4" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                        Status
                      </th>
                      <th className="text-left py-3 px-4" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                        Views
                      </th>
                      <th className="text-left py-3 px-4" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                        Enquiries
                      </th>
                      <th className="text-left py-3 px-4" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--pp-text)' }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myListings.map((listing) => (
                      <tr key={listing.id} className="border-b border-white/5">
                        <td className="py-4 px-4" style={{ fontSize: '15px', color: 'var(--pp-text)' }}>
                          {listing.title}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full ${
                              listing.status === 'Active'
                                ? 'bg-[var(--pp-success)]/10 text-[var(--pp-success)]'
                                : 'bg-[var(--pp-text-muted)]/10 text-[var(--pp-text-muted)]'
                            }`}
                            style={{ fontSize: '13px', fontWeight: 600 }}
                          >
                            {listing.status}
                          </span>
                        </td>
                        <td className="py-4 px-4" style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>
                          <span className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-primary" />
                            {listing.views}
                          </span>
                        </td>
                        <td className="py-4 px-4" style={{ fontSize: '15px', color: 'var(--pp-text-muted)' }}>
                          <span className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            {listing.enquiries}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 rounded-[var(--radius-btn)] hover:bg-white/5 cursor-pointer">
                              <Edit className="w-4 h-4" style={{ color: 'var(--pp-text-muted)' }} />
                            </button>
                            <button className="p-2 rounded-[var(--radius-btn)] hover:bg-white/5 cursor-pointer">
                              <Trash2 className="w-4 h-4" style={{ color: 'rgba(239, 68, 68, 0.8)' }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="liquid-glass border border-white/5 rounded-[var(--radius-card)] p-6 shadow-card">
              <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20px', color: 'var(--pp-text)' }}>
                Recent Enquiries
              </h2>

              <div className="space-y-4">
                {enquiries.map((enquiry) => (
                  <div key={enquiry.id} className="p-4 rounded-lg border border-white/5 bg-white/5 hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--pp-text)' }}>
                          {enquiry.sender}
                        </p>
                        <p style={{ fontSize: '13px', color: 'var(--pp-text-muted)' }}>
                          {enquiry.property} • {enquiry.date}
                        </p>
                      </div>
                      <button
                        className="px-4 py-2 rounded-[var(--radius-btn)] bg-primary text-black transition-all hover:bg-primary-dark btn-gold-shimmer"
                        style={{ fontSize: '13px', fontWeight: 600 }}
                      >
                        Reply
                      </button>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>
                      {enquiry.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
