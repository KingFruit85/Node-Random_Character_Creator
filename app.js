//import 3rd party

const fs = require('fs');
const _ = require ('lodash');
const yargs = require('yargs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const NodeCouchDb = require('node-couchdb');

//import my files

const utils =require('./utils.js');
const dice =require('./dice.js');
const character =require('./Character.js');
const races =require('./races.js');
const backstory =require('./backstory.js')
const classes =require('./classes.js')

const couch = new NodeCouchDb({auth:{user:'admin',password:'admin'}});
const dbName = 'sheets';
const viewUrl = '/_design/all_sheets/_view/allSheets'

var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

//Body Parser Middleware
app.use( express.static( "public" ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var globalChar = {};

app.get('/', function(req, res){
let randomChar = character.newCharacter()
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
globalChar = randomChar;

});



app.get('/about', function(req,res){
  couch.get(dbName, viewUrl).then(({data, headers, status}) => {
      console.log(data.rows);
      res.render('about',{
        test:data.rows
            });
      // data is json response
      // headers is an object with all response headers
      // status is statusCode number
  }, err => {
    res.send(err);
      // either request error occured
      // ...or err.code=EDOCMISSING if document is missing
      // ...or err.code=EUNKNOWN if statusCode is unexpected
  });
});



app.post("/sheets/add", function(req,res){

  couch.uniqid().then(function(ids){
    const id = ids[0];

    couch.insert('sheets', {
      _id: id,
      name:globalChar["Name"],
      class:globalChar["class"],
      sex:globalChar["Sex"],
      race:globalChar["Race"],
      subRace:globalChar["Subrace"],
      age:globalChar["Age"],
      armorClass:globalChar["armor_class"],
      alignment:globalChar["Alignment"],
      primaryLanguage:globalChar["Primary Language"],
      secondaryLanguage:globalChar["Secondary Language"],
      hitPoints:globalChar.hit_points,
      initiative:globalChar["Initiative"],
      height:globalChar["Height"],
      speed:globalChar["Speed"],
      stats:globalChar["Stats"],
      strength:globalChar.Stats.STR,
      strength_Bonus:globalChar["Strength Bonus"],
      dexterity:globalChar.Stats["DEX"],
      dexterity_Bonus:globalChar["Dexterity Bonus"],
      constitution:globalChar.Stats["CON"],
      constitution_Bonus:globalChar["Constitution Bonus"],
      intelligence:globalChar.Stats["INT"],
      intelligence_Bonus:globalChar["Intelligence Bonus"],
      wisdom:globalChar.Stats["WIS"],
      wisdom_Bonus:globalChar["Wisdom Bonus"],
      charisma:globalChar.Stats["CHA"],
      charisma_Bonus:globalChar["Charisma Bonus"],
      athletics: globalChar["Skill_Athletics"],
      acrobatics:globalChar["Skill_Acrobatics"],
      sleightOfHand:globalChar["Skill_SleightOfHand"],
      stealth:globalChar["Skill_Stealth"],
      arcana:globalChar["Skill_Arcana"],
      history:globalChar["Skill_History"],
      nature:globalChar["Skill_Nature"],
      religion:globalChar["Skill_Religion"],
      animalHandling:globalChar["Skill_AnimalHandling"],
      insight:globalChar["Skill_Insight"],
      medicine:globalChar["Skill_Medicine"],
      perception:globalChar["Skill_Perception"],
      survival:globalChar["Skill_Survival"],
      deception:globalChar["Skill_Deception"],
      intimidation:globalChar["Skill_Intimidation"],
      performance:globalChar["Skill_Performance"],
      persuasion:globalChar["Skill_Persuasion"],
      defaultEquipment:globalChar["equipment"],
      primary_weapon:utils.weaponToString(globalChar.primary_weapon),
      secondary_weapon:utils.weaponToString(globalChar.secondary_weapon),
      equipment:globalChar.equipment,
      SavingThrows:globalChar.saving_throws,
      RacialTraits:globalChar["Racial Traits"],
      armor:Object.values(globalChar.armor)[0].Name,
      backstoryLife:globalChar["Backstory"]["life"],
      backstoryLikes:globalChar["Backstory"]["likes"],
      backstoryDislikes:globalChar["Backstory"]["dislikes"],
      backstoryFlaws:globalChar["Backstory"]["flaws"],
      ProficientSkills:globalChar.proficient_skills,
      ProficientArmors:globalChar.proficient_armor,
      ProficientWeapons:globalChar.proficient_weapons,
      feats:globalChar.feats,
      cantrips:globalChar.cantrips,
      firstLevelSpells:globalChar.firstLevelSpells

    })
  });


});

app.listen(3000, function(){
console.log('Server Started on Port 3000');
})
