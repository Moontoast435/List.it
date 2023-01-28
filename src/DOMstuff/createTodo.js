const createTodo = (t, i) => {
    const todoList = document.getElementsByClassName('todo-items')[0];
    todoList.textContent = '';
    
    const todoItem = document.createElement('div');
    todoItem.id = i;

    const todoTitle = document.createElement('h3');
    todoTitle.textContent = t.todo.title;
    todoItem.appendChild(todoTitle);

    const todoDescription = document.createElement('p');
    todoDescription.textContent = t.todo.description;
    todoItem.appendChild(todoDescription);

    
    todoList.appendChild(todoItem);
}

export {createTodo};