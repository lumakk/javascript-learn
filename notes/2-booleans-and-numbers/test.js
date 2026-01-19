const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const min = 1;
const max = 5;

let randomNumber = Math.floor(Math.random() * (max - min) + min);

switch (randomNumber) {
  case 1:
    console.log(fortune1);
    break;
  case 2:
    console.log(fortune2);
    break;
  case 3:
    console.log(fortune3);
    break;
  case 4: 
    console.log(fortune4);
    break;
  case 5:
    console.log(fortune5);
    break;
  default:
    break;
}
