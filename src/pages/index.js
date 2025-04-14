import React, { createContext, useContext, useState } from "react";
import Link from "next/link";
import styles from "./styles/HomePage.module.css";

// Compound component for role selection:
const RoleContext = createContext();

function RoleSelector({ children }) {
  const [selectedRole, setSelectedRole] = useState(null);
  return (
    <RoleContext.Provider value={{ selectedRole, setSelectedRole }}>
      {children}
    </RoleContext.Provider>
  );
}

function RoleList({ children }) {
  const { selectedRole } = useContext(RoleContext);
  if (selectedRole) return null;
  return <div className={styles.roleSelection}>{children}</div>;
}

function Role({ value, children }) {
  const { setSelectedRole } = useContext(RoleContext);
  return (
    <button className={styles.roleBtn} onClick={() => setSelectedRole(value)}>
      {children}
    </button>
  );
}

function RoleActions({ value, children }) {
  const { selectedRole } = useContext(RoleContext);
  if (selectedRole !== value) return null;
  return <div className={styles.roleActions}>{children}</div>;
}

function BackButton({ children }) {
  const { setSelectedRole } = useContext(RoleContext);
  return (
    <button className={styles.backBtn} onClick={() => setSelectedRole(null)}>
      {children}
    </button>
  );
}

// Compound component for patient actions:
function PatientActions({ children }) {
  return <div>{children}</div>;
}
function PatientAction({ children }) {
  return <button className={styles.actionBtn}>{children}</button>;
}
PatientActions.Action = PatientAction;

// Compound component for physician actions:
function PhysicianActions({ children }) {
  return <div>{children}</div>;
}
function PhysicianAction({ children }) {
  return <button className={styles.actionBtn}>{children}</button>;
}
PhysicianActions.Action = PhysicianAction;

// Compound component for nurse actions:
function NurseActions({ children }) {
  return <div>{children}</div>;
}
function NurseAction({ children }) {
  return <button className={styles.actionBtn}>{children}</button>;
}
NurseActions.Action = NurseAction;

// Attach subcomponents:
RoleSelector.List = RoleList;
RoleSelector.Role = Role;
RoleSelector.Actions = RoleActions;
RoleSelector.Back = BackButton;

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to HealthTrack</h1>
      <p>Patient Records Management System</p>

      <RoleSelector>
        <RoleSelector.List>
          <RoleSelector.Role value="physician">
            I'm a Physician
          </RoleSelector.Role>
          <RoleSelector.Role value="nurse">I'm a Nurse</RoleSelector.Role>
          <RoleSelector.Role value="patient">I'm a Patient</RoleSelector.Role>
        </RoleSelector.List>

        <RoleSelector.Actions value="physician">
          <PhysicianActions>
            <PhysicianActions.Action>My work schedule</PhysicianActions.Action>
            <PhysicianActions.Action>My patients</PhysicianActions.Action>
            <PhysicianActions.Action>
              My scheduled appointments
            </PhysicianActions.Action>
          </PhysicianActions>
          <RoleSelector.Back>Back to Role Selection</RoleSelector.Back>
        </RoleSelector.Actions>

        <RoleSelector.Actions value="nurse">
          <NurseActions>
            <NurseActions.Action>My work schedule</NurseActions.Action>
            <NurseActions.Action>Assigned physicians</NurseActions.Action>
            <NurseActions.Action>Assigned training</NurseActions.Action>
          </NurseActions>
          <RoleSelector.Back>Back to Role Selection</RoleSelector.Back>
        </RoleSelector.Actions>

        <RoleSelector.Actions value="patient">
          <PatientActions>
            <PatientActions.Action>Make an appointment</PatientActions.Action>
            <PatientActions.Action>Manage appointments</PatientActions.Action>
            <PatientActions.Action>
              Look up health history
            </PatientActions.Action>
          </PatientActions>
          <RoleSelector.Back>Back to Role Selection</RoleSelector.Back>
        </RoleSelector.Actions>
      </RoleSelector>

      <div className={styles.subscriptionSection}>
        <Link href="/pricing" className={styles.subscriptionLink}>
          View Subscription Plans
        </Link>
      </div>
    </div>
  );
}

/**
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
*/
