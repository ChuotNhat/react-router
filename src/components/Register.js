import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'
const Register = () => (
  <div className="Register">
    <form>
      <h2>Register</h2>
      <Link to="/login">Have an account?</Link>
      <input placeholder="Username" type="text" name="username"/>
      <input placeholder="Email" type="email" name="email"/>
      <input placeholder="Password" type="password" name="password"/>
      <button type="submit">Register</button>
    </form>
  </div>
);
export default Register;