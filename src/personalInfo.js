import React from "react";

const PersonalInfo = ({ formData, handleChange, errors }) => {
  return (
    <div style={{ marginRight: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Personal Information</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange("name")}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={formData.phone}
          onChange={handleChange("phone")}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default PersonalInfo;
