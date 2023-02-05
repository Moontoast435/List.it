import {createTodo} from '../DOMstuff/createTodo';

    // const createProject = () => {
    //     try {

    //     } catch (err) {

    //     }
    // }

    const saveTodo = (todo, project) => {

        try {
            let todoItems = JSON.parse(localStorage.getItem(`${project}`)) || [];
            todoItems.push({todo});
            localStorage.setItem(`${project}`, JSON.stringify(todoItems));
            console.log(`Successfully saved todo!`)
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

    const getAllTodos = (project) => {
        try {
            const items = JSON.parse(localStorage[`${project}`]);
            console.log(`Succesfully retrieved all todos!`);
            return items;
        } catch (err) {
            console.error(`Failed to retrieve todo. Reason : ${err}`);
        }
    }



    const refreshTodos = (project) => {
        const todoList = document.getElementsByClassName('todo-items')[0];
        todoList.textContent = '';
        try {
            const data = getAllTodos(project);
            data.map((t, i) => {
                createTodo(t, i);
            })

            return`Refreshed todos`;
            
        } catch (err) {
            return `Failed to refresh todos. ${err}`;

        }
        
    }

    const clearTodos = (project) => {
        localStorage.removeItem(`${project}`);
        refreshTodos();
    }

    const deleteTodo = (project, id) => {
        try {
            let todoItems = JSON.parse(localStorage.getItem(`${project}`));
            todoItems.splice(id , 1);
            localStorage.setItem(`${project}`, JSON.stringify(todoItems));
            refreshTodos();
            console.log(`Todo deleted`);
        } catch (err) {
            console.error(`Could not delete todo: ${err}`);
        }
    }

    const changeCompletedTrue = (project, id) => {
        try {
            let todoItems = JSON.parse(localStorage.getItem(`${project}`));
            todoItems[id].todo.isCompleted = 'true';
            localStorage.setItem(`${project}`, JSON.stringify(todoItems));
            
            console.log(`Todo completed`);
        } catch (err) {
            console.error(`Could not complete todo: ${err}`);
        }
    }

    const changeCompletedFalse = (project, id) => {
        try {
            let todoItems = JSON.parse(localStorage.getItem(`${project}`));
            todoItems[id].todo.isCompleted = false;
            localStorage.setItem(`${project}`, JSON.stringify(todoItems));
           
            console.log(`Todo uncomplete`);
        } catch (err) {
            console.error(`Could not uncomplete todo: ${err}`);
        }
    }

    const checkCompletedStatus = (project, id) => {
        let todoItems = JSON.parse(localStorage.getItem(`${project}`));
        if (todoItems[id].todo.isCompleted) {
            return true;
        } else {
            return false
        }
    }
export {saveTodo, getTodo, getAllTodos, refreshTodos, clearTodos, deleteTodo, changeCompletedTrue, changeCompletedFalse, checkCompletedStatus};