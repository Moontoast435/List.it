import { layout } from './layout/layout';
import './style.css';
import { todoItem } from './todo/todo';


// const drinkWater = todoItem('Drink water','Make sure you drink 3 glasses of water a day', 'Today','High', false);

// localStorage.setItem(`${drinkWater}`, JSON.stringify(drinkWater));

// console.log(JSON.parse(localStorage.getItem(`${drinkWater}`)));



document.body.appendChild(layout());