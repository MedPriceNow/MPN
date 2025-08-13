import { useState } from 'react';
import { MedicalService, ServiceProvider } from '@/data/mockData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  ArrowUpDown, 
  MapPin,
  Star,
  Users,
  Phone
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface PriceComparisonTableProps {
  service: MedicalService;
}

type SortField = 'price' | 'rating' | 'reviewCount';
type SortDirection = 'asc' | 'desc';

export function PriceComparisonTable({ service }: PriceComparisonTableProps) {
  const [sortField, setSortField] = useState<SortField>('price');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to ascending for price, descending for others
      setSortField(field);
      setSortDirection(field === 'price' ? 'asc' : 'desc');
    }
  };

  // Sort providers based on current sort criteria
  const sortedProviders = [...service.providers].sort((a, b) => {
    let comparison = 0;
    
    if (sortField === 'price') {
      comparison = a.price - b.price;
    } else if (sortField === 'rating') {
      comparison = a.rating - b.rating;
    } else if (sortField === 'reviewCount') {
      comparison = a.reviewCount - b.reviewCount;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const getSortIcon = (field: SortField) => {
    if (field !== sortField) return <ArrowUpDown className="ml-2 h-4 w-4" />;
    return <ArrowUpDown className="ml-2 h-4 w-4 text-primary" />;
  };

  // Identify best value (lowest price)
  const lowestPrice = Math.min(...service.providers.map(p => p.price));

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Provider</TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('price')}
                className="p-0 h-8 font-semibold"
              >
                Price {getSortIcon('price')}
              </Button>
            </TableHead>
            <TableHead>Location</TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('rating')}
                className="p-0 h-8 font-semibold"
              >
                Rating {getSortIcon('rating')}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('reviewCount')}
                className="p-0 h-8 font-semibold"
              >
                Reviews {getSortIcon('reviewCount')}
              </Button>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProviders.map((provider) => (
            <TableRow key={provider.id}>
              <TableCell className="font-medium">
                {provider.name}
                {provider.price === lowestPrice && (
                  <Badge variant="secondary" className="ml-2">
                    Best Price
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-primary font-semibold">
                {formatCurrency(provider.price)}
              </TableCell>
              <TableCell className="flex items-center">
                <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                {provider.location.city}, {provider.location.state}
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {provider.rating}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Users className="mr-1 h-3 w-3 text-muted-foreground" />
                  {provider.reviewCount}
                </div>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  <Phone className="mr-1 h-3 w-3" />
                  {provider.phoneNumber}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}