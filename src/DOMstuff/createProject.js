import {
  createProject,
  refreshTodos,
  refreshProjects,
} from "../controllers/localstorage";

const createProjectTab = () => {
  const existingProjects = document.getElementsByClassName("project-button");
  const projectName = `Project ${existingProjects.length + 1}`;

  createProject(projectName);
  refreshTodos(projectName);
};

const displayExistingProjects = () => {
  const data = localStorage;

  for (let i = 0; i < data.length; i++) {
    const projectBtn = document.createElement("button");
    projectBtn.classList = "project-button";
    projectBtn.textContent = `Project ${i + 1}`;

    const navBar = document.getElementsByClassName("navbar")[0];
    const addBtn = document.getElementsByClassName("add-project-button")[0];

    navBar.insertBefore(projectBtn, addBtn);

    if (data.length === 5) {
      addBtn.style.display = "none";
    }
  }

  const existingProjects = document.getElementsByClassName("project-button");
  existingProjects[0].id = "Selected";

  for (let i = 0; i < existingProjects.length; i++) {
    existingProjects[i].addEventListener("click", function () {
      refreshTodos(existingProjects[i].textContent);
      document.getElementById("Selected").removeAttribute("id");
      existingProjects[i].id = "Selected";
    });
  }
};

export { createProjectTab, displayExistingProjects };
