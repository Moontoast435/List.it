const saveTodo = (todo) => {

    try {
        localStorage.setItem(todo, JSON.stringify(todo));
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
export {saveTodo, getTodo};