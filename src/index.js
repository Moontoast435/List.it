import { layout } from './layout/layout';
import './style.css';
import { refreshTodos } from './DOMstuff/createTodoForm';

// console.log(JSON.parse(localStorage.getItem(`${drinkWater}`)));



document.body.appendChild(layout());

refreshTodos();