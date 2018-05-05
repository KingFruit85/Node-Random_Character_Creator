
const _ = require ('lodash');
const dice =require('./dice.js');





levelXp = [
{lvl:1,   xp:0,       PB: +2},
{lvl:2,   xp:300,     PB: +2},
{lvl:3,   xp:900,     PB: +2},
{lvl:4,   xp:2700,    PB: +2},
{lvl:5,   xp:6500,    PB: +3},
{lvl:6,   xp:14000,   PB: +3},
{lvl:7,   xp:23000,   PB: +3},
{lvl:8,   xp:34000,   PB: +3},
{lvl:9,   xp:48000,   PB: +4},
{lvl:10,  xp:64000,   PB: +4},
{lvl:11,  xp:85000,   PB: +4},
{lvl:12,  xp:100000,  PB: +4},
{lvl:13,  xp:120000,  PB: +5},
{lvl:14,  xp:140000,  PB: +5},
{lvl:15,  xp:165000,  PB: +5},
{lvl:16,  xp:195000,  PB: +5},
{lvl:17,  xp:225000,  PB: +6},
{lvl:18,  xp:265000,  PB: +6},
{lvl:19,  xp:305000,  PB: +6},
{lvl:20,  xp:355000,  PB: +6}
];

var findLevel = (level) => {
  var picked = _.filter(levelXp, x => x.lvl === level);
  return picked;
  }



var findProBo = (level) => {
  var list = findLevel(level);
  return list;


}



exports.levelXp = levelXp;
exports.findLevel = findLevel;
exports.findProBo = findProBo;
