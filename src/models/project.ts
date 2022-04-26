
//Project Type (custom type class) - so it can be instansiated
//using enums when we only have two things to choose from
export enum ProjectStatus { 
    Active, 
    Finished 
}

export class Project {
    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public people: number,
        public status: ProjectStatus
    ) {};
}