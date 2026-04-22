class Content {
    name;
    desc;
    DateStarted;

    constructor(Title, Description, DateStarted) {
        this.name = Title;
        this.desc = Description;
        this.DateStarted = DateStarted;
    }

    get Name() {
        return this.name;
    }

    get Description() {
        return this.desc;
    }  

} 

class Project extends Content {
    #EndDate;

    constructor(Title, Description, DateStarted, DateEnd) { 
        super(Title, Description, DateStarted);
        this.#EndDate = DateEnd;
    }

    get ProjectName() {
        super.Name();
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