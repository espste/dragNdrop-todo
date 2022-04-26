import { Project, ProjectStatus } from '../models/project';


//Project State Managment
type Listener<T> = (items: T[]) => void;
    
class State<T> {
    protected listeners: Listener<T>[] = [];
    
    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn)
    }
}

export class ProjectState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
    }

    //checking if this.instance is a thing, if not creating a new one
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            ProjectStatus.Active
        );
        this.projects.push(newProject);
        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find(proj => proj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }

    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export const projectState = ProjectState.getInstance();