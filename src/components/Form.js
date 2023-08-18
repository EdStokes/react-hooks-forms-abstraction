import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.value === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      admin: false,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
        placeholder="Last Name"
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />Admin
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
