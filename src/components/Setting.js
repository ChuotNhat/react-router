import React from 'react';
import '../App.css'
const Setting = () => (
  <div className="Setting">
    <form>
      <h2>Your Settings</h2>
      <input value="email of you" placeholder="URL of profile picture" type="text" name="email"/>
      <input value="name of you" placeholder="Name" type="text" name="name"/>
      <textarea rows="8" placeholder="Short bio about you"></textarea>
      <input value="Email" placeholder="Email" type="text" name="email"/>
      <input placeholder="Password" type="password" name="password"/>
      <button type="submit">Update Settings</button>
    </form>
    <hr/>
    <button type="submit">Or click here to logout.</button>
  </div>
);
export default Setting;