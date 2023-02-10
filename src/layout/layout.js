import "./style.css";
import { createForm } from "../DOMstuff/createTodoForm";
import { howToUse } from "../DOMstuff/howToUse";
import { createProjectTab } from "../DOMstuff/createProject";
import { clearTodos, createProject } from "../controllers/localstorage";

function layout() {

  document.body.appendChild(howToUse());

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
  addTodoButton.textContent = "Add todo";
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
