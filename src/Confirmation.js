import React from "react";

const Confirmation = ({ formData }) => {
  const { name, email, phone, address1, address2, city, state, zip } = formData;

  return (
    <div>
      <h3>Step 3: Confirmation</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Address Line 1:</strong> {address1}
      </p>
      <p>
        <strong>Address Line 2:</strong> {address2}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>State:</strong> {state}
      </p>
      <p>
        <strong>Zip Code:</strong> {zip}
      </p>
    </div>
  );
};

export default Confirmation;
