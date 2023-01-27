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
export {saveTodo, getTodo, getAllTodos};