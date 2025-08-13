export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About MedPriceNow</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            MedPriceNow is dedicated to bringing transparency to healthcare costs. We believe that 
            everyone should have access to clear, upfront pricing for medical services to make 
            informed decisions about their healthcare.
          </p>
          <p>
            Our platform allows patients to compare cash prices for medical procedures, tests, 
            and services across different providers in their area, helping them find affordable 
            care without sacrificing quality.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Compare Cash Prices?</h2>
          <p className="mb-4">
            Healthcare pricing in the United States can be confusing and unpredictable. Many people 
            don't realize that paying cash directly to providers can often be significantly cheaper 
            than using insurance, especially for those with high deductibles.
          </p>
          <p className="mb-4">
            Cash prices (also called self-pay or direct pay prices) are what you pay when you don't 
            use insurance. These prices are often much lower than the "chargemaster" rates that 
            providers bill to insurance companies.
          </p>
          <p>
            By comparing cash prices, you can:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Save money on routine and preventive care</li>
            <li>Find affordable options if you're uninsured</li>
            <li>Make better decisions if you have a high-deductible health plan</li>
            <li>Avoid surprise bills and hidden fees</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How We Collect Price Information</h2>
          <p className="mb-4">
            We gather pricing data through multiple channels:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Direct partnerships with healthcare providers</li>
            <li>Publicly available hospital price transparency data</li>
            <li>User-contributed information (verified by our team)</li>
            <li>Regular research and outreach to medical facilities</li>
          </ul>
          <p>
            We update our database regularly to ensure you have access to the most current pricing 
            information available. However, always confirm the final price with the provider before 
            scheduling services, as prices may change or vary based on individual circumstances.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions, suggestions, or want to partner with us? We'd love to hear from you.
          </p>
          <p>
            Email: <a href="mailto:info@medpricenow.com" className="text-primary">info@medpricenow.com</a><br />
            Phone: (555) 123-4567<br />
          </p>
        </section>
      </div>
    </div>
  );
}