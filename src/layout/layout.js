import "./style.css";
import { createForm } from "../DOMstuff/createTodoForm";
import { createProjectTab } from "../DOMstuff/createProject";
import { clearTodos, createProject } from "../controllers/localstorage";

function layout() {
  const howToUse = document.createElement("p");
  howToUse.textContent = `Simply click on the new todo button to create a new todo. You can also expand each todo by clicking on the "More" button, and delete specific todos. You can clear all the todos within a project by clicking "Clear todos". Finally, if you want to make separate todo lists, click on the + button to create a new project. You may only have up to five different projects. Thanks for trying out the app!`;
  howToUse.classList = "how-to";
  document.body.appendChild(howToUse);

  const mainContainer = document.createElement("div");
  mainContainer.classList = "main";
  const navBar = document.createElement("div");
  navBar.classList = "navbar";

  const defaultProject = document.createElement("button");
  defaultProject.classList = "project-button";
  defaultProject.textContent = "Project 1";

  const addProjectButton = document.createElement("button");
  addProjectButton.classList = "add-project-button";
  addProjectButton.textContent = "+";

  addProjectButton.addEventListener("click", createProjectTab);

  navBar.appendChild(defaultProject);
  navBar.appendChild(addProjectButton);

  const addTodoButton = document.createElement("button");
  addTodoButton.classList = "add-todo-button";
  addTodoButton.textContent = "Click here to create a new to-do list item";
  addTodoButton.addEventListener("click", createForm);

  const clearAllTodos = document.createElement("button");
  clearAllTodos.classList = "clear-todos-button";
  clearAllTodos.textContent = "Clear todos";
  clearAllTodos.addEventListener("click", function () {
    clearTodos(true);
  });

  mainContainer.appendChild(navBar);
  mainContainer.appendChild(addTodoButton);
  mainContainer.appendChild(clearAllTodos);

  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList = "todo-items";
  mainContainer.appendChild(todoItemContainer);

  return mainContainer;
}

export { layout };
