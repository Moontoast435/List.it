import {deleteTodo, changeCompletedFalse, changeCompletedTrue, checkCompletedStatus} from '../controllers/localstorage';

const createTodo = (t, i, project) => {
   
    const todoList = document.getElementsByClassName('todo-items')[0];
    const todoItem = document.createElement('div');
    todoItem.id = i;

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = t.todo.title;
    todoItem.appendChild(todoTitle);
    
    const todoDescription = document.createElement('p');
    todoDescription.textContent = t.todo.description;
    todoItem.appendChild(todoDescription);

    const dueDate = document.createElement('p');
    dueDate.classList = 'hidden-details';
    dueDate.textContent = `Due date : ${t.todo.dueDate}`;
    todoItem.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.classList = 'hidden-details';
    priority.textContent = `Priority : ${t.todo.priority}`;

    if (t.todo.priority === 'High') {
        todoItem.style.backgroundColor = 'red';
    }
    todoItem.appendChild(priority);

    const isCompleted = document.createElement('input');
    isCompleted.classList = 'hidden-details';

    isCompleted.id = i;
    isCompleted.setAttribute('type', 'checkbox');

    let checkedStatus = checkCompletedStatus(project, parseInt(i));

    checkedStatus ? isCompleted.checked = true 
    : isCompleted.checked = false;

    isCompleted.addEventListener('click', function () {
        !this.checked 
        ? changeCompletedFalse(project ,parseInt(isCompleted.id)) 
        : changeCompletedTrue(project ,parseInt(isCompleted.id));
    }) ;

    todoItem.appendChild(isCompleted);

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.id = i;
    deleteTodoBtn.textContent = `DELETE`;
    deleteTodoBtn.onclick = function() {deleteTodo(project, parseInt(deleteTodoBtn.id))};
    todoItem.appendChild(deleteTodoBtn);

    const expandBtn = document.createElement('button');
    expandBtn.textContent = 'Show more details';
    
    const hideDetails = document.createElement('button');
    hideDetails.textContent = 'Hide details';
    todoItem.appendChild(hideDetails);
    hideDetails.style.display = 'none';

    hideDetails.addEventListener('click', function () {

        const revealedDetails = todoItem.getElementsByClassName('hidden-details');

        for (let i = 0 ; i < revealedDetails.length ; i ++ ) {
            revealedDetails[i].classList.remove('reveal-details');
        }
        expandBtn.style.display = 'block';
        hideDetails.style.display = 'none';
    
    })

    expandBtn.addEventListener('click', function () {

        let hiddenDetails = todoItem.getElementsByClassName('hidden-details');
        
        for (let i = 0 ; i < hiddenDetails.length ; i ++ ) {
            hiddenDetails[i].classList.add('reveal-details');
        }

        expandBtn.style.display = 'none';
        hideDetails.style.display = 'block';
        
        
    })

   

    todoItem.appendChild(expandBtn);


    
    todoList.appendChild(todoItem);
   
}

export {createTodo};