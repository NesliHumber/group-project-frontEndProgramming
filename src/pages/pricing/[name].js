import React from 'react';
import { useRouter } from 'next/router';

function PricingDetailPage() {
  const router = useRouter();
  const { name } = router.query;

  const goBackToPricing = () => {
    router.push('/pricing');
  };

  return (
    <div>
      <h1>Pricing Details for {name}</h1>
      <p>This page shows detailed information about our {name}.</p>
      <button onClick={goBackToPricing}>Back to Membership Plans</button>
    </div>
  );
}

export default PricingDetailPage;
