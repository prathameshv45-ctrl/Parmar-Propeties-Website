import { Navbar } from './Navbar';
import { useLocation } from 'react-router';
import { ErrorBoundary } from './ErrorBoundary';
import { MobileBottomNav } from './MobileBottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {!isHome && <Navbar />}
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
      <MobileBottomNav />
    </>
  );
}
