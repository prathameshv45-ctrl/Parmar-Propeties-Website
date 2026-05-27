import { Link, useLocation } from 'react-router';
import { Home, Search, PlusCircle, Heart, User } from 'lucide-react';

export function MobileBottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Search, label: 'Search', to: '/properties' },
    { icon: PlusCircle, label: 'Add+', to: '/add-property', isMain: true },
    { icon: Heart, label: 'Saved', to: '/dashboard' }, // using dashboard for saved as mock
    { icon: User, label: 'Profile', to: '/login' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white z-50 pb-safe" style={{ boxShadow: '0 -2px 12px rgba(0,0,0,0.08)' }}>
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => {
          const isActive = path === item.to || (path === '' && item.to === '/');

          if (item.isMain) {
            return (
              <Link key={index} to={item.to} className="flex flex-col items-center justify-center -mt-6">
                <div className="bg-[var(--pp-primary)] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] mt-1 font-medium text-[var(--pp-text)]">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link key={index} to={item.to} className="flex flex-col items-center justify-center w-16">
              <item.icon 
                className={`w-6 h-6 ${isActive ? 'text-[var(--pp-primary)]' : 'text-gray-400'}`} 
              />
              {isActive && (
                <span className="text-[10px] mt-1 font-medium text-[var(--pp-primary)]">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
