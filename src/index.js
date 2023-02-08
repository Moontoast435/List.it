import { layout } from './layout/layout';
import './style.css';
import {refreshTodos} from './controllers/localstorage';

// console.log(JSON.parse(localStorage.getItem(`${drinkWater}`)));

// console.log(localStorage.todos);

document.body.appendChild(layout());


refreshTodos('Project 1');