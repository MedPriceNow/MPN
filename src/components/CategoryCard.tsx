import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceCategory } from '@/data/mockData';

interface CategoryCardProps {
  category: ServiceCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={category.imageUrl} 
          alt={category.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground">
          {category.serviceCount} services available
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/services?category=${category.id}`} 
          className="w-full"
        >
          <Button variant="outline" className="w-full">
            Browse Services
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}