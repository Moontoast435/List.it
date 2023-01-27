import { add } from 'lodash';
import './style.css';
import { createForm } from '../DOMstuff/createTodoForm';

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
    addTodoButton.addEventListener('click', createForm);

    mainContainer.appendChild(navBar);
    mainContainer.appendChild(addTodoButton);

    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList = 'todo-items';
    mainContainer.appendChild(todoItemContainer);
    
    return mainContainer;
}

export {layout}