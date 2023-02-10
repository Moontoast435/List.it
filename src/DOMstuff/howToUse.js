import './style.css';

const howToUse = () => {
    const overlay = document.createElement('div');
    overlay.classList = "modal-overlay-2";

    const container = document.createElement('div');
    container.classList = 'how-to-container';

    const closeBtn = document.createElement('button');
    closeBtn.classList = "close-form-button";
    closeBtn.textContent = 'X';
    closeBtn.addEventListener('click', function () {
        overlay.classList.remove('modal-visible');
    })

    container.appendChild(closeBtn);

    const header = document.createElement('h2');
    header.textContent = 'How to use';
    container.appendChild(header);

    const info = document.createElement('p');
    info.textContent = `Simply click on the new todo button to create a new todo. You can also expand each todo by clicking on the "More" button, and delete specific todos.  You can clear all the todos within a project by clicking "Clear todos". Finally, if you want to make separate todo lists, click on the + button to create a new project. You may only have up to five different projects. Thanks for trying out the app!`;
    container.appendChild(info);

    overlay.appendChild(container);
    document.body.appendChild(overlay);

    const howToUseBtn = document.createElement('button');
    howToUseBtn.classList = 'how-to-use-button';
    howToUseBtn.textContent = 'How to use';
    howToUseBtn.addEventListener('click' , function () {
        
        (overlay.classList === 'modal-overlay-2 modal-visible') 
        ? overlay.classList.remove('modal-visible') 
        : overlay.classList.add('modal-visible');
    })


    return howToUseBtn

}

export { howToUse };