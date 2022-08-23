import { Chef } from './chef';

const hawaiianPizza = new Chef().makeHawaiianPizza();
const pepperoniPizza = new Chef().makePepperoniPizza();

const americanHotDog = new Chef().makeAmericanHotDog();


console.log(hawaiianPizza);
console.log(pepperoniPizza);
console.log(americanHotDog);