import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">404</h1>
      <p className="text-2xl font-medium mb-6">Page not found</p>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button size="lg">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}