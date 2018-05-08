//functions to simulate rolling various x-sided dice.
var rollD20 = () => {
  return Math.floor(Math.random() * 20) + 1;
}

var rollD10 = () => {
  return Math.floor(Math.random() * 10) + 1;
}

var rollD8 = () => {
  return Math.floor(Math.random() * 8) + 1;
}



var rollD4 = () => {
  return Math.floor(Math.random() * 4) + 1;
}

//Roll a six sided dice (D6)
var rollD6 = () => {
  return Math.floor(Math.random() * 6) + 1; //produces a number between 1 - 6 randomly
}

//finds the smallest number in an array and removes it, used in rollstat
var findSmallest = (numbers) => {
  const smallest = Math.min.apply(null, numbers);
  const pos = numbers.indexOf(smallest);
  return numbers.slice(0, pos).concat(numbers.slice(pos +1));

}
var add = (a,b) => {
  return a+b;
}

//Rolls a D6 4 times and returns the three highest numbers added together
var rollStat = () => {
  var total = [];
  for(var i=0; i < 4; i++){
    total.push(rollD6());
  }
  var filteredTotal = findSmallest(total);
  return filteredTotal.reduce(add, 0);
}

//Runs rollStat 6 times for char stat creation
var statList = () => {
  var totals = [];
  for(var i=0;i<6;i++){
    totals.push(rollStat());
  }
  return totals;
}



module.exports = {
rollD20,
rollD10,
rollD8,
rollD6,
rollD4,
rollStat,
findSmallest,
statList
}
