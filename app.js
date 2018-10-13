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
const character =require('./Character.js');



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
  charName:randomChar.Name,
  charClass:randomChar.class,
  charClassLink:randomChar.classLink,
  charSex:randomChar.Sex,
  charRace:randomChar.Race,
  charRaceLink:randomChar.raceLink,
  subRace:randomChar.Subrace,
  age:randomChar.age,
  armorClass:randomChar.armor_class,
  alignment:randomChar.alignment,
  primaryLanguage:randomChar.primary_language,
  secondaryLanguage:randomChar.secondary_Language,
  hitPoints:randomChar.hit_points,
  initiative:randomChar.initiative,
  height:randomChar.height,
  speed:randomChar.speed,
  stats:randomChar.stats,
  strength:randomChar.stats.STR,
  strength_bonus:randomChar.strength_bonus,
  dexterity:randomChar.stats.DEX,
  dexterity_bonus:randomChar.dexterity_bonus,
  constitution:randomChar.stats.CON,
  constitution_bonus:randomChar.constitution_bonus,
  intelligence:randomChar.stats.INT,
  intelligence_bonus:randomChar.intelligence_bonus,
  wisdom:randomChar.stats.WIS,
  wisdom_bonus:randomChar.wisdom_bonus,
  charisma:randomChar.stats.CHA,
  charisma_bonus:randomChar.wisdom_bonus,
  athletics:randomChar.Skill_Athletics,
  acrobatics:randomChar.Skill_Acrobatics,
  sleightOfHand:randomChar.Skill_SleightOfHand,
  stealth:randomChar.Skill_Stealth,
  arcana:randomChar.Skill_Arcana,
  history:randomChar.Skill_History,
  nature:randomChar.Skill_Nature,
  religion:randomChar.Skill_Religion,
  animalHandling:randomChar.Skill_AnimalHandling,
  insight:randomChar.Skill_Insight,
  medicine:randomChar.Skill_Medicine,
  perception:randomChar.Skill_Perception,
  survival:randomChar.Skill_Survival,
  deception:randomChar.Skill_Deception,
  intimidation:randomChar.Skill_Intimidation,
  performance:randomChar.Skill_Performance,
  persuasion:randomChar.Skill_Persuasion,
  defaultEquipment:randomChar.equipment,
  // primary_weapon:randomChar.Object.values(primary_weapon),
  // primary_weapon_name:Object.values(randomChar.primary_weapon_info)[0].Name,
  // primary_weapon_cost:Object.values(randomChar.primary_weapon_info)[0].Cost,
  // primary_weapon_damage:Object.values(randomChar.primary_weapon_info)[0].Damage,
  // primary_weapon_weight:Object.values(randomChar.primary_weapon_info)[0].Weight,
  // primary_weapon_properties:Object.values(randomChar.primary_weapon_info)[0].Properties,
  // secondary_weapon:randomChar.secondary_weapon[0].Name,
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

app.get('/license', function(req,res){
      res.render('license');
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
    }).then(function(data, headers, status){
            res.redirect('/about')});

  });



});

app.listen(3000, function(){
console.log('Server Started on Port 3000');
})
