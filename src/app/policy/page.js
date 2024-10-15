import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/Policy.Module.css';

export default function Policy() {
  return (
    <div className={styles.policyContainer}>
      <Header />
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.heading}>Privacy Policy</h1>
          <p className={styles.date}><strong className={styles.strong}>Last Updated:</strong> [October 15, 2024]</p>
          <p className={styles.paragraph}>At <strong className={styles.strong}>Shawarma Empire</strong>, your privacy is important to us. This Privacy Policy explains that we do not collect any personal information when you visit our website.</p>
          
          <h2 className={styles.subheading}>1. Information We Collect</h2>
          <p className={styles.paragraph}>We do not collect any personal information such as your name, email, or contact details when you browse our website.</p>
          
          <h2 className={styles.subheading}>2. Use of Cookies</h2>
          <p className={styles.paragraph}>Our website does not use cookies or any other tracking technologies to collect or store your data.</p>
          
          <h2 className={styles.subheading}>3. Links to Other Websites</h2>
          <p className={styles.paragraph}>Our website may contain links to external sites. We are not responsible for the content or privacy practices of these external sites. We encourage you to review their privacy policies if you visit them.</p>
          
          <h2 className={styles.subheading}>4. Changes to This Policy</h2>
          <p className={styles.paragraph}>We may update this Privacy Policy from time to time. Any updates will be posted on this page.</p>
          
        </div>
        
        <div className={styles.section}>
          <h1 className={styles.heading}>Terms of Use</h1>
          <p className={styles.date}><strong className={styles.strong}>Last Updated:</strong> [October 15, 2024]</p>
          <p className={styles.paragraph}>Welcome to the <strong className={styles.strong}>Shawarma Empire</strong> website. By accessing or using our website, you agree to these Terms of Use.</p>
          
          <h2 className={styles.subheading}>1. Intellectual Property</h2>
          <p className={styles.paragraph}>All content on this website, including text, images, and graphics, is the property of <strong className={styles.strong}>Shawarma Empire</strong>. You may not reproduce, distribute, or use any content from this website without our written permission.</p>
          
          <h2 className={styles.subheading}>2. Use of the Website</h2>
          <p className={styles.paragraph}>You agree to use our website only for lawful purposes. You may not:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Use the website in a manner that violates any applicable law.</li>
            <li className={styles.listItem}>Attempt to gain unauthorized access to the website.</li>
          </ul>
          
          <h2 className={styles.subheading}>3. Disclaimer</h2>
          <p className={styles.paragraph}>The content on this website is for informational purposes only. We do our best to ensure accuracy, but we do not guarantee that the information is complete or up-to-date.</p>
          
          <h2 className={styles.subheading}>4. Limitation of Liability</h2>
          <p className={styles.paragraph}><strong className={styles.strong}>Shawarma Empire</strong> is not responsible for any damages that may arise from using our website.</p>
          
          <h2 className={styles.subheading}>5. Changes to These Terms</h2>
          <p className={styles.paragraph}>We may update these Terms of Use. By continuing to use the website, you agree to be bound by the updated terms.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}