import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'
const Login = () => (
  <div className="Login">
    <form>
      <h2>Login</h2>
      <Link to="/register">Need an account?</Link>
      <input placeholder="Email" type="email" name="email"/>
      <input placeholder="Password" type="password" name="password"/>
      <button type="submit">Login</button>
    </form>
  </div>
);
export default Login;