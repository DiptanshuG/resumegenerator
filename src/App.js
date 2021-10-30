import logo from "./logo.svg";
import "./App.css";
import { AiFillPlusCircle } from "react-icons/ai";
import AddIcon from "./components/AddIcon";
import { useState } from "react";
// const tempData = {
//   title: "Google",
//   from: "12 Oct 2020",
//   to: "30 November 2021",
//   description:
//     "I have used tech skills to build awesome infrastructure for google that is helping millions of people around the world.",
// };
function App() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    experiences: [],
    educations: [],
    skills: [],
    achievements: [],
  });
  return (
    <div className="App">
      <div className="form-container">
        <h1>Enter Personal Info</h1>
        <input
          placeholder="Enter your full name"
          type="name"
          value={resumeData.fullName}
        />
        <input
          placeholder="Enter your email"
          type="email"
          value={resumeData.email}
        />
        <input
          placeholder="Phone number"
          type="number"
          value={resumeData.phoneNo}
        />
        <h1>Enter Experience</h1>
        {resumeData.experiences.map((experience, i) => {
          return (
            <div className="experience" key={i}>
              <input placeholder="Enter Job Name" value={experience.title} />
              <input
                placeholder="Enter Job Description"
                value={experience.description}
              />
              <input
                placeholder="Enter starting date"
                value={experience.from}
              />
              <input placeholder="Enter ending date" value={experience.to} />
            </div>
          );
        })}
        <AddIcon onClick={() => console.log("I am working correctly")}>
          Add Experience
        </AddIcon>
        <h1>Enter Education</h1>
        <AddIcon>Add Education</AddIcon>

        <h1>Enter Skills</h1>
        <AddIcon>Add Skills</AddIcon>
        <h1>Enter Achievements</h1>
        <AddIcon>Add Achievements</AddIcon>
      </div>
    </div>
  );
}

export default App;
