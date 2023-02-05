import {deleteTodo, changeCompletedFalse, changeCompletedTrue} from '../controllers/localstorage';

const createTodo = (t, i) => {
    const todoList = document.getElementsByClassName('todo-items')[0];
    
    const todoItem = document.createElement('div');
    todoItem.id = i;

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = t.todo.title;
    todoItem.appendChild(todoTitle);

    const todoDescription = document.createElement('p');
    todoDescription.textContent = t.todo.description;
    todoItem.appendChild(todoDescription);

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.id = i;
    deleteTodoBtn.textContent = `DELETE`;
    deleteTodoBtn.onclick = function() {deleteTodo(parseInt(deleteTodoBtn.id))};
    todoItem.appendChild(deleteTodoBtn);

    const dueDate = document.createElement('p');
    dueDate.classList = 'hidden-details';
    dueDate.textContent = t.todo.dueDate;
    todoItem.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.classList = 'hidden-details';
    priority.textContent = t.todo.priority;
    todoItem.appendChild(priority);

    const isCompleted = document.createElement('input');
    isCompleted.classList = 'hidden-details';
    isCompleted.id = i;
    isCompleted.setAttribute('type', 'checkbox');
    isCompleted.addEventListener('click', function () {
        if (!this.checked) {
            changeCompletedFalse(parseInt(isCompleted.id))    
        } else {
            changeCompletedTrue(parseInt(isCompleted.id))
        }
    }) ;
    todoItem.appendChild(isCompleted);
    
    todoList.appendChild(todoItem);
}

export {createTodo};