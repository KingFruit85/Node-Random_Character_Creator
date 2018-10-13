const weapons =require('./weapons.js');
const armor =require('./armor.js');
const equipment =require("./equipment");
const _ = require ('lodash');

const request = require('request');


classes = [{class:"Bard",      www:"https://www.dndbeyond.com/characters/classes/bard"},
           {class:"Fighter",   www:"https://www.dndbeyond.com/characters/classes/fighter"},
           {class:"Barbarian", www:"https://www.dndbeyond.com/characters/classes/barbarian"},
           {class:"Cleric",    www:"https://www.dndbeyond.com/characters/classes/cleric"},
           {class:"Druid",     www:"https://www.dndbeyond.com/characters/classes/druid"},
           {class:"Monk",      www:"https://www.dndbeyond.com/characters/classes/monk"},
           {class:"Paladin",   www:"https://www.dndbeyond.com/characters/classes/paladin"},
           {class:"Ranger",    www:"https://www.dndbeyond.com/characters/classes/ranger"},
           {class:"Rogue",     www:"https://www.dndbeyond.com/characters/classes/rogue"},
           {class:"Sorcerer",  www:"https://www.dndbeyond.com/characters/classes/Sorcerer"},
           {class:"Warlock",   www:"https://www.dndbeyond.com/characters/classes/Warlock"},
           {class:"Wizard",    www:"https://www.dndbeyond.com/characters/classes/Wizard"}
]




var Barbarian = {
  description: "A fierce warrior of primitive background who can enter a battle rage.",
  firstLevelHP:12,
  savingThrows:["Strength", "Constitution"],
  skillProficiencies:["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
  armorProficiencies:["Light Armor", "Medium Armor", "Shields"],
  weaponProficiencies:["Simple Weapons", "Martial Weapons"],
  toolProficiencies:["None"],
  abilities:["Rage","Unarmored Defence"]
  

}

var Bard = {
  description: "The bard uses music and magic to support and inspire the rest of the party.",
  firstLevelHP:8,
  savingThrows:["Dexterity", "Charisma"],
  skillProficiencies:["Athletics","Acrobatics","Sleight Of Hand","Stealth","Arcana","History",
                      "Investigation","Nature","Religion","Animal Handling","Insight","Medicine",
                      "Perception","Survival","Deception","Intimidation","Performance","Persuasion"],
  armorProficiencies:["Light Armor"],
  weaponProficiencies:["Simple Weapons",	"HandCrossbows", "Longswords",	"\n Rapiers",	"Shortswords"],
  toolProficiencies:["Harpsichord", "Piano", "Pipe organ","bells", "chimes", "drums", "gong","fiddle", "harp", "lute",
                      "mandolin","flute", "pan pipes", "recorder", "shawm", "trumpet"],
  abilities:["Spellcasting","Ritual Casting","Bardic Inspiration"]

}

var Fighter = {
  savingThrows:["Strength",	"Constitution"],
  skillProficiencies:["Acrobatics",	"Animal","Handling",	"Athletics",	"History",	"Insight",	"Intimidation","Perception",	"Survival"],
  armorProficiencies:["All Armor", "Shields"],
  weaponProficiencies:["Simple Weapons",	"Martial Weapons"],
  toolProficiencies:["None"],
  abilities:["Second Wind"],
  extraAbilities:["Archery","Defense","Dueling","Great Weapon Fighting","Protection ","Two-Weapon Fighting"]
}



var Cleric = {
  savingThrows:["Wisdom", "Charisma"],
  skillProficiencies:["History", "Insight", "Medicine", "Persuasion", "Religion"],
  armorProficiencies:["Light Armor", "Medium Armor","Heavy Armor", "Shields"],
  weaponProficiencies:["Simple Weapons"],
  toolProficiencies:["None"],
  abilities:["Spellcasting","Life Domain","Disciple Of Life"]
}

var Druid = {
  savingThrows:["Intelligence","Wisdom"],
  skillProficiencies:["Arcana",	"Animal	Handling",
                      "Insight",	"Medicine",	"Nature",	"Perception",	"Religion",
                      "Survival"],
  armorProficiencies:["Light	Armor",	"Medium Armor",	"Shields"],
  weaponProficiencies:[	"Clubs",	"Daggers",	"Darts",	"Javelins",	"Maces",
                        "Quarterstaffs \n",	"Scimitars",	"Sickles",	"Slings",	"Spears"],
  toolProficiencies:[""],
  abilities:["Druidic",	"Spellcasting"],
  equipment:["Explorers Pack", "Druidic focus", "Herbalism	Kit"]
}

var Monk = {
  savingThrows:["Strength", "Dexterity"],
  skillProficiencies:["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
  armorProficiencies:[""],
  weaponProficiencies:["Simple Weapons", "Shortswords"],
  toolProficiencies:[""],
  equipment:["Dungeoneer’s	Pack","Explorer’s	Pack"],
  abilities:["Unarmored Defense", "Martial Arts"]
}

var Paladin = {
  savingThrows:["Wisdom", "Charisma"],
  skillProficiencies:["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
  armorProficiencies:["All Armor", "Shields"],
  weaponProficiencies:["Simple Weapons", "Martial Weapons"],
  toolProficiencies:[""],
  equipment:["Priests	Pack","Explorer’s	Pack"],
  abilities:[	"Divine Sense", "Lay on Hands"]
}

var Ranger = {
  savingThrows:["Strength", "Dexterity"],
  skillProficiencies:["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
  armorProficiencies:["Light Armor", "Medium Armor", "Shields"],
  weaponProficiencies:["Simple Weapons", "Martial Weapons"],
  toolProficiencies:[""],
  equipment:["Dungeoneer’s	Pack","Explorer’s	Pack"],
  abilities:["Favored Enemy", "Natural Explorer"]
}

var Rogue = {
  savingThrows:["Dexterity", "Intelligence"],
  skillProficiencies:["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
  armorProficiencies:["Light Armor"],
  weaponProficiencies:["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
  toolProficiencies:["Thieves tools"],
  equipment:["Burglars Pack", "Dungeoneers Pack", "Explorers Pack"],
  abilities:["Expertise", "Sneak Attack", "Thieves Cant"]
}

var Sorcerer = {
  savingThrows:["Constitution", "Charisma"],
  skillProficiencies:["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
  armorProficiencies:[""],
  weaponProficiencies:["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
  toolProficiencies:[""],
  equipment:["Dungeoneers Pack", "Explorers Pack"],
  abilities:[	"Spellcasting", "Sorcerous Origin"]
}

var Warlock = {
  savingThrows:["Wisdom", "Charisma"],
  skillProficiencies:["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
  armorProficiencies:["Light Armor"],
  weaponProficiencies:["Simple Weapons"],
  toolProficiencies:[""],
  equipment:["Scholars Pack", "Dungeoneers Pack"],
  abilities:[	"Otherworldly Patron", "Pact Magic"	]
}

var Wizard = {
  savingThrows:["Intelligence", "Wisdom"],
  skillProficiencies:["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
  armorProficiencies:[""],
  weaponProficiencies:["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
  toolProficiencies:[""],
  equipment:["Scholars Pack", "Explorers Pack"],
  abilities:["Spellcasting", "Arcane Recovery"]
}





var classTemplate = {

  savingThrows:[" "],
  skillProficiencies:[""],
  armorProficiencies:[""],
  weaponProficiencies:[""],
  toolProficiencies:[""],
  defaultEquipment:[""],
  startingWeapons:[""],
  defaultArmor:[""],
  equipment:[""],
  feats:[""]
}


exports.Wizard =  Wizard;
exports.Warlock = Warlock;
exports.Sorcerer = Sorcerer;
exports.Rogue = Rogue;
exports.Ranger = Ranger;
exports.Paladin = Paladin;
exports.Monk = Monk;
exports.Druid = Druid;
exports.Cleric = Cleric;
exports.Fighter = Fighter;
exports.classes = classes;
exports.Barbarian = Barbarian;
exports.Bard = Bard;
