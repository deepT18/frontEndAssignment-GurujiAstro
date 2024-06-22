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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep1 = () => {
    const { name, email, phone } = formData;
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const { address1, city, state, zip } = formData;
    const newErrors = {};
    if (!address1) newErrors.address1 = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";
    if (!zip) newErrors.zip = "ZIP code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    } else {
      isValid = true;
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
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
    if (validateStep2()) {
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
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <AddressInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: "center" }}>Multi-Step Form</h2>
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
