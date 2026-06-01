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
    <div className="md:hidden fixed bottom-4 left-4 right-4 liquid-glass z-50 rounded-2xl shadow-hero border border-white/10 overflow-hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item, index) => {
          const isActive = path === item.to || (path === '' && item.to === '/');

          if (item.isMain) {
            return (
              <Link key={index} to={item.to} className="flex flex-col items-center justify-center -mt-6">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-black shadow-lg shadow-black/30 btn-gold-shimmer transition-transform hover:scale-105">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] mt-1 font-medium text-white">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link key={index} to={item.to} className="flex flex-col items-center justify-center w-16">
              <item.icon 
                className={`w-6 h-6 transition-colors ${isActive ? 'text-primary' : 'text-white/50 hover:text-white'}`} 
              />
              {isActive && (
                <span className="text-[10px] mt-1 font-medium text-primary">
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
