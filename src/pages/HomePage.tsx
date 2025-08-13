import { Link } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import { CategoryCard } from '@/components/CategoryCard';
import { serviceCategories } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
          Find Affordable Medical Care
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Compare cash prices for medical services in your area. Save money on healthcare by making informed decisions.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* Category Section */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Self Pay Medical Services</h2>
          <Link to="/services">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-muted/30 rounded-lg p-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-red-500">1</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Search</h3>
            <p className="text-muted-foreground">
              Enter a medical service and your location to find providers in your area.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-red-500">2</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Compare</h3>
            <p className="text-muted-foreground">
              View side-by-side price comparisons from different providers.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-red-500">3</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Save</h3>
            <p className="text-muted-foreground">
              Choose the best option for your needs and budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}