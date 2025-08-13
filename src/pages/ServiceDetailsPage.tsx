import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PriceComparisonTable } from '@/components/PriceComparisonTable';
import { getServiceById, MedicalService, getCategoryById } from '@/data/mockData';

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState<MedicalService | null>(null);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    if (serviceId) {
      const serviceData = getServiceById(serviceId);
      if (serviceData) {
        setService(serviceData);
        
        // Get category name
        const categoryData = getCategoryById(serviceData.category);
        setCategory(categoryData?.name || '');
      }
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <Button onClick={() => navigate('/services')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)} 
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold">{service.name}</h1>
            {category && (
              <p className="text-muted-foreground mt-1">
                Category: {category}
              </p>
            )}
          </div>
        </div>
        
        <p className="text-lg mb-6">
          {service.description}
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Price Comparison</h2>
        <p className="text-muted-foreground mb-4">
          Compare prices from {service.providers.length} healthcare providers in your area
        </p>
        
        <PriceComparisonTable service={service} />
      </div>
      
      <div className="bg-muted/30 rounded-lg p-6 my-8">
        <h2 className="text-xl font-semibold mb-4">About This Service</h2>
        <p className="mb-4">
          Cash prices shown are the direct pay rates when paid upfront without insurance.
          These prices may vary depending on individual circumstances and additional services required.
        </p>
        <p className="mb-4">
          Always confirm pricing directly with the healthcare provider before scheduling an appointment.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: August 10, 2025
        </p>
      </div>
    </div>
  );
}