import {createTodo} from '../DOMstuff/createTodo';

const toDoRoutes = () => {
    const saveTodo = (todo) => {

        try {
            let todoItems = JSON.parse(localStorage.getItem('todos')) || [];
            todoItems.push({todo})
            localStorage.setItem('todos', JSON.stringify(todoItems));
            return`successfully saved todo!`;
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
        try {
            const data = getAllTodos();

            data.map((t, i) => {
                createTodo(t, i);
            })

            return`Refreshed todos`;
            
        } catch (err) {
            return `Failed to refresh todos. ${err}`;

        }
        
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
    return {
        saveTodo,
        getTodo,
        getAllTodos,
        refreshTodos,
        clearTodos
    }
}
export default toDoRoutes;