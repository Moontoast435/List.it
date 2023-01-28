import { saveTodo, refreshTodos } from '../controllers/localstorage';
import './style.css';
import { todoItem } from '../todo/todo';

const createForm = () => {

    const toggleFormOn = () => {
        const overlay = document.getElementsByClassName('modal-overlay')[0];
        overlay.classList.add('modal-visible');
    }

    const toggleFormOff = () => {
        const overlay = document.getElementsByClassName('modal-overlay')[0];
        overlay.classList.remove('modal-visible');
    }

    if (!document.getElementsByClassName('modal-overlay')[0]) {

        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');
        formContainer.classList = 'form-container';

        const form =   `<button id="close-form-button"> X </button>
                        <form id="create-todo-form">
                        <h2> Create your todo here!</h2>
                        <label for="todo-title"> Todo title: </label>
                        <input type="text" name="todo-data-title" id="todo-title">
                        <label for="todo-description"> Todo description: </label>
                        <textarea id="todo-description" name="todo-description-data" value="Enter todo details here..." 
                        rows="5" 
                        cols="33">
                        </textarea>
                        <label> Todo deadline: </label>
                        <input type="date" name="todo-data-deadline" id="todo-date">
                        <p> Todo Priority: </p>
                        <div class="radio-labels"> 
                        <label for="radio-High" class="radio-label"> High </label>
                        <label for="radio-Medium" class="radio-label"> Medium </label>
                        <label for="radio-Low" class="radio-label"> Low </label>
                        </div>
                        <div class="radio-buttons">
                        <input type="radio" id="radio-High" name="todo-priority" value="High">
                        <input type="radio" id="radio-Medium" name="todo-priority" value="Medium">
                        <input type="radio" id="radio-Low" name="todo-priority" value="Low">
                        </div>
                        <input type="submit" id="create-todo-submit" value="Create">
                        </form>
                        `;
        formContainer.innerHTML = form;
    
        overlay.appendChild(formContainer);

        overlay.classList = 'modal-overlay';
        overlay.classList.add('modal-visible');

        document.body.appendChild(overlay);

        const closeButton = document.getElementById('close-form-button');
        closeButton.addEventListener('click', toggleFormOff);

        const createdForm = document.getElementById('create-todo-form');
        
        createdForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(createdForm);
            
            createdForm.addEventListener('formdata', (e) => {
                console.log('formdata fired');
              
                // Get the form data from the event object
                const data = e.formData;
                
                // Create todo using formData
                const todo = todoItem(...data.values())
                saveTodo(todo);
            
            overlay.remove();
            refreshTodos();
        });
    })
    } else {
        toggleFormOn();
    }
   
}



export { createForm };