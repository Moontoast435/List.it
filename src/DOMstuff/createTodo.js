import {deleteTodo} from '../controllers/localstorage';

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

    
    
    todoList.appendChild(todoItem);
}

export {createTodo};