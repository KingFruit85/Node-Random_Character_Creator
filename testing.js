const _ = require ('lodash');
const classes =require('./classes.js');
const weapons =require('./weapons.js');

var a = []
a.push( _.sampleSize(weapons.MartialMeleeWeapons, 2)).Name;

console.log(a)
