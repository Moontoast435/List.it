import './style.css';

const createForm = () => {

    const toggleForm = () => {
        const overlay = document.getElementsByClassName('modal-overlay')[0];
        overlay.classList.add('modal-visible');
    }

    if (!document.getElementsByClassName('modal-overlay')[0]) {

        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');
        formContainer.classList = 'form-container';

        const form =   `<form>
                        <h2> Create your todo here!</h2>
                        <label for="todo-title"> Todo title: </label>
                        <input type="text" name="todo-data-title id="todo-title">
                        <label for="todo-description"> Todo description: </label>
                        <textarea></textarea>
                        <label> Todo deadline: </label>
                        <input type="date" name="todo-data-deadline" id="todo-date"> 
                        </form>`;
        formContainer.innerHTML = form;
    
        overlay.appendChild(formContainer);

        overlay.classList = 'modal-overlay';
        overlay.classList.add('modal-visible');
        document.body.appendChild(overlay);

    } else {
        toggleForm();
    }
   



}



export {createForm };