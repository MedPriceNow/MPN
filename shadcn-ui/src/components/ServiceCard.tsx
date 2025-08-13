import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MedicalService } from '@/data/mockData';
import { formatCurrency } from '@/lib/utils';

interface ServiceCardProps {
  service: MedicalService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Average Price:</span>
            <span className="font-medium">{formatCurrency(service.averagePrice)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Price Range:</span>
            <span className="text-sm">
              {formatCurrency(service.priceRange.min)} - {formatCurrency(service.priceRange.max)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Providers:</span>
            <span className="text-sm">{service.providers.length} available</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/services/${service.id}`} 
          className="w-full"
        >
          <Button className="w-full">Compare Prices</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

// Import here to avoid circular dependency
import { Button } from '@/components/ui/button';