import { layout } from './layout/layout';
import './style.css';
import { todoItem } from './todo/todo';


const drinkWater = todoItem('Drink water','Make sure you drink 3 glasses of water a day', 'Today','High', false);

console.log(drinkWater);



document.body.appendChild(layout());