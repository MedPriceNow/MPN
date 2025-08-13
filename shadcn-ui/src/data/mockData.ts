// Mock data for medical services and prices

export interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  zip: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  location: Location;
  price: number;
  rating: number;
  reviewCount: number;
  phoneNumber: string;
}

export interface MedicalService {
  id: string;
  name: string;
  description: string;
  category: string;
  averagePrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  providers: ServiceProvider[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  serviceCount: number;
}

// Service Categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'imaging',
    name: 'Imaging',
    description: 'X-rays, MRIs, CT scans, and ultrasounds',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXJpfGVufDB8fDB8fHww',
    serviceCount: 12
  },
  {
    id: 'lab-tests',
    name: 'Laboratory Tests',
    description: 'Blood tests, urinalysis, and other diagnostic tests',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D',
    serviceCount: 15
  },
  {
    id: 'primary-care',
    name: 'Primary Care',
    description: 'Routine checkups and preventive care',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww',
    serviceCount: 8
  },
  {
    id: 'specialty-care',
    name: 'Specialty Care',
    description: 'Cardiology, dermatology, orthopedics, and more',
    imageUrl: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    serviceCount: 20
  },
  {
    id: 'dental',
    name: 'Dental Services',
    description: 'Cleanings, fillings, and other dental procedures',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGFsfGVufDB8fDB8fHww',
    serviceCount: 10
  },
  {
    id: 'surgeries',
    name: 'Surgeries',
    description: 'Common surgical procedures',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D',
    serviceCount: 7
  }
];

// Sample locations - Top 10 US cities
export const locations: Location[] = [
  // New York
  { id: 'loc1', name: 'Downtown Medical Center', city: 'New York', state: 'NY', zip: '10001' },
  { id: 'loc2', name: 'Manhattan Health Partners', city: 'New York', state: 'NY', zip: '10016' },
  
  // Los Angeles
  { id: 'loc3', name: 'Central Hospital', city: 'Los Angeles', state: 'CA', zip: '90001' },
  { id: 'loc4', name: 'Westside Medical Group', city: 'Los Angeles', state: 'CA', zip: '90025' },
  
  // Chicago
  { id: 'loc5', name: 'Health Partners Clinic', city: 'Chicago', state: 'IL', zip: '60601' },
  { id: 'loc6', name: 'Lakeview Medical Associates', city: 'Chicago', state: 'IL', zip: '60657' },
  
  // Houston
  { id: 'loc7', name: 'Community Health Network', city: 'Houston', state: 'TX', zip: '77001' },
  { id: 'loc8', name: 'Texas Medical Group', city: 'Houston', state: 'TX', zip: '77030' },
  
  // Phoenix
  { id: 'loc9', name: 'Desert Valley Hospital', city: 'Phoenix', state: 'AZ', zip: '85001' },
  { id: 'loc10', name: 'Arizona Medical Care', city: 'Phoenix', state: 'AZ', zip: '85016' },
  
  // Philadelphia
  { id: 'loc11', name: 'Liberty Medical Center', city: 'Philadelphia', state: 'PA', zip: '19019' },
  { id: 'loc12', name: 'University Health System', city: 'Philadelphia', state: 'PA', zip: '19104' },
  
  // San Antonio
  { id: 'loc13', name: 'Alamo Health Partners', city: 'San Antonio', state: 'TX', zip: '78201' },
  { id: 'loc14', name: 'River Walk Medical', city: 'San Antonio', state: 'TX', zip: '78205' },
  
  // San Diego
  { id: 'loc15', name: 'Pacific Coast Hospital', city: 'San Diego', state: 'CA', zip: '92101' },
  { id: 'loc16', name: 'SoCal Healthcare Group', city: 'San Diego', state: 'CA', zip: '92111' },
  
  // Dallas
  { id: 'loc17', name: 'North Texas Medical Center', city: 'Dallas', state: 'TX', zip: '75201' },
  { id: 'loc18', name: 'Parkland Health', city: 'Dallas', state: 'TX', zip: '75235' },
  
  // San Jose
  { id: 'loc19', name: 'Silicon Valley Medical Group', city: 'San Jose', state: 'CA', zip: '95101' },
  { id: 'loc20', name: 'Bay Area Health Network', city: 'San Jose', state: 'CA', zip: '95112' }
];

// Sample medical services
export const medicalServices: MedicalService[] = [
  {
    id: 'service1',
    name: 'MRI - Brain',
    description: 'Magnetic resonance imaging of the brain to detect abnormalities, tumors, or other conditions.',
    category: 'imaging',
    averagePrice: 1200,
    priceRange: {
      min: 800,
      max: 2200
    },
    providers: [
      { id: 'p1', name: 'Downtown Medical Center', location: locations[0], price: 1100, rating: 4.5, reviewCount: 120, phoneNumber: '(212) 555-1234' },
      { id: 'p2', name: 'Central Hospital', location: locations[1], price: 1500, rating: 4.2, reviewCount: 95, phoneNumber: '(323) 555-6789' },
      { id: 'p3', name: 'Sunshine Medical Group', location: locations[2], price: 950, rating: 4.7, reviewCount: 85, phoneNumber: '(305) 555-4321' }
    ]
  },
  {
    id: 'service2',
    name: 'X-Ray - Chest',
    description: 'Chest X-ray to examine the lungs, heart, and chest wall.',
    category: 'imaging',
    averagePrice: 250,
    priceRange: {
      min: 150,
      max: 400
    },
    providers: [
      { id: 'p4', name: 'Health Partners Clinic', location: locations[3], price: 180, rating: 4.1, reviewCount: 65, phoneNumber: '(312) 555-8765' },
      { id: 'p5', name: 'Community Health Network', location: locations[4], price: 210, rating: 4.0, reviewCount: 72, phoneNumber: '(713) 555-9876' },
      { id: 'p6', name: 'Downtown Medical Center', location: locations[0], price: 275, rating: 4.5, reviewCount: 110, phoneNumber: '(212) 555-1234' }
    ]
  },
  {
    id: 'service3',
    name: 'Complete Blood Count (CBC)',
    description: 'Blood test to evaluate overall health and detect a wide range of disorders.',
    category: 'lab-tests',
    averagePrice: 80,
    priceRange: {
      min: 40,
      max: 150
    },
    providers: [
      { id: 'p7', name: 'Central Hospital', location: locations[1], price: 65, rating: 4.3, reviewCount: 88, phoneNumber: '(323) 555-6789' },
      { id: 'p8', name: 'Sunshine Medical Group', location: locations[2], price: 45, rating: 4.6, reviewCount: 92, phoneNumber: '(305) 555-4321' },
      { id: 'p9', name: 'Health Partners Clinic', location: locations[3], price: 85, rating: 4.2, reviewCount: 78, phoneNumber: '(312) 555-8765' }
    ]
  },
  {
    id: 'service4',
    name: 'Annual Physical Exam',
    description: 'Comprehensive health check-up including vitals, physical examination, and basic screenings.',
    category: 'primary-care',
    averagePrice: 150,
    priceRange: {
      min: 100,
      max: 300
    },
    providers: [
      { id: 'p10', name: 'Community Health Network', location: locations[4], price: 120, rating: 4.4, reviewCount: 105, phoneNumber: '(713) 555-9876' },
      { id: 'p11', name: 'Downtown Medical Center', location: locations[0], price: 180, rating: 4.7, reviewCount: 132, phoneNumber: '(212) 555-1234' },
      { id: 'p12', name: 'Health Partners Clinic', location: locations[3], price: 145, rating: 4.5, reviewCount: 98, phoneNumber: '(312) 555-8765' }
    ]
  },
  {
    id: 'service5',
    name: 'Dental Cleaning',
    description: 'Professional teeth cleaning to remove plaque and tartar build-up.',
    category: 'dental',
    averagePrice: 120,
    priceRange: {
      min: 80,
      max: 200
    },
    providers: [
      { id: 'p13', name: 'Downtown Medical Center', location: locations[0], price: 110, rating: 4.6, reviewCount: 115, phoneNumber: '(212) 555-1234' },
      { id: 'p14', name: 'Central Hospital', location: locations[1], price: 95, rating: 4.4, reviewCount: 87, phoneNumber: '(323) 555-6789' },
      { id: 'p15', name: 'Sunshine Medical Group', location: locations[2], price: 130, rating: 4.8, reviewCount: 142, phoneNumber: '(305) 555-4321' }
    ]
  },
  {
    id: 'service6',
    name: 'CT Scan - Abdomen',
    description: 'Computed tomography scan of the abdominal region to visualize internal organs.',
    category: 'imaging',
    averagePrice: 950,
    priceRange: {
      min: 700,
      max: 1800
    },
    providers: [
      { id: 'p16', name: 'Health Partners Clinic', location: locations[3], price: 850, rating: 4.3, reviewCount: 76, phoneNumber: '(312) 555-8765' },
      { id: 'p17', name: 'Community Health Network', location: locations[4], price: 920, rating: 4.1, reviewCount: 68, phoneNumber: '(713) 555-9876' },
      { id: 'p18', name: 'Central Hospital', location: locations[1], price: 1100, rating: 4.5, reviewCount: 104, phoneNumber: '(323) 555-6789' }
    ]
  }
];

// Helper function to get services by category
export const getServicesByCategory = (categoryId: string): MedicalService[] => {
  return medicalServices.filter(service => service.category === categoryId);
};

// Helper function to get service by ID
export const getServiceById = (serviceId: string): MedicalService | undefined => {
  return medicalServices.find(service => service.id === serviceId);
};

// Helper function to get category by ID
export const getCategoryById = (categoryId: string): ServiceCategory | undefined => {
  return serviceCategories.find(category => category.id === categoryId);
};

// Helper function to search services by term
export const searchServices = (term: string): MedicalService[] => {
  const lowerTerm = term.toLowerCase();
  return medicalServices.filter(service => 
    service.name.toLowerCase().includes(lowerTerm) || 
    service.description.toLowerCase().includes(lowerTerm)
  );
};