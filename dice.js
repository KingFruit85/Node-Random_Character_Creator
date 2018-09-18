const utils =require('./utils.js');

//functions to simulate rolling various x-sided dice.
var rollD20 = () => {return utils.getRandomNumber( 1 , 20 );}

var rollD10 = () => {return utils.getRandomNumber( 1 , 10 );}

var rollD8 = () => {return utils.getRandomNumber( 1 , 8 );}

var rollD4 = () => {return utils.getRandomNumber( 1 , 4 );}

var rollD6 = () => {return utils.getRandomNumber( 1 , 6 );}

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
