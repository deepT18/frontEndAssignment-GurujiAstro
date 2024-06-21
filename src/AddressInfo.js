import React from "react";

const AddressInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h3>Step 2: Address Information</h3>
      <label>
        Address Line 1:
        <input
          type="text"
          value={formData.address1}
          onChange={handleChange("address1")}
        />
      </label>
      <label>
        Address Line 2:
        <input
          type="text"
          value={formData.address2}
          onChange={handleChange("address2")}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={formData.city}
          onChange={handleChange("city")}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          value={formData.state}
          onChange={handleChange("state")}
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          value={formData.zip}
          onChange={handleChange("zip")}
        />
      </label>
    </div>
  );
};

export default AddressInfo;
