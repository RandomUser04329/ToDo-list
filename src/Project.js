class Content {
    #name;
    #desc;
    #dateCreated;
    #dateToDue;

    constructor(Title, Description) {
        this.#name = Title;
        this.#desc = Description;
    }

    get Name() {
        return this.#name;
    }

    get Description() {
        return this.#desc;
    }   

    get DateCreated() {
        return this.#dateCreated;
    }

    get DateDue() {
        return this.#dateToDue;
    }


} 

class Project extends Content {
    project;
    #name;
    #desc;
    #dateCreated;

    constructor() { 
        super(Title, Description);
        this.#name = Title;
        this.#desc = Description;
    }

    CreateProject() {
        project = { 
            ProjectTitle: this.#name,
            ProjectDescription: this.#desc,
        }

        return this.project;
    }

}




class Task extends Content {
    Task;

    constructor() {
        super();
    }

    
}


export { 
    Content, 
    Project, 
    Task,
}