import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">MedPriceNow</h3>
            <p className="text-sm text-muted-foreground">
              Helping you find affordable healthcare through price transparency.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary">Services</Link></li>
              <li><Link to="/cities" className="text-sm hover:text-primary">Cities</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MedPriceNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}