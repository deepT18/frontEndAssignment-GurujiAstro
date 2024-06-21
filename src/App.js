import React, { useState, useEffect } from "react";
import PersonalInfo from "./personalInfo";
import AddressInfo from "./AddressInfo";
import Confirmation from "./Confirmation";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // useEffect(() => {
  //   console.log(Current step: ${currentStep});
  // }, [currentStep]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [input]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    localStorage.removeItem("formData");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return <AddressInfo formData={formData} handleChange={handleChange} />;
      case 3:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h2>Multi-Step Form</h2>
      <div className="steps">
        <button onClick={() => setCurrentStep(1)} disabled={currentStep === 1}>
          Step 1
        </button>
        <button onClick={() => setCurrentStep(2)} disabled={currentStep === 2}>
          Step 2
        </button>
        <button onClick={() => setCurrentStep(3)} disabled={currentStep === 3}>
          Step 3
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </button>
          {currentStep <= 3 ? (
            <button type="button" onClick={handleNext}>
              {currentStep < 3 ? "Next" : "Submit"}
            </button>
          ) : (
            <button type="submit">
              {currentStep !== 3 ? "Next" : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
