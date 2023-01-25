import './style.css';

function layout() {
    const mainContainer = document.createElement('div');
    mainContainer.classList = 'main';
    const navBar = document.createElement('div');
    navBar.classList = 'navbar';

    mainContainer.appendChild(navBar);
    
    return mainContainer;
}

export {layout}