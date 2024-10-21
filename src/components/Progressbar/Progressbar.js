import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import styles from './Progressbar.module.css';

const ProgressBar = () => {
  const steps = [
    "Creation",
    "Client Meeting",
    "Quotation",
    "Test Fit Out",
    "Follow Up",
    "Negotiation",
    "Closure"
  ];

  const stepRoutes = [
    "/creation",
    "/clientmeeting",
    "/quotationdetails",
    "/testfitout",
    "/followup",
    "/negotiation",
    "/closure"
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  // Set the current step based on the route when the component loads
  useEffect(() => {
    const stepIndex = stepRoutes.findIndex(route => route === location.pathname);
    if (stepIndex !== -1) {
      setCurrentStep(stepIndex);
    }
  }, [location.pathname]); // Re-run the effect if the route changes

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      const nextStepIndex = currentStep + 1;
      setCurrentStep(nextStepIndex);
      navigate(stepRoutes[nextStepIndex]); // Navigate to the next route
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.progressbar}>
        {steps.map((step, index) => (
          <li
            key={index}
            className={index <= currentStep ? styles.active : ''}
          >
            {step}
          </li>
        ))}
      </ul>
      <div className={styles.buttonWrapper}>
        <button className={styles.doneButton} onClick={nextStep}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          Mark as Done
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
