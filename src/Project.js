
class CreateProject {

    static ProjectTitle;
    static ProjectDescription;
    //static ProjectDataCreated;
    //static ProjectTask;

    constructor(ProjectTitle, ProjectDesc/*,ProjectDateCreated*/) {
        this.ProjectTitle = ProjectTitle;
        this.ProjectDescription = ProjectDesc;
    }

    static getProjectName() {
        return ProjectTitle;
    }

    static getProjectDescription() {
        return ProjectDescription;
    }
    


}

export default CreateProject;