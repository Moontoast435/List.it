
const saveTodo = (todo) => {

    try {
        let todoItems = JSON.parse(localStorage.getItem('todos')) || [];
        todoItems.push({todo})
        localStorage.setItem('todos', JSON.stringify(todoItems));
        console.log('Successfully stored todo!');
    } catch(err) {
        console.error(`Failed to set todo. Reason : ${err}`);

    }

}

const getTodo = (todo) => {

    try {
        const retrievedTodo = (JSON.parse(localStorage.getItem(todo)));
        console.log(`Successfully retrieved todo!`);
        return retrievedTodo;
    } catch (err) {
        console.error(`Failed to retrieve todo. Reason : ${err}`)
    }

}

const getAllTodos = () => {
    try {
        const items = JSON.parse(localStorage.todos);
        console.log(`Succesfully retrieved all todos!`);
        return items;
    } catch (err) {
        console.error(`Failed to retrieve todo. Reason : ${err}`);
    }
}



const refreshTodos = () => {
    const todoList = document.getElementsByClassName('todo-items')[0];
    todoList.textContent = '';
    const data = getAllTodos();
    
    data.map((t, i) => {
        console.log(t.todo.title);
        const todoItem = document.createElement('div');
        todoItem.id = i;

        const todoTitle = document.createElement('h3');
        todoTitle.textContent = t.todo.title;
        todoItem.appendChild(todoTitle);

        const todoDescription = document.createElement('p');
        todoDescription.textContent = t.todo.description;
        todoItem.appendChild(todoDescription);

        
        todoList.appendChild(todoItem);
    })
    
}
const clearTodos = () => {
    localStorage.removeItem('todos');
//     let items = JSON.parse(localStorage.todos);
//     console.log(items);
//     for (let i = 0 ; i < items.length ; i ++ ) {
//         items.splice(i, 1)
//     }
//     console.log(items);
    refreshTodos();
}
export {saveTodo, getTodo, getAllTodos, clearTodos, refreshTodos};