//import 3rd party
const fs = require('fs');
const _ = require ('lodash');
const yargs = require('yargs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//import my files
const utils =require('./utils.js');
const dice =require('./dice.js');
const character =require('./Character.js');
const races =require('./races.js');
const backstory =require('./backstory.js')
const classes =require('./classes.js')

 var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Body Parser Middleware
app.use( express.static( "public" ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  var randomChar = character.newCharacter()
  res.render('index',{
    charName:randomChar["Name"],
    charClass:randomChar["class"],
    charSex:randomChar["Sex"],
    charRace:randomChar["Race"],
    subRace:randomChar["Subrace"],
    Age:randomChar["Age"],
    armorClass:randomChar["armor_class"],
    Alignment:randomChar["Alignment"],
    PrimaryLanguage:randomChar["Primary Language"],
    SecondaryLanguage:randomChar["Secondary Language"],
    HitPoints:randomChar.hit_points,
    Initiative:randomChar["Initiative"],
    Height:randomChar["Height"],
    Speed:randomChar["Speed"],
    Stats:randomChar["Stats"],
    Strength:randomChar.Stats["STR"],
    Strength_Bonus:randomChar["Strength Bonus"],
    Dexterity:randomChar.Stats["DEX"],
    Dexterity_Bonus:randomChar["Dexterity Bonus"],
    Constitution:randomChar.Stats["CON"],
    Constitution_Bonus:randomChar["Constitution Bonus"],
    Intelligence:randomChar.Stats["INT"],
    Intelligence_Bonus:randomChar["Intelligence Bonus"],
    Wisdom:randomChar.Stats["WIS"],
    Wisdom_Bonus:randomChar["Wisdom Bonus"],
    Charisma:randomChar.Stats["CHA"],
    Charisma_Bonus:randomChar["Charisma Bonus"],
    Athletics: randomChar["Skill_Athletics"],
    Acrobatics:randomChar["Skill_Acrobatics"],
    SleightOfHand:randomChar["Skill_SleightOfHand"],
    Stealth:randomChar["Skill_Stealth"],
    Arcana:randomChar["Skill_Arcana"],
    History:randomChar["Skill_History"],
    Nature:randomChar["Skill_Nature"],
    Religion:randomChar["Skill_Religion"],
    AnimalHandling:randomChar["Skill_AnimalHandling"],
    Insight:randomChar["Skill_Insight"],
    Medicine:randomChar["Skill_Medicine"],
    Perception:randomChar["Skill_Perception"],
    Survival:randomChar["Skill_Survival"],
    Deception:randomChar["Skill_Deception"],
    Intimidation:randomChar["Skill_Intimidation"],
    Performance:randomChar["Skill_Performance"],
    Persuasion:randomChar["Skill_Persuasion"],
    defaultEquipment:randomChar["equipment"],
    primary_weapon:utils.weaponToString(randomChar.primary_weapon),
    secondary_weapon:utils.weaponToString(randomChar.secondary_weapon),
    equipment:randomChar.equipment,
    SavingThrows:randomChar.saving_throws,
    RacialTraits:randomChar["Racial Traits"],
    Armor:Object.values(randomChar.armor)[0].Name,
    backstoryLife:randomChar["Backstory"]["life"],
    backstoryLikes:randomChar["Backstory"]["likes"],
    backstoryDislikes:randomChar["Backstory"]["dislikes"],
    backstoryFlaws:randomChar["Backstory"]["flaws"],
    ProficientSkills:randomChar.proficient_skills,
    ProficientArmors:randomChar.proficient_armor,
    ProficientWeapons:randomChar.proficient_weapons,
    feats:randomChar.feats,
    cantrips:randomChar.cantrips,
    firstLevelSpells:randomChar.firstLevelSpells
  });
});



app.listen(3000, function(){
  console.log('Server Started on Port 3000');
})
