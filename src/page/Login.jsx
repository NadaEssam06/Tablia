import React, { useState } from "react";
import { useNavigate } from "react-router";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();
  const handleUsertName = (e) => {
    setUserName(e.target.value);
  };
  const handleUsertPass = (e) => {
    setUserPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="max-w-xl m-auto">
      <form onSubmit={handleSubmit} className="mt-7">
        <div className="flex flex-col gap-1">
          <label htmlFor="username"> User Name</label>
          <input
            className="input  w-full"
            type="text"
            id="username"
            value={userName}
            onChange={handleUsertName}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="pass"> Password</label>
          <input
            className="input w-full"
            type="password"
            id="pass"
            value={userPass}
            onChange={handleUsertPass}
          />
        </div>
        <button type="submit" className="btn bg-green-700 mt-3 float-end">
          Sign in
        </button>
      </form>
    </div>
  );
}
