import { usePathname } from 'next/navigation';
import React from "react";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import styles from "./styles/NavBar.module.css";

const headerMap = {
  '/': 'Welcome to HealthTrack',
  '/about': 'Who We Are',
  '/contact': 'Contact Us',
  '/pricing': 'Membership Plans',
  '/faq': 'Frequently Asked Questions',
  '/testimonials': 'What our users say about HealthTrack',
};

function PageHeaderContent() {
  const pathname = usePathname();
  return (
    <header className="page-header">
      <h1>{headerMap[pathname] || ''}</h1>
    </header>
  );
}

// Footer component defined inside the same file
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing">Membership</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/testimonials">Testimonials</Link>
        </nav>
        <p className="copyright">
        ©2025 HealthTrack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <nav className={styles.nav}>
          <a className={styles.logo}>HealthTrack</a>
          <div className={styles.linkContainer}>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/pricing" className={styles.link}>Membership</Link>
            <Link href="/faq" className={styles.link}>FAQ</Link>
            <Link href="/testimonials" className={styles.link}>Testimonials</Link>
          </div>
        </nav>
        <PageHeaderContent />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;