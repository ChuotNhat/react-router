import { BrowserRouter, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import React, { Component } from 'react';
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/route-props`}>Route Props</Link>
      </li>
    </ul>
    <Route
      path={`${match.url}/:topicId`}
      render={({ match }) => <h3>{match.params.topicId}</h3>}
    />
    <Route exact path={match.url} render={() => <h3>Please select topic</h3>} />
  </div>
);
export default Topics;