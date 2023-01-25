import './style.css';

function layout() {
    const mainContainer = document.createElement('div');
    mainContainer.classList = 'main';
    const navBar = document.createElement('div');
    navBar.classList = 'navbar';

    const defaultProject = document.createElement('button');
    defaultProject.classList = 'project-button';
    defaultProject.textContent = 'Project 1';
    
    navBar.appendChild(defaultProject);

    mainContainer.appendChild(navBar);
    
    return mainContainer;
}

export {layout}