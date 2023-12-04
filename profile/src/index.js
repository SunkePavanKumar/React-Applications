import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/avatar.jpg" alt="profile_picture"></img>;
}
function Intro() {
  return (
    <div className="data">
      <h1>Pavan Kumar Sunke</h1>
      <p>
        As a software developer, I have gained valuable experience in building a
        scalable and efficient system. I have expertise in Node.js, MongoDB, and
        RabbitMQ. My projects and internships have strengthened my skills in
        RESTful APIs, asynchronous processing, and error handling. With a strong
        vision of becoming a sought-after software professional, I am
        well-equipped to contribute to future software projects.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" color="red" />
      <Skill name="javaScript" color="orange" />
      <Skill name="React" color="indigo" />
      <Skill name="Express" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
