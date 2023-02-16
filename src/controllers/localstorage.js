import { createTodo } from "../DOMstuff/createTodo";
import { displayExistingProjects } from "../DOMstuff/createProject";

const createProject = (project) => {
  try {
    let todoItems = [];
    localStorage.setItem(`${project}`, JSON.stringify(todoItems));
    console.log(`Successfully created new project`);
  } catch (err) {
    console.error(`Failed to create new project. Reason : ${err}`);
  }
};

const refreshProjects = (StayOnCurrentProject) => {
  if (StayOnCurrentProject === true) {
    return;
  } else {
    let existingProjects = document.getElementsByClassName("project-button");

    while (existingProjects.length > 0) {
      existingProjects[0].parentNode.removeChild(existingProjects[0]);
    }

    displayExistingProjects();
  }
};

const saveTodo = (todo, project) => {
  try {
    let todoItems = JSON.parse(localStorage.getItem(`${project}`)) || [];
    todoItems.push({ todo });
    localStorage.setItem(`${project}`, JSON.stringify(todoItems));
    console.log(`Successfully saved todo!`);
  } catch (err) {
    console.error(`Failed to set todo. Reason : ${err}`);
  }
};

const getTodo = (todo) => {
  try {
    const retrievedTodo = JSON.parse(localStorage.getItem(todo));
    console.log(`Successfully retrieved todo!`);
    return retrievedTodo;
  } catch (err) {
    console.error(`Failed to retrieve todo. Reason : ${err}`);
  }
};

const getAllTodos = (project) => {
  try {
    const items = JSON.parse(localStorage[`${project}`]);
    console.log(`Succesfully retrieved all todos!`);
    return items;
  } catch (err) {
    console.error(`Failed to retrieve todo. Reason : ${err}`);
  }
};

const refreshTodos = (project, StayOnCurrentProject) => {
  if (localStorage.length === 0) {
    createProject("Project 1");
    refreshProjects(StayOnCurrentProject);
  } else {
    refreshProjects(StayOnCurrentProject);
  }
  const todoList = document.getElementsByClassName("todo-items")[0];
  todoList.textContent = "";
  try {
    const data = getAllTodos(project);
    data.map((t, i) => {
      createTodo(t, i, project);
    });

    console.log(`Refreshed todos`);
  } catch (err) {
    return `Failed to refresh todos. ${err}`;
  }
};

const clearTodos = (StayOnCurrentProject) => {
  try {
    const currentProjectName = document.getElementById("Selected").textContent;
    console.log(currentProjectName);
    let todoItems = JSON.parse(localStorage.getItem(`${currentProjectName}`));
    todoItems = [];
    localStorage.setItem(`${currentProjectName}`, JSON.stringify(todoItems));
    refreshTodos(currentProjectName, StayOnCurrentProject);
    console.log(`Cleared all todos!`);
  } catch (err) {
    console.error(`Failed to clear todos. ${err}`);
  }
};

const deleteTodo = (project, id) => {
  try {
    let todoItems = JSON.parse(localStorage.getItem(`${project}`));
    todoItems.splice(id, 1);
    localStorage.setItem(`${project}`, JSON.stringify(todoItems));
    refreshTodos(project, true);
    console.log(`Todo deleted`);
  } catch (err) {
    console.error(`Could not delete todo: ${err}`);
  }
};

const changeCompletedTrue = (project, id) => {
  try {
    let todoItems = JSON.parse(localStorage.getItem(`${project}`));
    todoItems[id].todo.isCompleted = "true";
    localStorage.setItem(`${project}`, JSON.stringify(todoItems));

    console.log(`Todo completed`);
  } catch (err) {
    console.error(`Could not complete todo: ${err}`);
  }
};

const changeCompletedFalse = (project, id) => {
  try {
    let todoItems = JSON.parse(localStorage.getItem(`${project}`));
    todoItems[id].todo.isCompleted = false;
    localStorage.setItem(`${project}`, JSON.stringify(todoItems));

    console.log(`Todo uncomplete`);
  } catch (err) {
    console.error(`Could not uncomplete todo: ${err}`);
  }
};

const checkCompletedStatus = (project, id) => {
  let todoItems = JSON.parse(localStorage.getItem(`${project}`));
  if (todoItems[id].todo.isCompleted) {
    return true;
  } else {
    return false;
  }
};
export {
  saveTodo,
  getTodo,
  getAllTodos,
  refreshTodos,
  clearTodos,
  deleteTodo,
  changeCompletedTrue,
  changeCompletedFalse,
  checkCompletedStatus,
  createProject,
  refreshProjects,
};
