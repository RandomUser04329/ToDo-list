class Content {
    name;
    desc;
    DateStarted;
    content = {};

    constructor(Title, Description, DateStarted) {
        this.name = Title;
        this.desc = Description;
        this.DateStarted = DateStarted;
    }

    ConstructContent() { 
        if (this.name != "" && this.desc != "" && this.DateStarted != "") {
            content = {
                ContentName: this.name,
                ContentDesc: this.desc,
                ContentDateStart: this.DateStarted,
            }

            return content
        }
    }

    get Name() {
        return this.name;
    }

    get Description() {
        return this.desc;
    }  

    get DateStarted() {
        return this.DateStarted;
    }

} 

class Project extends Content {
    project;
    EndDate;

    constructor(Title, Description, DateStarted, DateEnd) { 
        super(Title, Description, DateStarted);
        this.EndDate = DateEnd;
    }
    
    ConstructProjectContent() {
        super.ConstructContent();
    }


    get getProjectName() {
        return super.Name;
    }

    get getProjectDesc() {
        return super.Description;
    }

    get getProjectDateStarted() {
        return super.DateStarted;
    }

    set NewProjectName(PName) {
        this.name = PName;
    }

    set NewProjectDesc(PDesc) {
        this.desc = PDesc;
    }

    set NewProjectDueDate(PEndDate) {
        this.EndDate = PEndDate;
    }

}




class Task extends Content {
    Task;

    constructor() {
        super(Title, Description, DateStarted);
    }

    
}


export { 
    Content, 
    Project, 
    Task,
}