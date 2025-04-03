import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyles";
import styles from '../styles/About.module.css';

function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.visionSection}>
        <h2 className={styles.subtitle}>Our Vision</h2>
        <p>
          Revolutionizing healthcare management through innovative technology 
          that empowers providers to deliver exceptional patient care.
        </p>
      </section>

      <section className={styles.historySection}>
        <h2 className={styles.subtitle}>Our History</h2>
        <p>
        HealthTrack is a government-funded project supported by Canada.gov, founded in 2025 
        as part of Canada’s initiative to address healthcare workforce challenges. By merging 
        and simplifying access to information from fragmented medical systems, HealthTrack aims 
        to reduce administrative burdens on healthcare professionals and improve patient outcomes 
        through centralized data management. Developed in collaboration with clinical experts 
        and software engineers, this initiative aligns with federal priorities to modernize 
        healthcare infrastructure and integrate internationally trained professionals into 
        Canada’s health sector.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.subtitle}>Leadership Team</h2>
        <ul className={styles.directorsList}>
          <li>Dr. Who Wednesday - Chief Medical Officer</li>
          <li>Ali Thursday - Healthcare Compliance Specialist</li>
          <li>Neslihan Ustaoglu - Technology Architect</li>
          <li>Mitzi Garcia - Data Security Expert</li>
        </ul>
      </section>
    </main>
  );
}

export default AboutPage;