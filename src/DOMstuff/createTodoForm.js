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

        const createTodoForm = document.createElement('form');
        formContainer.appendChild(createTodoForm);

        overlay.appendChild(formContainer);

        overlay.classList = 'modal-overlay';
        overlay.classList.add('modal-visible');
        document.body.appendChild(overlay);
    } else {
        toggleForm();
    }
   



}



export {createForm };