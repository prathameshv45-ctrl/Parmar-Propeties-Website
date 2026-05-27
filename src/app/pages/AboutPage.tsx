import { Building2, Award, Users, Shield } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: 'var(--pp-bg)' }}>
      <div
        className="py-20 text-center text-white"
        style={{
          backgroundColor: 'var(--pp-navy)',
          backgroundImage: 'linear-gradient(135deg, var(--pp-navy) 0%, var(--pp-navy-mid) 100%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="mb-4" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '48px' }}>
            About Parmar Properties
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--pp-primary-light)', maxWidth: '700px', margin: '0 auto' }}>
            South Mumbai's most trusted real estate partner for over a decade
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="mb-6" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}>
              Our Story
            </h2>
            <div className="space-y-4" style={{ fontSize: '15px', color: 'var(--pp-text-muted)', lineHeight: 1.7 }}>
              <p>
                Founded in 2016, Parmar Properties has been at the forefront of South Mumbai's real estate landscape,
                helping thousands of families find their dream homes in the most sought-after localities.
              </p>
              <p>
                With deep roots in areas like Byculla, Parel, Lalbaug, Prabhadevi, and NM Joshi Marg, we bring
                unparalleled local expertise and market insights to every transaction.
              </p>
              <p>
                Our commitment to transparency, verified listings, and customer satisfaction has made us the preferred
                choice for home buyers and sellers across South Mumbai.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Building2, number: '500+', label: 'Properties Listed' },
              { icon: Users, number: '1000+', label: 'Happy Families' },
              { icon: Award, number: '10+', label: 'Years of Excellence' },
              { icon: Shield, number: '100%', label: 'Verified Listings' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[var(--radius-card)] text-center"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--pp-primary)' }} />
                <p
                  className="mb-2"
                  style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '28px', color: 'var(--pp-primary)' }}
                >
                  {stat.number}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--pp-text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[var(--radius-card)] p-12" style={{ boxShadow: 'var(--shadow-card)' }}>
          <h2 className="mb-8 text-center" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '32px', color: 'var(--pp-text)' }}>
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust & Transparency',
                description: 'Every listing is verified and RERA registered. No hidden costs, no surprises.',
              },
              {
                title: 'Local Expertise',
                description: '10+ years of deep understanding of South Mumbai real estate market dynamics.',
              },
              {
                title: 'Customer First',
                description: 'Your satisfaction is our success. We go the extra mile to help you find the perfect home.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="mb-3" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', color: 'var(--pp-primary)' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--pp-text-muted)', lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
