import { createProject, refreshTodos, refreshProjects } from "../controllers/localstorage";

const createProjectTab = () => {

    const existingProjects = document.getElementsByClassName('project-button');
    const projectName = `Project ${existingProjects.length + 1}`



    createProject(projectName);
    refreshTodos(projectName);
}

const displayExistingProjects = () => {
    const data = localStorage;
   

    for (let i = 0 ; i < data.length ; i++) {
        const projectBtn = document.createElement('button');
        projectBtn.classList = 'project-button';
        projectBtn.textContent = `Project ${i + 1}`;
        
        const navBar = document.getElementsByClassName('navbar')[0];
        const addBtn = document.getElementsByClassName('add-project-button')[0];
    
        navBar.insertBefore(projectBtn, addBtn);
    }


}

export { 
    createProjectTab,
    displayExistingProjects
};