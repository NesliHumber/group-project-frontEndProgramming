import React, { useEffect, useState } from "react";
import styles from "../styles/Testimonials.module.css";
import { fetchTestimonials, fetchSuccessStories } from "../services/api";

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [fetchedTestimonials, fetchedStories] = await Promise.all([
          fetchTestimonials(),
          fetchSuccessStories(),
        ]);
        setTestimonials(fetchedTestimonials);
        setStories(fetchedStories);
      } catch (err) {
        setError("Failed to fetch testimonials or success stories. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p>Loading testimonials and success stories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>Discover how HealthTrack is revolutionizing patient records management for healthcare providers.</p>
      </header>

      <section>
        <h2 className={styles.sectionTitle}>Featured Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.title}>{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.caseStudy}>
        <h2>Success Stories</h2>
        {stories.map((story) => (
          <div key={story.id} className={styles.successStory}>
            <h3>{story.title}</h3>
            <p><strong>Challenge:</strong> {story.challenge}</p>
            <p><strong>Solution:</strong> {story.solution}</p>
            <p><strong>Result:</strong> {story.result}</p>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <button onClick={() => alert("Redirecting to demo request")}>Request a Demo</button>
        <button onClick={() => alert("Redirecting to success stories")}>Read More Success Stories</button>
      </footer>
    </div>
  );
}

export default TestimonialsPage;

/**
import React from 'react';
import styles from "../styles/Testimonials.module.css";

function TestimonialsPage() {
  const testimonials = [
    {
      quote: "HealthTrack has streamlined our patient record management and improved operational efficiency.",
      name: "Dr. Sarah Monday",
      title: "Medical Director, April Health Center",
    },
    {
      quote: "The appointment scheduling feature alone has saved us hours every week.",
      name: "Dr. Emily Tuesday",
      title: "May Park Clinic",
    },
    {
      quote: "The data visualization tools are intuitive and help us track patient health trends effectively.",
      name: "Alex Friday",
      title: "Product Manager, August Medical Specialists",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>Discover how HealthTrack is revolutionizing patient records management for healthcare providers.</p>
      </header>

      <section>
        <h2 className={styles.sectionTitle}>Featured Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.title}>{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.caseStudy}>
        <h2>Success Stories</h2>
        <div>
          <h3>April Health Center: Improving Compliance and Security</h3>
          <p><strong>Challenge:</strong> Fragmented data storage and compliance issues.</p>
          <p><strong>Solution:</strong> Implemented HealthTrack's centralized platform with advanced encryption.</p>
          <p><strong>Result:</strong> Reduced compliance review time by 50% and improved data security.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <button onClick={() => alert('Redirecting to demo request')}>Request a Demo</button>
        <button onClick={() => alert('Redirecting to success stories')}>Read More Success Stories</button>
      </footer>
    </div>
  );
}

export default TestimonialsPage;

 */