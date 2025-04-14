export const submitContactForm = async (formData) => {
    console.log("Submitting contact form...", formData);
    return { success: true, message: "Form submitted (placeholder)" };
  };
  
  // Fetching FAQs
  export const fetchFAQs = async () => {
    console.log("Fetching FAQs...");
    return [
      { question: "What is HealthTrack?", answer: "A platform for patient records management." },
      { question: "Is it secure?", answer: "Yes, we use advanced encryption." },
    ];
  };
  
  // Fetching Pricing Plans 
  export const fetchPricingPlans = async () => {
    console.log("Fetching pricing plans...");
    
    return [
        { id: 1, name: "Weekly Membership", price: "$2" },
        { id: 2, name: "Monthly Membership", price: "$7" },
        { id: 3, name: "6-Month Membership", price: "$35" },
        { id: 4, name: "Annual Membership", price: "$65" },
    ];
  };
  
  // Request demo 
  export const requestDemo = async (userInfo) => {
    console.log("Requesting demo...", userInfo);
    return { success: true, message: "Demo request submitted (placeholder)" };
  };