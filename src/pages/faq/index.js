import React from "react";

function FAQPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your question has been submitted!");
  };

  return (
    <div>
      <p>Find answers to common questions about our services below.</p>
      <ul>
        <li>Q: What is HealthTrack?</li>
        <li>A: HealthTrack is a patient records management system designed for healthcare providers.</li>
        <li>Q: How can I subscribe?</li>
        <li>A: You can subscribe by visiting our Pricing page and selecting a plan.</li>
        <li>Q: Is my data secure?</li>
        <li>A: Yes, we use industry-standard security measures to protect your data.</li>
      </ul>

      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Your Question:</label>
        <br />
        <textarea id="question" name="question" rows="4" cols="50" required></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FAQPage;