
import React from "react";
import { Link } from "react-router-dom";
import OpenAIChat from "../openAI/useOpenAIChat";

import { Example } from "./Example";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Quiz App</h1>
      <p>Choose your topic:</p>
      <ul>
        <li>
          <Link to="/test/react">React</Link>
        </li>
        <li>
          <Link to="/test/javascript">Javascript</Link>
        </li>
        <li>
          <Link to="/test/css">CSS</Link>
        </li>
        <li>
          <Link to="/test/sql">SQL</Link>
        </li>
      </ul>
      {/* <Example /> */}
    <div>
      <OpenAIChat />
    </div>
    </div>
  );
};

export default HomePage;
