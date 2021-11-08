import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

//   function handleChange(e) {
//   //name is the KEY in of the formData object we're trying to update
//   const name = e.target.name
//   const value = e.target.value
//   if (e.target.type === "checkbox") {
//     value = e.target.checked;
//   }
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// }


  //BUT no need to declare name for form if not using other places
  
  function handleChange(e) {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked })
    } else{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
}
  //ok now handle submit

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
