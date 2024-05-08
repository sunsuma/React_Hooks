import React, { useState, useEffect } from "react";

function Formfill() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [submitted, setSubmitted] = useState(null);
  const [mandatoryMessage, setMandatoryMessage] = useState("");

  useEffect(() => {
    const submittedData = localStorage.getItem("submittedData");
    if (submittedData) {
      setSubmitted(JSON.parse(submittedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.firstName.trim() === "" || name.lastName.trim() === ""){
      setMandatoryMessage("Please fill all the fields");
    }else{
      setSubmitted(name)
      localStorage.setItem("submittedData", JSON.stringify(name));
      setName({ firstName: "", lastName: "" });
      setMandatoryMessage("");
    }
    // setSubmitted(name);
    // localStorage.setItem('submittedData', JSON.stringify(name));
    // setName({ firstName: "", lastName: "" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("submittedData");
    setSubmitted({ firstName: "", lastName: "" });
    setMandatoryMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          onKeyDown={handleKeyPress}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          onKeyDown={handleKeyPress}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <p>{mandatoryMessage}</p>

      {submitted && (
        <div>
          <h2>FirstName: {submitted.firstName}</h2>
          <h2>LastName: {submitted.lastName}</h2>
        </div>
      )}
    </div>
  );
}

export default Formfill;
