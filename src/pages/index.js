import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles/HomePage.module.css";

function HomePage() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleBack = () => {
    setSelectedRole(null);
  };

  const renderRoleButtons = () => {
    switch (selectedRole) {
      case "physician":
        return (
          <div className={styles.roleActions}>
            <button className={styles.actionBtn}>Look up my patients</button>
            <button className={styles.actionBtn}>Look up my scheduled appointments</button>
            <button className={styles.backBtn} onClick={handleBack}>
              Back to Role Selection
            </button>
          </div>
        );
      case "nurse":
        return (
          <div className={styles.roleActions}>
            <button className={styles.actionBtn}>Look up my work schedule</button>
            <button className={styles.backBtn} onClick={handleBack}>
              Back to Role Selection
            </button>
          </div>
        );
      case "patient":
        return (
          <div className={styles.roleActions}>
            <button className={styles.actionBtn}>Make an appointment</button>
            <button className={styles.actionBtn}>Manage appointments</button>
            <button className={styles.actionBtn}>Look up health history</button>
            <button className={styles.backBtn} onClick={handleBack}>
              Back to Role Selection
            </button>
          </div>
        );
      default:
        return (
          <div className={styles.roleSelection}>
            <button
              className={styles.roleBtn}
              onClick={() => setSelectedRole("physician")}
            >
              I'm a Physician
            </button>
            <button
              className={styles.roleBtn}
              onClick={() => setSelectedRole("nurse")}
            >
              I'm a Nurse
            </button>
            <button
              className={styles.roleBtn}
              onClick={() => setSelectedRole("patient")}
            >
              I'm a Patient
            </button>
          </div>
        );
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to HealthTrack</h1>
      <p>Patient Records Management System</p>

      {renderRoleButtons()}

      <div className={styles.subscriptionSection}>
        <Link href="/pricing" className={styles.subscriptionLink}>
          View Subscription Plans
        </Link>
      </div>
    </div>
  );
}

export default HomePage;