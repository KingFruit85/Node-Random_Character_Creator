//import 3rd party
const _ = require ('lodash');
//import my files
const races =require('./races.js');
const dice =require('./dice.js');
const classes =require('./classes.js');
const character =require('./Character.js');
const weapons =require('./weapons.js');
const spells =require('./spells.js');
const armor =require('./armor.js');
const tools =require('./tools.js');

//unused functions, to be completed.
var listChar = () => {}
var removeChar = () => {}
//getter functions not used at the moment, removed from exports

var getCharacterName = (Characteracter) => {return Character["Name"];}
var getCharacterClass = (Character) => {return Character.class;}
var getCharacterSex = (Character) => {return Character["Sex"];}
var getCharacterRace = (Character) => {return Character["Race"];}
var getCharacterAge = (Character) => {return Character["Age"];}
var getCharacterAlignment = (Character) => {return Character["alignment"];}
var getCharacterLanguages = (Character) => {return Character["Languages"];}
var getCharacterHP = (Character) => {return Character.hit_points;}
var getCharacterInitiative = (Character) => {return Character["Initiative"];}
var getCharacterHeight = (Character) => {return Character["Height"];}
var getCharacterSpeed = (Character) => {return Character["Speed"];}
var getCharacterStats = (Character) => {return Character["Stats"];}
var getCharacterAthletics = (Character) => {return Character["Skill_Athletics"];}
var getCharacterAcrobatics = (Character) => {return Character["Skill_Acrobatics"];}
var getCharacterSleightOfHand = (Character) => {return Character["Skill_SleightOfHand"];}
var getCharacterStealth = (Character) => {return Character["Skill_Stealth"];}
var getCharacterArcana = (Character) => {return Character["Skill_Arcana"];}
var getCharacterHistory = (Character) => {return Character["Skill_History"];}
var getCharacterNature = (Character) => {return Character["Skill_Nature"];}
var getCharacterReligion = (Character) => {return Character["Skill_Religion"];}
var getCharacterAnimalHandling = (Character) => {return Character["Skill_AnimalHandling"];}
var getCharacterInsight = (Character) => {return Character["Skill_Insight"];}
var getCharacterMedicine = (Character) => {return Character["Skill_Medicine"];}
var getCharacterPerception = (Character) => {return Character["Skill_Perception"];}
var getCharacterSurvival = (Character) => {return Character["Skill_Survival"];}
var getCharacterDeception = (Character) => {return Character["Skill_Deception"];}
var getCharacterIntimidation = (Character) => {return Character["Skill_Intimidation"];}
var getCharacterPerformance = (Character) => {return Character["Skill_Performance"];}
var getCharacterPersuasion = (Character) => {return Character["Skill_Persuasion"];}


var weaponToString = (weapons) =>{
  var string1 = "";
  for (var property1 in weapons) {
    string1 = string1 + weapons[property1].Name;
    string1 = string1 + " "
  }
  return string1;

}





var getRandomNumber = (min, max) => {

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

var getSavingThrows = (Character) => {
  Character.saving_throws = [];
  switch (true) {
    case Character.class === "Barbarian":Character.saving_throws = classes.Barbarian.savingThrows;break;
    case Character.class === "Bard":Character.saving_throws = classes.Bard.savingThrows;break;
    case Character.class === "Fighter":Character.saving_throws = classes.Fighter.savingThrows;break;
    case Character.class === "Cleric":Character.saving_throws = classes.Cleric.savingThrows;break;
    case Character.class === "Druid":Character.saving_throws = classes.Druid.savingThrows;break;
    case Character.class === "Monk":Character.saving_throws = classes.Monk.savingThrows;break;
    case Character.class === "Paladin":Character.saving_throws = classes.Paladin.savingThrows;break;
    case Character.class === "Ranger":Character.saving_throws = classes.Ranger.savingThrows;break;
    case Character.class === "Rogue":Character.saving_throws = classes.Rogue.savingThrows;break;
    case Character.class === "Sorcerer":Character.saving_throws = classes.Sorcerer.savingThrows;break;
    case Character.class === "Warlock":Character.saving_throws = classes.Warlock.savingThrows;break;
    case Character.class === "Wizard":Character.saving_throws = classes.Wizard.savingThrows;break;
      default:"Error: Fell Though Switch Statement"
  }
  return Character;
}

//calculate movement speed based on race
var calcMovementSpeed = (Character) => {
  switch (true) {
    case Character.Race === "Human":    Character.Speed = races.Human.Speed;break;
    case Character.Race === "Dwarf":    Character.Speed = races.Dwarf.Speed;break;
    case Character.Race === "Elf":      Character.Speed = races.Elf.Speed;break;
    case Character.Race === "Gnome":    Character.Speed = races.Gnome.Speed;break;
    case Character.Race === "Halfling": Character.Speed = races.Halfling.Speed;break;
    case Character.Race === "Dragonborn":Character.Speed = races.Dragonborn.Speed;break;
    case Character.Race === "HalfElf":  Character.Speed = races.HalfElf.Speed;break;
    case Character.Race === "HalfOrc":  Character.Speed = races.HalfOrc.Speed;break;
    case Character.Race === "Tiefling": Character.Speed = races.Tiefling.Speed;break;
    default:Character.Speed = "Fell Though Switch Statement, Gutted!"
  }return Character;
}

//Since all characters start at level 1, for the time being this can be set to 2
//Will need to be updated when character levels become randomised/chosen
var getProBonus = (Character) => {
  Character["Proficiency Bonus"] = 2;
  return Character;
}

//Get character known Languages

var getLanguages = (Character) => {
  switch (true) {
    case Character.Race === "Dwarf": Character["Primary Language"] = races.Dwarf.Languages; Character["Secondary Language"] = races.Dwarf.ExtraLanguage; break;
    case Character.Race === "Human": Character["Primary Language"] = races.Human.Languages; Character["Secondary Language"] = _.sample(races.Human.ExtraLanguage); break;
    case Character.Race === "Elf": Character["Primary Language"] = races.Elf.Languages; Character["Secondary Language"] = races.Elf.ExtraLanguage; break;
    case Character.Race === "Gnome": Character["Primary Language"] = _.sample(races.Gnome.Languages); Character["Secondary Language"] = races.Gnome.ExtraLanguage; break;
    case Character.Race === "Halfling": Character["Primary Language"] = races.Halfling.Languages; Character["Secondary Language"] = races.Halfling.ExtraLanguage; break;
    case Character.Race === "Dragonborn": Character["Primary Language"] = races.Dragonborn.Languages; Character["Secondary Language"] = races.Dragonborn.ExtraLanguage; break;
    case Character.Race === "HalfElf": Character["Primary Language"] = races.HalfElf.Languages; Character["Secondary Language"] = _.sample(races.HalfElf.ExtraLanguage); break;
    case Character.Race === "HalfOrc": Character["Primary Language"] = races.HalfOrc.Languages; Character["Secondary Language"] = races.HalfOrc.ExtraLanguage; break;
    case Character.Race === "Tiefling": Character["Primary Language"] = races.Tiefling.Languages; Character["Secondary Language"] = races.Tiefling.ExtraLanguage; break;
    default:Character["Primary Language"]   = "Fell Though Switch Statement, Gutted!";
            Character["Secondary Language"] = "Fell Though Switch Statement, Gutted!";
  }return Character;
}

var calcBonus = (stat) => {
  stat = (stat - 10) / 2;
  return Math.floor(stat);
};

//get default equipment
var getDefaultEquipment = (Character) => {
  Character.primary_weapon = [];
  Character.secondary_weapon = [];
  Character.armor = [];
  Character.armor_class = [];
  Character.equipment = [];

  if(Character.class === "Bard"){

    r = getRandomNumber( 1 , 3 );

    switch (true) {
      case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Rapier);break;
      case (r === 2):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Longsword) ;break;
      case (r === 3):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:       Character.primary_weapon.push("Error: Fell Though Switch Case")};

      Character.equipment.push(_.sample(classes.Bard.equipment))
      Character.equipment.push(_.sample(tools.Tools.MusicalInstruments).Name);
      Character.secondary_weapon.push(weapons.SimpleWeapons.Dagger) ;
      Character.armor.push(armor.LightArmor.Leather);
  }
  else if (Character.class === "Barbarian"){

    r = getRandomNumber( 1 ,2 );
    switch (true) {
      case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Greataxe);break;
      case (r === 2):Character.primary_weapon.push(_.sample(weapons.MartialMeleeWeapons)) ;break;
      default:Character.primary_weapon.push("Error: Fell Though Switch Case")};

    switch (true) {
      case (r === 1):Character.secondary_weapon.push(weapons.SimpleWeapons.Handaxe);break;
      case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;

      default:Character.primary_weapon.push("Error: Fell Though Switch Case")};
    Character.armor.push(armor.LightArmor.No_Armor);
    Character.equipment.push(["Explorers Pack", "4 x Javelins"]);


// -------------------------------------------------------------------------------------------------------------
  }
  else if (Character.class === "Fighter"){

    r = getRandomNumber( 1 , 2 );
    var firstWeapon = _.sample(weapons.MartialMeleeWeapons);
    var secondWeapon = _.sample(weapons.MartialMeleeWeapons);
    var shield = armor.Shields.Shield;

    switch (true) {
      case (r === 1):Character.primary_weapon = {...{firstWeapon},...{shield}};break;
      case (r === 2):Character.primary_weapon = {...{firstWeapon},...{secondWeapon}};break;
        default: "Fell Through2"}

    r = getRandomNumber( 1 , 2 )
      switch (true) {
       case (r === 1):Character.armor.push(armor.LightArmor.Leather);Character.equipment.push(classes.Fighter.defaultEquipment);break;
       case (r === 2):Character.armor.push(armor.HeavyArmor.ChainMail);break;
        default:Character.secondary_weapon.push("Error: Fell Though Switch Case")}

      r=getRandomNumber( 1 , 2 )
      switch (true) {
        case (r === 1):Character.secondary_weapon.push(weapons.SimpleRangedWeapons.LightCrossbow);break;
        case (r === 2):Character.secondary_weapon.push(weapons.SimpleWeapons.Handaxe);break;
        default:Character.secondary_weapon.push("Error: Fell Though Switch Case")}

        Character.equipment.push(_.sample(["Dungeoneers Pack", "Explorers Pack"]));


 }
// -------------------------------------------------------------------------------------------------------------


 else if (Character.class === "Cleric"){

   Character.primary_weapon.push(weapons.SimpleWeapons.Mace);
   Character.primary_weapon.push(armor.Shields.Shield);

   r = getRandomNumber( 1 , 3 )
   switch (true) {
     case (r === 1):Character.armor.push(armor.MediumArmor.ScaleMail);break;
     case (r === 2):Character.armor.push(armor.LightArmor.Leather);break;
     case (r === 3):Character.armor.push(armor.HeavyArmor.ChainMail);break;
     default:Character.armor.push("Error: Fell Though Switch Case")}

   r = getRandomNumber( 1 , 2 )
   switch (true) {
     case (r === 1):Character.secondary_weapon.push(weapons.SimpleRangedWeapons.LightCrossbow);break;
     case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;
     default:Character.secondary_weapon.push("Error: Fell Though Switch Case")}

     Character.equipment.push(_.sample([["Priests Pack"],["Explorers Pack"]]));
     Character.equipment.push("Holy Symbol");
     Character.armor_class ++;
     Character.armor_class ++;
}

else if (Character.class === "Druid"){

  r = getRandomNumber( 1 , 2 )
  switch (true) {
    case (r === 1):Character.primary_weapon.push(armor.Shields.Shield);break;
    case (r === 2):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default: Character.primary_weapon.push("Error: fell though switch case")}

  r = getRandomNumber( 1 , 2 )
  switch(true) {
    case (r === 1):Character.secondary_weapon.push(weapons.MartialMeleeWeapons.Scimitar);break;
    case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:Character.secondary_weapon.push("Error: fell though switch case")}

    Character.armor.push(armor.LightArmor.Leather);
    Character.equipment.push(classes.Druid.equipment);
}

else if (Character.class === "Monk"){
  r = getRandomNumber( 1 , 2 )
  switch (true) {

    case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Shortsword);break;
    case (r === 2):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:Character.primary_weapon.push("Error: fell though switch case")}
  r = getRandomNumber( 1 , 2 )
    switch (true) {
      case (r === 1):Character.equipment.push(_.sample(tools.Tools.ArtisansTools).Name);break;
      case (r === 2):Character.equipment.push(_.sample(tools.Tools.MusicalInstruments).Name);break;
      default:Character.equipment.push("Error:Fell though switch case")

    }

      Character.equipment.push(_.sample([["Dungeoneers Pack"],["Explorers Pack"]]));
      Character.equipment.push("10 x Darts");
      Character.armor.push(armor.LightArmor.No_Armor);

}

else if (Character.class === "Paladin"){

  var firstWeapon  = _.sample(weapons.MartialMeleeWeapons);
  var secondWeapon = _.sample(weapons.MartialMeleeWeapons);
  var shield = armor.Shields.Shield;

  r = getRandomNumber( 1 , 2 )
  switch (true) {

    case (r === 1):Character.primary_weapon = {...{firstWeapon},...{secondWeapon}} ;break;
    case (r === 2):Character.primary_weapon = {...{firstWeapon},...{shield}} ;break;
      default:Character.primary_weapon.push("Error: fell though switch case")}

  r = getRandomNumber( 1 , 2 )
  switch(true) {
    case (r === 1):Character.secondary_weapon = Array(5).fill(weapons.SimpleWeapons.Javelin);break;
    case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:Character.secondary_weapon.push("Error: fell though switch case")}

      Character.armor.push(armor.HeavyArmor.ChainMail);
      Character.equipment.push(_.sample(classes.Paladin.equipment)) ;
      Character.equipment.push("Holy Symbol");

}

else if (Character.class === "Ranger"){

  r = getRandomNumber( 1 , 2 )
  switch (true) {

    case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Shortsword,weapons.MartialMeleeWeapons.Shortsword);break;
    case (r === 2):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons),_.sample(weapons.SimpleWeapons));break;
      default:Character.primary_weapon.push("Error: fell though switch case")}

      Character.secondary_weapon.push(weapons.MartialRangedWeapons.Longbow);

  r = getRandomNumber( 1 , 2 )
    switch (true) {
      case r === 1:Character.armor.push(armor.LightArmor.Leather);break;
      case r === 2:Character.armor.push(armor.MediumArmor.ScaleMail);break;
      default:Character.armor.push("Error: fell though switch case")}

      Character.equipment.push(_.sample([["Dungeoneers Pack"],["Explorers Pack"]]));
    }


  else if (Character.class === "Rogue"){

    r = getRandomNumber( 1 , 2 )
    switch (true) {
      case r === 1:Character.primary_weapon.push(weapons.MartialMeleeWeapons.Rapier);break;
      case r === 2:Character.primary_weapon.push(weapons.MartialMeleeWeapons.Shortsword);break;
        default:Character.primary_weapon.push("Error: fell though switch case")}

    r = getRandomNumber( 1 , 2 )
    switch(true) {
      case r === 1:Character.secondary_weapon.push(weapons.SimpleRangedWeapons.Shortbow);break;
      case r === 2:Character.secondary_weapon.push(weapons.MartialMeleeWeapons.Shortsword);break;
        default:Character.secondary_weapon.push("Error: fell though switch case")}

      Character.armor.push(armor.LightArmor.Leather);
      Character.equipment.push(_.sample([["Burglars Pack"],
                                         ["Dungeoneers Pack"],
                                         ["Explorers Pack"]]),
                                         ["Thieves Tools"]);
      Character.secondary_weapon.push(weapons.SimpleWeapons.Dagger,weapons.SimpleWeapons.Dagger);

  }

  else if (Character.class === "Sorcerer"){

    r = getRandomNumber( 1 , 2 )
    switch (true) {
      case r === 1:Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      case r === 2:Character.primary_weapon.push(weapons.SimpleRangedWeapons.LightCrossbow);break;
        default:Character.primary_weapon.push("Error: fell though switch case")}

    Character.secondary_weapon.push(weapons.SimpleWeapons.Dagger, weapons.SimpleWeapons.Dagger);
    Character.equipment.push(_.sample(["Dungeoneers Pack"],["Explorers Pack"]));
    Character.equipment.push(_.sample(["Component Pouch"],["Arcane Focus"]));
    Character.armor.push(armor.LightArmor.No_Armor);
}

else if (Character.class === "Warlock"){

  r = getRandomNumber( 1 , 2 )
  switch (true) {
    case r === 1:Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
    case r === 2:Character.primary_weapon.push(weapons.SimpleRangedWeapons.LightCrossbow);break;
      default:Character.primary_weapon.push("Error: fell though switch case")}

      Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));
      Character.secondary_weapon.push(weapons.SimpleWeapons.Dagger,weapons.SimpleWeapons.Dagger);
      Character.armor.push(armor.LightArmor.Leather);
      Character.equipment.push(_.sample(["Scholars Pack"],["Dungeoneers Pack"]));
      Character.equipment.push(_.sample(["Component Pouch"],["Arcane Focus"]));
}

else if (Character.class === "Wizard"){

  r = getRandomNumber( 1 , 2 )
  switch (true) {
    case r === 1:Character.primary_weapon.push(weapons.SimpleWeapons.Quarterstaff);break;
    case r === 2:Character.primary_weapon.push(weapons.SimpleWeapons.Dagger);break;
      default:Character.primary_weapon.push("Error: fell though switch case")}

      Character.equipment.push(_.sample(["Scholars Pack"],["Explorers Pack"]));
      Character.equipment.push(_.sample(["Component Pouch"],["Arcane Focus"]));
      Character.equipment.push("Spellbook")
      Character.armor.push(armor.LightArmor.No_Armor);

}
return Character;
}

 var calcArmorClass = (Character) => {
   switch (true) {
     case (Object.values(Character.armor)[0].Name === "Padded Armor"):          Character.armor_class += 11 + calcBonus(Character.Stats.DEX);break;
     case (Object.values(Character.armor)[0].Name === "Leather Armor"):         Character.armor_class += 11 + calcBonus(Character.Stats.DEX);break;
     case (Object.values(Character.armor)[0].Name === "Studded Leather Armor"): Character.armor_class += 12 + calcBonus(Character.Stats.DEX);break;
     case (Object.values(Character.armor)[0].Name === "Chain Mail"):            Character.armor_class += 16;break;
     case (Object.values(Character.armor)[0].Name === "Hide Armor"):            Character.armor_class += 12 + _.inRange(calcBonus(Character.Stats.DEX),2);break;
     case (Object.values(Character.armor)[0].Name === "Scale Mail"):            Character.armor_class += 14 + calcBonus(Character.Stats.DEX);break;
     case (Object.values(Character.armor)[0].Name === "No Armor"):              Character.armor_class += 10 + calcBonus(Character.Stats.DEX) + calcBonus(Character.Stats.CON);break;
      default: Character.armor_class.push("Fell Through")
   }return Character;
 }

//calc starting hit points, using first level hitpoints plus con modifier
var calcBaseHP = (Character) => {
  switch (true) {
    case Character.class === "Barbarian": Character.hit_points = 12  + calcBonus(Character.Stats.CON); break;
    case Character.class === "Bard":      Character.hit_points = 8   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Fighter":   Character.hit_points = 10  + calcBonus(Character.Stats.CON); break;
    case Character.class === "Cleric":    Character.hit_points = 8   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Druid" :    Character.hit_points = 8   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Monk"  :    Character.hit_points = 8   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Paladin":   Character.hit_points = 10  + calcBonus(Character.Stats.CON); break;
    case Character.class === "Ranger":    Character.hit_points = 10  + calcBonus(Character.Stats.CON); break;
    case Character.class === "Rogue":     Character.hit_points = 8   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Sorcerer":  Character.hit_points = 6   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Warlock":   Character.hit_points = 8   + calcBonus(Character.Stats.CON); break;
    case Character.class === "Wizard":    Character.hit_points = 6   + calcBonus(Character.Stats.CON); break;
      default: "Fell Though Switch Statement, Gutted!";
  }return Character;
}

var ageCalc = (Character) => {
  switch (true) {
    case Character.Race === "Human":      Character.Age = getRandomNumber( 18, 100 );  break;
    case Character.Race === "Dwarf":      Character.Age = getRandomNumber( 50, 350 );  break;
    case Character.Race === "Elf":        Character.Age = getRandomNumber( 100, 750 ); break;
    case Character.Race === "Gnome":      Character.Age = getRandomNumber( 40, 500 );  break;
    case Character.Race === "Halfling":   Character.Age = getRandomNumber( 20, 250 );  break;
    case Character.Race === "Dragonborn": Character.Age = getRandomNumber( 15, 80 );   break;
    case Character.Race === "HalfElf":    Character.Age = getRandomNumber( 20, 180 );  break;
    case Character.Race === "HalfOrc":    Character.Age = getRandomNumber( 14, 75 );   break;
    case Character.Race === "Tiefling":   Character.Age = getRandomNumber( 18, 120 );  break;
      default: Character.Race = "Fell Though Switch Statement, Gutted!";
  }return Character;
}

var assignSpells = (Character) => {
  Character.cantrips = [];
  Character.firstLevelSpells = [];
  Character.spellSlots = [];

  switch (true) {
    case (Character.class === "Bard"):Character.cantrips.push(_.sampleSize(spells.bardCantrips,2));
                                      Character.firstLevelSpells.push(_.sampleSize(spells.bardLevel1,4))
                                      Character.spellSlots.push(2);break;

    case (Character.class === "Cleric"):Character.cantrips.push(_.sampleSize(spells.clericCantrips,3));
                                      Character.firstLevelSpells.push(_.sampleSize(spells.clericLevel1,calcBonus(Character.Stats.WIS)+1))
                                      Character.spellSlots.push(calcBonus(Character.Stats.WIS)+1);break;


    case (Character.class === "Druid"):;break;


    case (Character.class === "Sorcerer"):;break;


    case (Character.class === "Warlock"):;break;


    case (Character.class === "Wizard"):;break;


      default:Character.cantrips = "Fell Though"

  }
  return Character;

}


//generate random name based off sex/race
var getRandomName = (Character) => {
  switch (true){
    case (Character.Race === "Human" && Character.Sex === "Male"):          Character.Name = _.sample(races.humanMaleNames)         + " " + _.sample(races.humanLastNames);      break;
    case (Character.Race === "Human" && Character.Sex === "Female"):        Character.Name = _.sample(races.humanFemaleNames)       + " " + _.sample(races.humanLastNames);      break;
    case (Character.Race === "Dwarf" && Character.Sex === "Male"):          Character.Name = _.sample(races.dwarfMaleNames)         + " " + _.sample(races.dwarfLastNames);      break;
    case (Character.Race === "Dwarf" && Character.Sex === "Female"):        Character.Name = _.sample(races.dwarfFemaleNames)       + " " + _.sample(races.dwarfLastNames);      break;
    case (Character.Race === "Elf" && Character.Sex === "Male"):            Character.Name = _.sample(races.elfMaleNames)           + " " + _.sample(races.elfLastNames);        break;
    case (Character.Race === "Elf" && Character.Sex === "Female"):          Character.Name = _.sample(races.elfFemaleNames)         + " " + _.sample(races.elfLastNames);        break;
    case (Character.Race === "Gnome" && Character.Sex === "Male"):          Character.Name = _.sample(races.gnomeMaleNames)         + " " + _.sample(races.gnomeLastNames);      break;
    case (Character.Race === "Gnome" && Character.Sex === "Female"):        Character.Name = _.sample(races.gnomeFemaleNames)       + " " + _.sample(races.gnomeLastNames);      break;
    case (Character.Race === "Halfling" && Character.Sex === "Male"):       Character.Name = _.sample(races.halflingMaleNames)      + " " + _.sample(races.halflingLastNames);   break;
    case (Character.Race === "Halfling" && Character.Sex === "Female"):     Character.Name = _.sample(races.halflingFemaleNames)    + " " + _.sample(races.halflingLastNames);   break;
    case (Character.Race === "Dragonborn" && Character.Sex === "Male"):     Character.Name = _.sample(races.dragonbornMaleNames)    + " " + _.sample(races.dragonbornLastNames); break;
    case (Character.Race === "Dragonborn" && Character.Sex === "Female"):   Character.Name = _.sample(races.dragonbornFemaleNames)  + " " + _.sample(races.dragonbornLastNames); break;
    case (Character.Race === "HalfElf" && Character.Sex === "Male"):        Character.Name = _.sample(races.humanMaleNames)         + " " + _.sample(races.elfLastNames);        break;
    case (Character.Race === "HalfElf" && Character.Sex === "Female"):      Character.Name = _.sample(races.humanFemaleNames)       + " " + _.sample(races.elfLastNames);        break;
    case (Character.Race === "HalfOrc" && Character.Sex === "Male"):        Character.Name = _.sample(races.halforcMaleNames)       + " " + _.sample(races.halforcLastName);     break;
    case (Character.Race === "HalfOrc" && Character.Sex === "Female"):      Character.Name = _.sample(races.halforcFemaleNames)     + " " + _.sample(races.halforcLastName);     break;
    case (Character.Race === "Tiefling" && Character.Sex === "Male"):       Character.Name = _.sample(races.tieflingMaleNames)      + " " + _.sample(races.tieflingLastNames);   break;
    case (Character.Race === "Tiefling" && Character.Sex === "Female"):     Character.Name = _.sample(races.tieflingFemaleNames)    + " " + _.sample(races.tieflingLastNames);   break;
    default: Character.Name = "Fell Though Switch Statement, Gutted!";
    }return Character;
   }



var getRandomHeight = (Character) => {
    switch (true){
      case (Character.Race === "Human"):Character.Height = _.sample(races.humanElfHeight);break;
      case (Character.Race === "Dwarf"):Character.Height = _.sample(races.dwarfHeight);break;
      case (Character.Race === "Elf"):Character.Height = _.sample(races.humanElfHeight);break;
      case (Character.Race === "Gnome"):Character.Height = _.sample(races.gnomeHeight);break;
      case (Character.Race === "Halfling"):Character.Height = _.sample(races.halflingHeight);break;
      case (Character.Race === "Dragonborn"):Character.Height = _.sample(races.dragonbornHeight);break;
      case (Character.Race === "HalfElf"):Character.Height = _.sample(races.humanElfHeight);break;
      case (Character.Race === "HalfOrc"):Character.Height = _.sample(races.halforcHeight);break;
      case (Character.Race === "Tiefling"):Character.Height = _.sample(races.humanElfHeight);break;
      default:Character.Height = "Fell Though Switch Statement, Gutted!";
    }return Character;
  }


//get random race
var getRandomRace = (Character) => {
  Character["Race"] = _.sample(races.race);
  return Character;
}

//get random class
var getRandomClass = (Character) => {
  Character.class = _.sample(classes.classes);
  return Character;
}

//get random alignment
var getRandomAlignment = (Character) => {
  Character["Alignment"] = _.sample(races.alignment);
  return Character;
}

var getFeatures = (Character) => {
  Character.feats = [];
  switch (true) {
    case Character.class === "Barbarian":Character.feats = classes.Barbarian.feats;break;
    case Character.class === "Bard":Character.feats = classes.Bard.feats;break;
    case Character.class === "Fighter":Character.feats.push(classes.Fighter.feats),
                                       Character.feats.push(_.sample(classes.Fighter.extraFeats));break;
    case Character.class === "Cleric":Character.feats = classes.Cleric.feats;break;
    case Character.class === "Druid":Character.feats = classes.Druid.feats;break;
    case Character.class === "Paladin":Character.feats = classes.Paladin.feats;break;
    case Character.class === "Ranger":Character.feats = classes.Ranger.feats;break;
    case Character.class === "Rogue":Character.feats = classes.Rogue.feats;break;
    case Character.class === "Sorcerer":Character.feats = classes.Sorcerer.feats;break;
    case Character.class === "Warlock":Character.feats = classes.Warlock.feats;break;
    case Character.class === "Wizard":Character.feats = classes.Wizard.feats;break;

      default:Character.feats = "Error:Fell Though Switch Statement";

  }return Character;
}

var addFeatureBonues = (Character) => {
  switch (true) {
    case Character.feats.includes("Defense"):Character.armor_class ++;break;
    default:"Nothing"
  }return Character;
}


//get random sex
var getRandomSex = (Character) => {
  Character.Sex = _.sample(races.sex);
  return Character;
}

//get class based Proficiencies
var getRandomProSkills = (Character) => {
  Character.proficient_skills =[];
  switch (true) {
    case (Character.class === "Barbarian"):Character.proficient_skills =
                                           _.sampleSize(classes.Barbarian.skillProficiencies, 2);break;
    case (Character.class === "Bard"):     Character.proficient_skills =
                                           _.sampleSize(classes.Bard.skillProficiencies, 3);break;
    case (Character.class === "Fighter")  :Character.proficient_skills =
                                           _.sampleSize(classes.Fighter.skillProficiencies, 2);break;
    case (Character.class) === "Cleric":   Character.proficient_skills =
                                           _.sampleSize(classes.Cleric.skillProficiencies,2);break;
    case (Character.class === "Druid")     :Character.proficient_skills =
                                           _.sampleSize(classes.Druid.skillProficiencies, 2);break;
    case (Character.class === "Monk")      :Character.proficient_skills =
                                           _.sampleSize(classes.Monk.skillProficiencies, 2);break;
    case (Character.class === "Paladin")      :Character.proficient_skills =
                                           _.sampleSize(classes.Paladin.skillProficiencies, 2);break;
    case (Character.class === "Ranger")  :Character.proficient_skills =
                                          _.sampleSize(classes.Ranger.skillProficiencies, 3);break;
    case (Character.class) === "Rogue":   Character.proficient_skills =
                                          _.sampleSize(classes.Rogue.skillProficiencies,4);break;
    case (Character.class === "Sorcerer")     :Character.proficient_skills =
                                          _.sampleSize(classes.Sorcerer.skillProficiencies, 2);break;
    case (Character.class === "Warlock")      :Character.proficient_skills =
                                          _.sampleSize(classes.Warlock.skillProficiencies, 2);break;
    case (Character.class === "Wizard")      :Character.proficient_skills =
                                          _.sampleSize(classes.Wizard.skillProficiencies, 2);break;

    default:Character.proficient_skills = "Error: Fell Though switch case"
}
return Character;
}

//get armor Proficiencies
var getArmorSkills = (Character) => {
Character.proficient_armor = [];
switch (true) {
  case (Character.class === "Barbarian"):Character.proficient_armor = classes.Barbarian.armorProficiencies;break;
  case (Character.class === "Bard"):Character.proficient_armor = classes.Bard.armorProficiencies;break;
  case (Character.class === "Fighter"):Character.proficient_armor = classes.Fighter.armorProficiencies;break;
  case (Character.class === "Cleric"):Character.proficient_armor = classes.Cleric.armorProficiencies;break;
  case (Character.class === "Druid"):Character.proficient_armor = classes.Druid.armorProficiencies;break;
  case (Character.class === "Monk"):Character.proficient_armor = classes.Monk.armorProficiencies;break;
  case (Character.class === "Paladin"):Character.proficient_armor = classes.Paladin.armorProficiencies;break;
  case (Character.class === "Ranger"):Character.proficient_armor = classes.Ranger.armorProficiencies;break;
  case (Character.class === "Rogue"):Character.proficient_armor = classes.Rogue.armorProficiencies;break;
  case (Character.class === "Sorcerer"):Character.proficient_armor = classes.Sorcerer.armorProficiencies;break;
  case (Character.class === "Warlock"):Character.proficient_armor = classes.Warlock.armorProficiencies;break;
  case (Character.class === "Wizard"):Character.proficient_armor = classes.Wizard.armorProficiencies;break;
  default:Character.proficient_armor = "Error: Fell though switch case"

}
return Character;
}


//get weapon Proficiencies
var getWeaponSkills = (Character) => {
Character.proficient_weapons = [];
switch (true) {
  case (Character.class === "Barbarian"):Character.proficient_weapons = classes.Barbarian.weaponProficiencies;break;
  case (Character.class === "Bard"):Character.proficient_weapons = classes.Bard.weaponProficiencies;break;
  case (Character.class === "Fighter"):Character.proficient_weapons = classes.Fighter.weaponProficiencies;break;
  case (Character.class === "Cleric"):Character.proficient_weapons = classes.Cleric.weaponProficiencies;break;
  case (Character.class === "Druid"):Character.proficient_weapons = classes.Druid.weaponProficiencies;break;
  case (Character.class === "Monk"):Character.proficient_weapons = classes.Monk.weaponProficiencies;break;
  case (Character.class === "Paladin"):Character.proficient_weapons = classes.Paladin.weaponProficiencies;break;
  case (Character.class === "Ranger"):Character.proficient_weapons = classes.Ranger.weaponProficiencies;break;
  case (Character.class === "Rogue"):Character.proficient_weapons = classes.Rogue.weaponProficiencies;break;
  case (Character.class === "Sorcerer"):Character.proficient_weapons = classes.Sorcerer.weaponProficiencies;break;
  case (Character.class === "Warlock"):Character.proficient_weapons = classes.Warlock.weaponProficiencies;break;
  case (Character.class === "Wizard"):Character.proficient_weapons = classes.Wizard.weaponProficiencies;break;
    default:Character.proficient_weapons ="Error: Fell though switch case"
}
return Character;
}




//orders stats based on character class
var assignStats = (Character) => {

  Character["Stats"] = {};                       //Creates an array inside the Character object

  if(Character.class === "Barbarian")         //Checks the class and executes its code block if true
  {
    var statList = dice.statList();              //invokes the statList() function from dice.js and stores the return values in a variable
    statList.sort(function(a,b){return b - a});  //Sorts the statList variable in a descending order
    Character.Stats.STR = statList[0]      //Assigns the highest(first after ordering) score the first ability score in the codeblock
    Character.Stats.CON = statList[1]      //And so on...
    Character.Stats.DEX = statList[2]
    Character.Stats.WIS = statList[3]
    Character.Stats.CHA = statList[4]
    Character.Stats.INT = statList[5]
  }
  else if (Character.class === "Bard"){
    var statList = dice.statList();
    statList.sort(function(a,b){return b - a});
    Character["Stats"]["CHA"] = statList[0]      //Here you can see the Bard has a different ordering of desirable ability scores.
    Character["Stats"]["DEX"] = statList[1]
    Character["Stats"]["CON"] = statList[2]
    Character["Stats"]["WIS"] = statList[3]
    Character["Stats"]["STR"] = statList[4]
    Character["Stats"]["INT"] = statList[5]
  }
  else if(Character.class === "Fighter")
  {
    var statList = dice.statList();
    statList.sort(function(a,b){return b - a});
    Character.Stats.STR = statList[0]
    Character.Stats.CON = statList[1]
    Character.Stats.DEX = statList[2]
    Character.Stats.WIS = statList[3]
    Character.Stats.CHA = statList[4]
    Character.Stats.INT = statList[5]
  }
  else if(Character.class === "Cleric")
  {
    var statList = dice.statList();
    statList.sort(function(a,b){return b - a});
    Character.Stats.WIS = statList[0]
    Character.Stats.STR = statList[1]
    Character.Stats.CON = statList[2]
    Character.Stats.DEX = statList[3]
    Character.Stats.CHA = statList[4]
    Character.Stats.INT = statList[5]
}
else if(Character.class === "Druid")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.WIS = statList[0]
  Character.Stats.DEX = statList[1]
  Character.Stats.CON = statList[2]
  Character.Stats.CHA = statList[3]
  Character.Stats.INT = statList[4]
  Character.Stats.STR = statList[5]
}

else if(Character.class === "Monk")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.DEX = statList[0]
  Character.Stats.WIS = statList[1]
  Character.Stats.CON = statList[2]
  Character.Stats.STR = statList[3]
  Character.Stats.CHA = statList[4]
  Character.Stats.INT = statList[5]
}

else if(Character.class === "Paladin")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.STR = statList[0]
  Character.Stats.CHA = statList[1]
  Character.Stats.CON = statList[2]
  Character.Stats.WIS = statList[3]
  Character.Stats.DEX = statList[4]
  Character.Stats.INT = statList[5]
}

else if(Character.class === "Ranger")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.DEX = statList[0]
  Character.Stats.CON = statList[1]
  Character.Stats.WIS = statList[2]
  Character.Stats.STR = statList[3]
  Character.Stats.CHA = statList[4]
  Character.Stats.INT = statList[5]
}

else if(Character.class === "Rogue")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.DEX = statList[0]
  Character.Stats.CON = statList[1]
  Character.Stats.WIS = statList[2]
  Character.Stats.CHA = statList[3]
  Character.Stats.INT = statList[4]
  Character.Stats.STR = statList[5]
}

else if(Character.class === "Sorcerer")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.CHA = statList[0]
  Character.Stats.CON = statList[1]
  Character.Stats.INT = statList[2]
  Character.Stats.WIS = statList[3]
  Character.Stats.DEX = statList[4]
  Character.Stats.STR = statList[5]
}

else if(Character.class === "Warlock")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.CHA = statList[0]
  Character.Stats.CON = statList[1]
  Character.Stats.DEX = statList[2]
  Character.Stats.WIS = statList[3]
  Character.Stats.INT = statList[4]
  Character.Stats.STR = statList[5]
}

else if(Character.class === "Wizard")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.Stats.INT = statList[0]
  Character.Stats.CON = statList[1]
  Character.Stats.DEX = statList[2]
  Character.Stats.WIS = statList[3]
  Character.Stats.CHA = statList[4]
  Character.Stats.STR = statList[5]
}

return Character;
}

var addSubRaceBonus = (Character) => {
  if (Character["Race"] === "Dwarf"){
    Character["Stats"]["WIS"]+=1;
    Character["Stats"]["CON"]+=2;
    Character.hit_points++;
    Character["Racial Traits"] = ["Darkvision "," Dwarven Resilience "," Dwarven Combat Training "," Stonecunning "];
    Character["Subrace"] = ["Hill Dwarf"];
  }
  else if (Character["Race"] === "Human") {
    Character["Stats"]["STR"]+=1;
    Character["Stats"]["DEX"]+=1;
    Character["Stats"]["CON"]+=1;
    Character["Stats"]["WIS"]+=1;
    Character["Stats"]["INT"]+=1;
    Character["Stats"]["CHA"]+=1;
    Character["Racial Traits"] = [];
    Character["Subrace"] = [];
  }
  else if (Character["Race"] === "Elf") {
    Character["Stats"]["INT"]+=1;
    Character["Stats"]["DEX"]+=2;
    Character["Racial Traits"] = ["Darkvision","Keen Senses","Fey Ancestry", "Trance"];
    Character["Subrace"] = ["High Elf"];
  }
  else if (Character["Race"] === "Gnome"){
    Character["Stats"]["Int"]+=2;
    Character["Stats"]["Con"]+=1;
    Character["Racial Traits"] = ["Gnome Cunning","Artificer’s Lore","Tinker"];
    Character["Subrace"] = ["Rock Gnome"];
  }
  else if (Character["Race"] === "Halfling"){
    Character["Stats"]["DEX"]+=2;
    Character["Stats"]["CHA"]+=1;
    Character["Racial Traits"] = ["Lucky","Brave","Halfling Nimbleness", "Naturally Stealty"];
    Character["Subrace"] = ["Lightfoot"];
  }
  else if (Character["Race"] === "Dragonborn"){
    Character["Stats"]["STR"]+=2;
    Character["Stats"]["CHA"]+=1;
    Character["Racial Traits"] = ["Draconic Ancestry", "Breath Weapon","Damage Resistance"];
    Character["Subrace"] = _.sample(races.dragonbornColour);
  }
  else if (Character["Race"] === "HalfElf"){
    var stats = ["STR","DEX","CON","WIS","INT"];
    var a = _.sample(stats);
    _.pull(stats,a)
    var b = _.sample(stats);
    Character["Stats"]["CHA"]+=2;
    Character["Stats"][a]+=1;
    Character["Stats"][b]+=1;
    Character["Racial Traits"] = ["Darkvision", "Fey Ancestry", "Skill Versatility"]
  }
  else if (Character["Race"] === "HalfOrc"){
    Character["Stats"]["STR"]+=2;
    Character["Stats"]["CON"]+=1;
    Character["Racial Traits"] = ["Darkvision", "Menacing","Relentless Endurance","Savage Attacks"];
  }
  else if (Character["Race"] === "Tiefling"){
    Character["Stats"]["INT"]+=1;
    Character["Stats"]["CHA"]+=2;
    Character["Racial Traits"] = ["Darkvision", "Hellish Resistance","Infernal Legacy"];
    }
    return Character;
  }




var calcStats = (Character) => {
  Character.Skill_Athletics = calcBonus(Character.Stats.STR);
  Character.Skill_Acrobatics = calcBonus(Character.Stats.DEX);
  Character.Skill_SleightOfHand = calcBonus(Character.Stats.DEX);
  Character.Skill_Stealth = calcBonus(Character.Stats.DEX);
  Character.Skill_Arcana = calcBonus(Character.Stats.INT);
  Character.Skill_History = calcBonus(Character.Stats.WIS);
  Character.Skill_Nature = calcBonus(Character.Stats.INT);
  Character.Skill_Religion = calcBonus(Character.Stats.WIS);
  Character.Skill_AnimalHandling = calcBonus(Character.Stats.WIS);
  Character.Skill_Insight = calcBonus(Character.Stats.WIS);
  Character.Skill_Medicine = calcBonus(Character.Stats.WIS);
  Character.Skill_Perception = calcBonus(Character.Stats.WIS);
  Character.Skill_Survival = calcBonus(Character.Stats.WIS);
  Character.Skill_Deception = calcBonus(Character.Stats.CHA);
  Character.Skill_Intimidation = calcBonus(Character.Stats.CHA);
  Character.Skill_Performance = calcBonus(Character.Stats.CHA);
  Character.Skill_Persuasion = calcBonus(Character.Stats.CHA);
  Character["Strength Bonus"] = calcBonus(Character.Stats.STR);
  Character["Dexterity Bonus"] = calcBonus(Character.Stats.DEX);
  Character["Constitution Bonus"] = calcBonus(Character.Stats.CON);
  Character["Intelligence Bonus"] = calcBonus(Character.Stats.INT);
  Character["Wisdom Bonus"] = calcBonus(Character.Stats.WIS);
  Character["Charisma Bonus"] = calcBonus(Character.Stats.CHA);
  return Character;
}

var calcInitiative = (Character) => {
  Character["Initiative"] = calcBonus(Character["Stats"]["DEX"]);
  return Character;
}

var calcPassPerception = (Character) => {
  Character["Passive Perception"] = 10 + calcBonus(Character["Stats"]["WIS"]) + Character["Proficiency Bonus"]
  return Character;
}



//calculate stat modifiers To-Do :-> ideally positive numbers will include a "+" prefix
//To-Do :-> surely this can be refactored?
var calcBonus = (stat) => {
  if(stat === 1){return statMod = -5;}
  else if(stat >= 2 && stat <= 3){return statMod = -4;}
  else if(stat >= 4 && stat <= 5){return statMod= -3;}
  else if(stat >= 6 && stat <= 7){return statMod = -2;}
  else if(stat >= 8 && stat <= 9){return statMod = -1;}
  else if (stat >= 10 && stat <=11){return statMod= 0;}
  else if (stat >= 12 && stat <=13){return statMod= +1;}
  else if (stat >= 14 && stat <=15){return statMod = +2;}
  else if (stat >= 16 && stat <=17){return statMod = +3;}
  else if (stat >= 18 && stat <=19){return statMod = +4;}
  else if (stat >= 20 && stat <=21){return statMod = +5;}
  else if (stat >= 22 && stat <=23){return statMod = +6;}
  else if (stat >= 24 && stat <=25){return statMod = +7;}
  else if (stat >= 26 && stat <=27){return statMod = +8;}
  else if (stat >= 28 && stat <=29){return statMod= +9;}
  else if (stat === 30){return statMod = +10;}
  else{return "not caught";}
}





exports.weaponToString = weaponToString;
exports.addFeatureBonues = addFeatureBonues;
exports.getFeatures = getFeatures;
exports.getRandomNumber = getRandomNumber;
exports.calcPassPerception = calcPassPerception;
exports.calcInitiative = calcInitiative;
exports.calcStats = calcStats;
exports.calcArmorClass = calcArmorClass;
exports.addSubRaceBonus = addSubRaceBonus;
exports.getRandomSex = getRandomSex;
exports.calcBonus = calcBonus;
exports.getRandomAlignment = getRandomAlignment;
exports.getRandomClass = getRandomClass;
exports.assignStats = assignStats;
exports.getRandomClass = getRandomClass;
exports.getRandomRace = getRandomRace;
exports.getRandomName = getRandomName;
exports.getRandomProSkills = getRandomProSkills;
exports.getArmorSkills = getArmorSkills;
exports.getWeaponSkills = getWeaponSkills;
exports.calcBaseHP = calcBaseHP;
exports.getDefaultEquipment = getDefaultEquipment;
exports.calcMovementSpeed = calcMovementSpeed;
exports.getProBonus = getProBonus;
exports.getLanguages = getLanguages;
exports.getSavingThrows = getSavingThrows;
exports.ageCalc = ageCalc;
exports.getRandomHeight = getRandomHeight;
exports.assignSpells = assignSpells;
