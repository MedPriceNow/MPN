import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ServiceCard } from '@/components/ServiceCard';
import { serviceCategories, getServicesByCategory, searchServices, MedicalService } from '@/data/mockData';

export default function ServiceCategoriesPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeTab, setActiveTab] = useState(categoryParam || 'all');
  const [services, setServices] = useState<MedicalService[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Handle category filter
    if (categoryParam) {
      setActiveTab(categoryParam);
    }

    // Handle search results from location state (if coming from search)
    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
    }

    // Load services based on active tab and/or search query
    loadServices();
  }, [categoryParam, location.state, activeTab]);

  const loadServices = () => {
    let filteredServices: MedicalService[] = [];

    // If we have search results from navigation state
    if (location.state?.searchResults) {
      filteredServices = location.state.searchResults;
    } 
    // Otherwise filter by selected category
    else if (activeTab === 'all') {
      import('@/data/mockData').then(({ medicalServices }) => {
        filteredServices = medicalServices;
        setServices(filteredServices);
      });
      return;
    } else {
      filteredServices = getServicesByCategory(activeTab);
    }

    setServices(filteredServices);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Clear search when changing tabs
    if (location.state?.searchQuery) {
      location.state.searchQuery = '';
      location.state.searchResults = null;
      setSearchQuery('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Medical Services</h1>
      
      {searchQuery && (
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <p className="text-lg">
            Search results for: <span className="font-medium">"{searchQuery}"</span>
          </p>
          {location.state?.location && (
            <p className="text-sm text-muted-foreground mt-1">
              In location: {location.state.location}
            </p>
          )}
        </div>
      )}

      {!searchQuery && (
        <Tabs 
          defaultValue={activeTab} 
          value={activeTab} 
          onValueChange={handleTabChange}
          className="mb-8"
        >
          <TabsList className="mb-4 overflow-x-auto w-full justify-start">
            <TabsTrigger value="all">All Services</TabsTrigger>
            {serviceCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="col-span-full text-center py-12 text-muted-foreground">
            No services found. Please try another category or search term.
          </p>
        )}
      </div>
    </div>
  );
}