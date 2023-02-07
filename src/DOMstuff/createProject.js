import { createProject, refreshTodos, refreshProjects } from "../controllers/localstorage";

const createProjectTab = () => {

    const existingProjects = document.getElementsByClassName('project-button');
    const projectName = `Project ${existingProjects.length + 1}`



    createProject(projectName);
    refreshTodos(projectName);
}

const displayExistingProjects = () => {
    const newProject = document.createElement('button');
    newProject.classList = 'project-button';
    
    const existingProjects = document.getElementsByClassName('project-button');
    const projectName = `Project ${existingProjects.length + 1}`
    newProject.textContent = projectName;

    const navBar = document.getElementsByClassName('navbar')[0];
    const addBtn = document.getElementsByClassName('add-project-button')[0];

    navBar.insertBefore(newProject, addBtn);
}

export { 
    createProjectTab,
    displayExistingProjects
};