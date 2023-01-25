import { add } from 'lodash';
import './style.css';

function layout() {
    const mainContainer = document.createElement('div');
    mainContainer.classList = 'main';
    const navBar = document.createElement('div');
    navBar.classList = 'navbar';

    const defaultProject = document.createElement('button');
    defaultProject.classList = 'project-button';
    defaultProject.textContent = 'Project 1';

    const addProjectButton = document.createElement('button');
    addProjectButton.classList = 'add-project-button';
    addProjectButton.textContent = '+';

    navBar.appendChild(defaultProject);
    navBar.appendChild(addProjectButton);

    const addTodoButton = document.createElement('button');
    addTodoButton.classList = 'add-todo-button';
    addTodoButton.textContent = 'Click here to create a new to-do list item';
    
    mainContainer.appendChild(navBar);
    mainContainer.appendChild(addTodoButton);
    return mainContainer;
}

export {layout}