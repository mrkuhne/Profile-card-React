import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar picture="pictures/daniel_kuhne.jpg" />
      <div className="data">
        <Intro
          name="Daniel Kuhne"
          introduction="Junior DevOps developer and freelance music producer. 
          When I am not coding or writing music I enjoy finding the latest researches about 
          AI technology and its effects on the future of humanity, 
          optimizing my health with a balanced diet, mental health practices and sports activites."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img
      src={props.picture}
      width={443}
      height={280}
      alt="avatar_picture"
    ></img>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.introduction}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="Java 💪🏻" bg="teal" />
      <Skill skillName="SpringBoot 💪🏻" bg="orange" />
      <Skill skillName="Terraform 💪🏻" bg="purple" />
      <Skill skillName="Amazon Web 👍🏻" bg="lightgreen" />
      <Skill skillName="JavaScript 👶🏻" bg="orangered" />
      <Skill skillName="React 👶🏻" bg="skyblue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: props.bg,
        color: "black",
      }}
    >
      <p>{props.skillName}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
