import React from "react";

const AddressInfo = ({ formData, handleChange, errors }) => {
  return (
    <div style={{ marginRight: "10px" }}>
      <h3 style={{ textAlign: "center" }}>Address Information</h3>
      <div>
        <label>Address 1:</label>
        <input
          type="text"
          value={formData.address1}
          onChange={handleChange("address1")}
        />
        {errors.address1 && <p className="error">{errors.address1}</p>}
      </div>
      <div>
        <label>Address 2:</label>
        <input
          type="text"
          value={formData.address2}
          onChange={handleChange("address2")}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={formData.city}
          onChange={handleChange("city")}
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={formData.state}
          onChange={handleChange("state")}
        />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
      <div>
        <label>ZIP Code:</label>
        <input
          type="text"
          value={formData.zip}
          onChange={handleChange("zip")}
        />
        {errors.zip && <p className="error">{errors.zip}</p>}
      </div>
    </div>
  );
};

export default AddressInfo;
