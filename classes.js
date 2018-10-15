const weapons =require('./weapons.js');
const armor =require('./armor.js');
const equipment =require('./equipment');
const abilities = require('./abilities')
const _ = require ('lodash');





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
  abilities:
  {
    rage:{Name:"Rage", Description:abilities.rage},
    unarmored_defense:{name:"Unarmored Defense", description:abilities.unarmored_defense}
  }

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
  abilities:
  {
    spellcasting:{name:"Spellcasting", description:abilities.spellcasting},
    ritual_casting:{name:"Ritual Casting", description:abilities.ritual_casting},
    bardic_inspiration:{name:"Bardic Inspiration", description:abilities.bardic_inspiration}
  }

}

var Fighter = {
  savingThrows:["Strength",	"Constitution"],
  skillProficiencies:["Acrobatics",	"Animal","Handling",	"Athletics",	"History",	"Insight",	"Intimidation","Perception",	"Survival"],
  armorProficiencies:["All Armor", "Shields"],
  weaponProficiencies:["Simple Weapons",	"Martial Weapons"],
  toolProficiencies:["None"],
  abilities:
  {
    second_wind:{name:"Second Wind", description:abilities.second_wind},
  },
  extraAbilities:
  [
    {archery:{name:"Archery",description:abilities.archery}},
    {defense:{name:"Defense",description:abilities.defense}},
    {dueling:{name:"Dueling",description:abilities.dueling}},
    {great_weapon_fighting:{name:"Great Weapon Fighting",description:abilities.great_weapon_fighting}},
    {protection:{name:"Protection",description:abilities.protection}},
    {two_weapon_fighting:{name:"Two Weapon Fighting",description:abilities.two_weapon_fighting}}
  ]

}

var Cleric = {
  savingThrows:["Wisdom", "Charisma"],
  skillProficiencies:["History", "Insight", "Medicine", "Persuasion", "Religion"],
  armorProficiencies:["Light Armor", "Medium Armor","Heavy Armor", "Shields"],
  weaponProficiencies:["Simple Weapons"],
  toolProficiencies:["None"],
  abilities:
  {
    spellcasting:{name:"Spellcasting",description:abilities.spellcasting},
    disciple_of_life:{name:"Divine Domain:Disciple of Life",description:abilities.disciple_of_life}
  }
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

  abilities:
  {
    spellcasting:{name:"Spellcasting",description:abilities.spellcasting},
    druidic:{name:"Druidic", description:abilities.druidic}
  },

  equipment:["Explorers Pack", "Druidic focus", "Herbalism	Kit"]
}

var Monk = {
  savingThrows:["Strength", "Dexterity"],
  skillProficiencies:["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
  armorProficiencies:[""],
  weaponProficiencies:["Simple Weapons", "Shortswords"],
  toolProficiencies:[""],
  equipment:["Dungeoneer’s	Pack","Explorer’s	Pack"],
  abilities:
  {
    unarmored_defense:{name:"Unarmored Defense", description:abilities.unarmored_defense},
    martial_arts:{name:"Martial Arts", description:abilities.martial_arts}
  }
}

var Paladin = {
  savingThrows:["Wisdom", "Charisma"],
  skillProficiencies:["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
  armorProficiencies:["All Armor", "Shields"],
  weaponProficiencies:["Simple Weapons", "Martial Weapons"],
  toolProficiencies:[""],
  equipment:["Priests	Pack","Explorer’s	Pack"],
  abilities:
  {
    divine_sense:{name:"Divine Sense", description:abilities.divine_sense},
    lay_on_hands:{name:"Lay on Hands", description:abilities.lay_on_hands}
  }
}

var rangerFavoredEnemy = ["aberrations", "beasts", "celestials", "constructs", "dragons",
                          "elementals", "fey", "fiends", "giants", "monstrosities", "oozes",
                          "plants", "undead"]

var Ranger = {
  savingThrows:["Strength", "Dexterity"],
  skillProficiencies:["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
  armorProficiencies:["Light Armor", "Medium Armor", "Shields"],
  weaponProficiencies:["Simple Weapons", "Martial Weapons"],
  toolProficiencies:[""],
  equipment:["Dungeoneer’s	Pack","Explorer’s	Pack"],
  abilities:
  {
    favored_enemy:{name:`Favored Enemy: ${_.sample(rangerFavoredEnemy)}`, description:abilities.favored_enemy},
    natural_explorer:{name:"Natural Explorer", description:abilities.natural_explorer}
  }

}

var Rogue = {
  savingThrows:["Dexterity", "Intelligence"],
  skillProficiencies:["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
  armorProficiencies:["Light Armor"],
  weaponProficiencies:["Simple Weapons", "Hand Crossbows", "Longswords", "Rapiers", "Shortswords"],
  toolProficiencies:["Thieves tools"],
  equipment:["Burglars Pack", "Dungeoneers Pack", "Explorers Pack"],
  abilities:
  {
    expertise:{name:"Expertise", description:abilities.expertise},
    sneak_attack:{name:"Sneak Attack", description:abilities.sneak_attack},
    thieves_cant:{name:"Thieves Cant", description:abilities.thieves_cant}
  }
}

var Sorcerer = {
  savingThrows:["Constitution", "Charisma"],
  skillProficiencies:["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
  armorProficiencies:[""],
  weaponProficiencies:["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
  toolProficiencies:[""],
  equipment:["Dungeoneers Pack", "Explorers Pack"],
  abilities:
  {
    spellcasting:{name:"Spellcasting", description:abilities.spellcasting},
    sorcerous_origin:{name:"Sorcerous Origin", description:exports.sorcerous_origin}
  }
}

var Warlock = {
  savingThrows:["Wisdom", "Charisma"],
  skillProficiencies:["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
  armorProficiencies:["Light Armor"],
  weaponProficiencies:["Simple Weapons"],
  toolProficiencies:[""],
  equipment:["Scholars Pack", "Dungeoneers Pack"],
  abilities:
  {
    otherworldly_patron:{name:"Otherworldly Patron", description:abilities.otherworldly_patron},
    pact_magic:{name:"Pact Magic", description:abilities.pact_magic}
  }
}

var Wizard = {
  savingThrows:["Intelligence", "Wisdom"],
  skillProficiencies:["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
  armorProficiencies:[""],
  weaponProficiencies:["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
  toolProficiencies:[""],
  equipment:["Scholars Pack", "Explorers Pack"],
  abilities:
  {
    spellcasting:{name:"Spellcasting", description:abilities.spellcasting},
    arcane_recovery:{name:"Arcane Recovery", description:abilities.arcane_recovery}
  }
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
