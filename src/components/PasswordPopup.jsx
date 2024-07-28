import React, { useState } from "react";

const PasswordPopup = ({ onClose }) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [invalidInfo, setInvalidInfo] = useState(""); // State for showing invalid info message

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSubmit = async () => {
    const recruiterData = { password, name, email, company };
  
    try {
      const response = await fetch(
        "http://localhost:5000/authenticate-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recruiterData),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Response data:", data);
  
      if (response.ok) {
        // Success: Open resume URL in a new tab
        const { resumeUrl } = data;
        window.open(resumeUrl, "_blank");
        setInvalidInfo(""); // Reset invalid info message on success
      }
    } catch (error) {
      if (error.message.includes("401")) {
        setInvalidInfo("Password incorrect or outdated. Please request a new password from samanthavaleriemac[@]gmail.com");
      } else {
        setInvalidInfo("Invalid information");
      }
    }
  };  

  return (
    <div className="card password-popup p-0 m-0">
      <button className="exit-button" onClick={onClose}>
        Close
      </button>
      <div className="card-body bg-transparent m-0">
        <div className="modal-text">
          <h2>Access my resume</h2>
          <div className="field-span">
            <p>Provided Password</p>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="field-span">
            <p>Name</p>
            <input
              type="text"
              placeholder=" "
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="field-span">
            <p>Email</p>
            <input
              type="email"
              placeholder=" "
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="field-span">
            <p>Company (optional)</p>
            <input
              type="text"
              placeholder=" "
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={company}
              onChange={handleCompanyChange}
            />
          </div>
          {invalidInfo && <p className="invalid-info">{invalidInfo}</p>}
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordPopup;
