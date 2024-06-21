import React from "react";

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Step 1: Personal Information</h3>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={handleChange("name")}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          value={formData.phone}
          onChange={handleChange("phone")}
        />
      </label>
    </div>
  );
};

export default PersonalInfo;
