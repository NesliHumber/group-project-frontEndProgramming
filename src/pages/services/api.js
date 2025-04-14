export const submitContactForm = async (formData) => {
    console.log("Submitting contact form...", formData);
    return { success: true, message: "Form submitted (placeholder)" };
  };
  
  // Fetching FAQs
  export const fetchFAQs = async () => {
    console.log("Fetching FAQs...");
    return [
      { question: "What is HealthTrack?", answer: "A platform for patient records management." },
      { question: "How can I subscribe?", answer: "You can subscribe by visiting our Pricing page and selecting a plan." },
      { question: "Is my data secure?", answer: "Yes, we use advanced encryption." },
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

  // Fetching Testimonials
  export const fetchTestimonials = async () => {
    console.log("Fetching testimonials...");
    return [
      {
        id: 1,
        quote: "HealthTrack has streamlined our patient record management and improved operational efficiency.",
        name: "Dr. Sarah Monday",
        title: "Medical Director, April Health Center",
      },
      {
        id: 2,
        quote: "The appointment scheduling feature alone has saved us hours every week.",
        name: "Dr. Emily Tuesday",
        title: "May Park Clinic",
      },
      {
        id: 3,
        quote: "The data visualization tools are intuitive and help us track patient health trends effectively.",
        name: "Alex Friday",
        title: "Product Manager, August Medical Specialists",
      },
    ];
  };

  // Fetching Success Stories
  export const fetchSuccessStories = async () => {
    console.log("Fetching success stories...");
    return [
      {
        id: 1,
        title: "April Health Center: Improving Compliance and Security",
        challenge: "Fragmented data storage and compliance issues.",
        solution: "Implemented HealthTrack's centralized platform with advanced encryption.",
        result: "Reduced compliance review time by 50% and improved data security.",
      },
      {
        id: 2,
        title: "May Park Clinic: Streamlining Appointments",
        challenge: "Manual appointment scheduling was time-consuming.",
        solution: "Adopted HealthTrack's automated scheduling feature.",
        result: "Saved several hours per week and reduced no-shows by 30%.",
      },
    ];
  };
