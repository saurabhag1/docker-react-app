import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Docker Deployment Implementation</h1>
        <h2 className="subtitle">
          For Node.js and React.js Applications
        </h2>
      </header>

      <section className="content">
        <p className="description">
          This website demonstrates deploying a React.js application using Docker.
        </p>
        <div className="commands">
          <h3>Docker Commands:</h3>
          <ul>
            <li><code>docker build -t my-react-app .</code></li>
            <li><code>docker run -p 3000:3000 my-react-app</code></li>
            <li><code>docker images</code> - List all images</li>
            <li><code>docker ps</code> - List running containers</li>
            <li><code> docker run -dit --name containername imagename bash</code> - create container and run in bash </li>
            <li><code>docker ...</code> - many more command follow me in below</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>Created by: <strong>Saurabh Agrawal</strong> &copy; 2025</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/saurabh-a-126296140/" target="_blank">LinkedIn</a>
          <a href="https://github.com/saurabhag1" target="_blank">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
