import { createProject, refreshTodos } from "../controllers/localstorage";

const createProjectTab = () => {
    const newProject = document.createElement('button');
    newProject.classList = 'project-button';
    
    const existingProjects = document.getElementsByClassName('project-button');
    const projectName = `Project ${existingProjects.length + 1}`
    newProject.textContent = projectName;

    const navBar = document.getElementsByClassName('navbar')[0];
    navBar.appendChild(newProject);

    createProject(projectName);
    refreshTodos(projectName);
}

export { createProjectTab } ;