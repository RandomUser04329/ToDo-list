import "./style.css";
import helloTest from "./ShowPage.js";
import CreateProject from "./Project.js";


let testDescription = "I am a description for a project"
let testTitle = "Project title";

let UserProject = new CreateProject(testTitle, testDescription);

console.log(UserProject.getProjectName());

//console.log(helloTest);