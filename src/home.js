import "./style.css";
import helloTest from "./ShowPage.js";
import { Content, Project, Task } from "./Project.js";

let testTitle = "Project title";
let testDescription = "I am a description for a project"
let testStartDate = "01/01/01";
let testEndDate = "12/12/12";

let UserProject = new Project(testTitle, testDescription, testStartDate, testEndDate);

console.log(UserProject.ProjectName());

