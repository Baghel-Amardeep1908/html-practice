import React, { useState } from "react";

const MyComponent = () => {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
    </div>
  );
};

export default MyComponent;
