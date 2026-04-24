import "./style.css";
import helloTest from "./ShowPage.js";
import { Content, Project, Task } from "./Project.js";

let testTitle = "Project title";
let testDescription = "I am a description for a project"
let testStartDate = "01/01/01";
let testEndDate = "12/12/12";

let p1 = new Project(testTitle, testDescription, testStartDate, testEndDate);

p1.NewProjectName = "A New Project Name";

//let test = p1.getProjectName;
let test = p1.ConstructProjectContent();

console.log(test);

