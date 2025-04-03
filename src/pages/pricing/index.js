import React from "react";
import Link from "next/link";
import styles from '../styles/Pricing.module.css';

function PricingPage() {
  const plans = [
    { id: 1, name: "Weekly Membership", price: "$2" },
    { id: 2, name: "Monthly Membership", price: "$7" },
    { id: 3, name: "6-Month Membership", price: "$35" },
    { id: 4, name: "Annual Membership", price: "$65" },
  ];

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.plansGrid}>
        {plans.map((plan) => (
          <div key={plan.id} className={styles.planCard}>
            <h2 className={styles.planName}>{plan.name}</h2>
            <p className={styles.planPrice}>{plan.price}</p>
            <Link href={`/pricing/${plan.name}`} className={styles.planLink}>
              Choose Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;