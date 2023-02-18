import {
  createProject,
  refreshTodos,
  refreshProjects,
} from "../controllers/localstorage";

const createProjectTab = () => {
  const overlay = document.getElementsByClassName('modal-overlay-3')[0];
  overlay.classList.add('modal-visible');

  const projectNameFormContainer = document.createElement('div');
  projectNameFormContainer.classList = "new-project-form";
  const projectNameForm = document.createElement('input');
  projectNameForm.setAttribute('type', 'text');
  const projectNameSubmit = document.createElement('button');
  projectNameSubmit.textContent = 'Create Project';
  
  const closeBtn = document.createElement('button');
  closeBtn.classList = "close-project-name-button";
  closeBtn.textContent = 'X';
  closeBtn.addEventListener('click', function () {
      overlay.classList.remove('modal-visible');
      overlay.textContent = '';
  })

  projectNameFormContainer.append(projectNameForm, projectNameSubmit,closeBtn);
  let projectName;

  projectNameSubmit.onclick = function() {
    projectName = projectNameForm.value;
    createProject(projectName);
    refreshTodos();
    overlay.classList.remove('modal-visible');
    overlay.textContent = '';
  }

  overlay.appendChild(projectNameFormContainer);

  document.body.appendChild(overlay);
  
};

const displayExistingProjects = () => {
  const data = localStorage;
  for (let key of Object.keys(data)) {
    const projectBtn = document.createElement("button");
    projectBtn.classList = "project-button";
    projectBtn.textContent = key;
    

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
