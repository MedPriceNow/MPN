import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

// Top 10 US cities with their images and state
const topCities = [
  {
    name: 'New York',
    state: 'NY',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop',
    providerCount: 12,
    averageSavings: '45%'
  },
  {
    name: 'Los Angeles',
    state: 'CA',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&auto=format&fit=crop',
    providerCount: 14,
    averageSavings: '38%'
  },
  {
    name: 'Chicago',
    state: 'IL',
    image: '/images/Chicagoskyline.jpg',
    providerCount: 11,
    averageSavings: '42%'
  },
  {
    name: 'Houston',
    state: 'TX',
    image: '/images/Houstonskyline.jpg',
    providerCount: 9,
    averageSavings: '36%'
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    image: '/images/Phoenixskyline.jpg',
    providerCount: 8,
    averageSavings: '34%'
  },
  {
    name: 'Philadelphia',
    state: 'PA',
    image: '/images/Chicagoskyline.jpg',
    providerCount: 10,
    averageSavings: '41%'
  },
  {
    name: 'San Antonio',
    state: 'TX',
    image: 'https://images.unsplash.com/photo-1539975611936-f0d1221cfd16?w=800&auto=format&fit=crop',
    providerCount: 7,
    averageSavings: '33%'
  },
  {
    name: 'San Diego',
    state: 'CA',
    image: '/images/SanDiego.jpg',
    providerCount: 8,
    averageSavings: '39%'
  },
  {
    name: 'Dallas',
    state: 'TX',
    image: '/images/Dallasskyline.jpg',
    providerCount: 9,
    averageSavings: '37%'
  },
  {
    name: 'San Jose',
    state: 'CA',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=800&auto=format&fit=crop',
    providerCount: 6,
    averageSavings: '32%'
  }
];

export default function CitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top Cities</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Find medical services and compare cash prices in the top 10 most populated cities in the United States.
        Select a city to see available services and providers.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topCities.map((city, index) => (
          <Card key={index} className="overflow-hidden h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={city.image} 
                alt={`${city.name}, ${city.state}`}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center mb-1">
                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                <CardTitle className="text-xl">{city.name}, {city.state}</CardTitle>
              </div>
              <CardDescription>
                {city.providerCount} healthcare providers
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-sm mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Avg. Savings:</span>
                  <span className="font-medium text-green-600 dark:text-green-500">{city.averageSavings}</span>
                </div>
              </div>
              <Link 
                to={`/services?location=${city.name.toLowerCase().replace(' ', '-')}`} 
                className="w-full block mt-auto"
              >
                <Button variant="outline" className="w-full">
                  Browse Services
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}