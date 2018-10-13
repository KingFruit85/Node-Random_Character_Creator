//import my files
const utils =require('./utils.js');
const backstory =require('./backstory.js')


//creates a randomised Character object
var newCharacter = () => {   //Declares a new function named newCharacter
var Character = {
  proficiencies:{},
  character_attributes:{},
  combat_attributes:{},
  spells:{}
};          //Creates an empty Character object
//start adding properties, order is important here are some properties..
//..are derived from existing properties

///////////////////////////////////////
  utils.getRandomClass(Character);/////
  utils.getRandomRace(Character);//////  These functions must be
  utils.calcMovementSpeed(Character);
  utils.assignStats(Character);////////  called in this order
  utils.addSubRaceBonus(Character);////

///////////////////////////////////////

  utils.getRandomSex(Character);
  utils.getRandomName(Character);
  utils.ageCalc(Character);
  utils.getRandomAlignment(Character);
  utils.getRandomName(Character);
  utils.calcBaseHP(Character);
  utils.calcInitiative(Character);
  utils.getProBonus(Character);
  utils.getRandomProSkills(Character);
  utils.getArmorSkills(Character);
  utils.getWeaponSkills(Character);
  utils.calcPassPerception(Character);
  utils.calcStats(Character);
  utils.getLanguages(Character);
  utils.getRandomHeight(Character);
  utils.getDefaultEquipment(Character);

  utils.getSavingThrows(Character);
  utils.assignSpells(Character);
  utils.calcArmorClass(Character);
  utils.getFeatures(Character);
  utils.addFeatureBonues(Character);
  Character.Level = 1;
  Character.Backstory = backstory.backstory();

  return Character;
}

x = newCharacter()

console.log(JSON.stringify(x, undefined, 2))


exports.newCharacter = newCharacter
