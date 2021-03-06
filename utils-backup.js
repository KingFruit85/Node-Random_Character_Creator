//import 3rd party.
const _ = require ('lodash');
//import my files
const races =require('./races.js');
const dice =require('./dice.js');
const classes =require('./classes.js');
const weapons =require('./weapons.js');
const spells =require('./spells.js');
const armor =require('./armor.js');
const tools =require('./tools.js');


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
  Character.combat_attributes.saving_throws = {};
  switch (true) {
    case Character.character_attributes.class === "Barbarian":Character.combat_attributes.saving_throws = classes.Barbarian.savingThrows;break;
    case Character.character_attributes.class === "Bard":Character.combat_attributes.saving_throws = classes.Bard.savingThrows;break;
    case Character.character_attributes.class === "Fighter":Character.combat_attributes.saving_throws = classes.Fighter.savingThrows;break;
    case Character.character_attributes.class === "Cleric":Character.combat_attributes.saving_throws = classes.Cleric.savingThrows;break;
    case Character.character_attributes.class === "Druid":Character.combat_attributes.saving_throws = classes.Druid.savingThrows;break;
    case Character.character_attributes.class === "Monk":Character.combat_attributes.saving_throws = classes.Monk.savingThrows;break;
    case Character.character_attributes.class === "Paladin":Character.combat_attributes.saving_throws = classes.Paladin.savingThrows;break;
    case Character.character_attributes.class === "Ranger":Character.combat_attributes.saving_throws = classes.Ranger.savingThrows;break;
    case Character.character_attributes.class === "Rogue":Character.combat_attributes.saving_throws = classes.Rogue.savingThrows;break;
    case Character.character_attributes.class === "Sorcerer":Character.combat_attributes.saving_throws = classes.Sorcerer.savingThrows;break;
    case Character.character_attributes.class === "Warlock":Character.combat_attributes.saving_throws = classes.Warlock.savingThrows;break;
    case Character.character_attributes.class === "Wizard":Character.combat_attributes.saving_throws = classes.Wizard.savingThrows;break;
      default:"Error: Fell Though Switch Statement(getSavingThrows)"
  }
  return Character;
}

//calculate movement speed based on race
var calcMovementSpeed = (Character) => {
  switch (true) {
    case Character.character_attributes.race === "Human":     Character.combat_attributes.speed = races.Human.speed;break;
    case Character.character_attributes.race === "Dwarf":     Character.combat_attributes.speed = races.Dwarf.speed;break;
    case Character.character_attributes.race === "Elf":       Character.combat_attributes.speed = races.Elf.speed;break;
    case Character.character_attributes.race === "Gnome":     Character.combat_attributes.speed = races.Gnome.speed;break;
    case Character.character_attributes.race === "Halfling":  Character.combat_attributes.speed = races.Halfling.speed;break;
    case Character.character_attributes.race === "Dragonborn":Character.combat_attributes.speed = races.Dragonborn.speed;break;
    case Character.character_attributes.race === "HalfElf":   Character.combat_attributes.speed = races.HalfElf.speed;break;
    case Character.character_attributes.race === "HalfOrc":   Character.combat_attributes.speed = races.HalfOrc.speed;break;
    case Character.character_attributes.race === "Tiefling":  Character.combat_attributes.speed = races.Tiefling.speed;break;
    default:Character.combat_attributes.speed = "Error:Fell Through Switch Statement(calcMovementSpeed)"
  }return Character;
}

//Since all characters start at level 1, for the time being this can be set to 2
//Will need to be updated when character levels become randomised/chosen
var getProBonus = (Character) => {
  Character.proficiencies.proficiency_bonus = 2;
  return Character;
}

//Get character known Languages

var getLanguages = (Character) => {
  switch (true) {
    case Character.character_attributes.race === "Dwarf": Character.character_attributes.primary_language = races.Dwarf.Languages; Character.character_attributes.secondary_language = races.Dwarf.ExtraLanguage; break;
    case Character.character_attributes.race === "Human": Character.character_attributes.primary_language = races.Human.Languages; Character.character_attributes.secondary_language = _.sample(races.Human.ExtraLanguage); break;
    case Character.character_attributes.race === "Elf": Character.character_attributes.primary_language = races.Elf.Languages; Character.character_attributes.secondary_language = races.Elf.ExtraLanguage; break;
    case Character.character_attributes.race === "Gnome": Character.character_attributes.primary_language = _.sample(races.Gnome.Languages); Character.character_attributes.secondary_language = races.Gnome.ExtraLanguage; break;
    case Character.character_attributes.race === "Halfling": Character.character_attributes.primary_language = races.Halfling.Languages; Character.character_attributes.secondary_language = races.Halfling.ExtraLanguage; break;
    case Character.character_attributes.race === "Dragonborn": Character.character_attributes.primary_language = races.Dragonborn.Languages; Character.character_attributes.secondary_language = races.Dragonborn.ExtraLanguage; break;
    case Character.character_attributes.race === "HalfElf": Character.character_attributes.primary_language = races.HalfElf.Languages; Character.character_attributes.secondary_language = _.sample(races.HalfElf.ExtraLanguage); break;
    case Character.character_attributes.race === "HalfOrc": Character.character_attributes.primary_language = races.HalfOrc.Languages; Character.character_attributes.secondary_language = races.HalfOrc.ExtraLanguage; break;
    case Character.character_attributes.race === "Tiefling": Character.character_attributes.primary_language = races.Tiefling.Languages; Character.character_attributes.secondary_language = races.Tiefling.ExtraLanguage; break;
    default:Character.character_attributes.primary_language   = "Error:Fell Through Switch Statement(getLanguages)";
            Character.character_attributes.secondary_language = "Error:Fell Through Switch Statement(getLanguages)";
  }return Character;
}

var calcBonus = (stat) => {
  stat = Math.floor( ( stat - 10 ) / 2 );
  if (stat > 0){
    stat = "+" + stat;
    return stat;
  }else return stat;

};

var altCalcBonus = (stat) => {
  return Math.floor( ( stat - 10 ) / 2 );
}

//get default equipment
var getDefaultEquipment = (Character) => {
  Character.primary_weapon = [];
  Character.secondary_weapon = [];
  Character.armor = [];
  Character.armor_class = [];
  Character.equipment = [];
  Character.primary_weapon_info = [];

  if(Character.class === "Bard"){


    r = getRandomNumber( 1 , 3 );

    switch (true) {
      case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Rapier);break;
      case (r === 2):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Longsword) ;break;
      case (r === 3):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:       Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")};

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
      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")};

    switch (true) {
      case (r === 1):Character.secondary_weapon.push(weapons.SimpleWeapons.Handaxe);break;
      case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;

      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")};
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
        default:Character.secondary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

      r=getRandomNumber( 1 , 2 )
      switch (true) {
        case (r === 1):Character.secondary_weapon.push(weapons.SimpleRangedWeapons.LightCrossbow);break;
        case (r === 2):Character.secondary_weapon.push(weapons.SimpleWeapons.Handaxe);break;
        default:Character.secondary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

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
     default:Character.armor.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

   r = getRandomNumber( 1 , 2 )
   switch (true) {
     case (r === 1):Character.secondary_weapon.push(weapons.SimpleRangedWeapons.LightCrossbow);break;
     case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;
     default:Character.secondary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

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
      default: Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

  r = getRandomNumber( 1 , 2 )
  switch(true) {
    case (r === 1):Character.secondary_weapon.push(weapons.MartialMeleeWeapons.Scimitar);break;
    case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:Character.secondary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

    Character.armor.push(armor.LightArmor.Leather);
    Character.equipment.push(classes.Druid.equipment);
}

else if (Character.class === "Monk"){
  r = getRandomNumber( 1 , 2 )
  switch (true) {

    case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Shortsword);break;
    case (r === 2):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}
  r = getRandomNumber( 1 , 2 )
    switch (true) {
      case (r === 1):Character.equipment.push(_.sample(tools.Tools.ArtisansTools).Name);break;
      case (r === 2):Character.equipment.push(_.sample(tools.Tools.MusicalInstruments).Name);break;
      default:Character.equipment.push("Error: Fell Though Switch Case(getDefaultEquipment)")

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
      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

  r = getRandomNumber( 1 , 2 )
  switch(true) {
    case (r === 1):Character.secondary_weapon = Array(5).fill(weapons.SimpleWeapons.Javelin);break;
    case (r === 2):Character.secondary_weapon.push(_.sample(weapons.SimpleWeapons));break;
      default:Character.secondary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

      Character.armor.push(armor.HeavyArmor.ChainMail);
      Character.equipment.push(_.sample(classes.Paladin.equipment)) ;
      Character.equipment.push("Holy Symbol");

}

else if (Character.class === "Ranger"){

  r = getRandomNumber( 1 , 2 )
  switch (true) {

    case (r === 1):Character.primary_weapon.push(weapons.MartialMeleeWeapons.Shortsword,weapons.MartialMeleeWeapons.Shortsword);break;
    case (r === 2):Character.primary_weapon.push(_.sample(weapons.SimpleWeapons),_.sample(weapons.SimpleWeapons));break;
      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

      Character.secondary_weapon.push(weapons.MartialRangedWeapons.Longbow);

  r = getRandomNumber( 1 , 2 )
    switch (true) {
      case r === 1:Character.armor.push(armor.LightArmor.Leather);break;
      case r === 2:Character.armor.push(armor.MediumArmor.ScaleMail);break;
      default:Character.armor.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

      Character.equipment.push(_.sample([["Dungeoneers Pack"],["Explorers Pack"]]));
    }


  else if (Character.class === "Rogue"){

    r = getRandomNumber( 1 , 2 )
    switch (true) {
      case r === 1:Character.primary_weapon.push(weapons.MartialMeleeWeapons.Rapier);break;
      case r === 2:Character.primary_weapon.push(weapons.MartialMeleeWeapons.Shortsword);break;
        default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

    r = getRandomNumber( 1 , 2 )
    switch(true) {
      case r === 1:Character.secondary_weapon.push(weapons.SimpleRangedWeapons.Shortbow);break;
      case r === 2:Character.secondary_weapon.push(weapons.MartialMeleeWeapons.Shortsword);break;
        default:Character.secondary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

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
        default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

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
      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

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
      default:Character.primary_weapon.push("Error: Fell Though Switch Case(getDefaultEquipment)")}

      Character.equipment.push(_.sample(["Scholars Pack"],["Explorers Pack"]));
      Character.equipment.push(_.sample(["Component Pouch"],["Arcane Focus"]));
      Character.equipment.push("Spellbook")
      Character.armor.push(armor.LightArmor.No_Armor);

}
return Character;
}


 var calcArmorClass = (Character) => {
   switch (true) {
     case (Object.values(Character.armor)[0] === "Padded Armor"):          Character.combat_attributes.armor_class += 11 + altCalcBonus(Character.stats.DEX);break;
     case (Object.values(Character.armor)[0] === "Leather Armor"):         Character.combat_attributes.armor_class += 11 + altCalcBonus(Character.stats.DEX);break;
     case (Object.values(Character.armor)[0] === "Studded Leather Armor"): Character.combat_attributes.armor_class += 12 + altCalcBonus(Character.stats.DEX);break;
     case (Object.values(Character.armor)[0] === "Chain Mail"):            Character.combat_attributes.armor_class += 16;break;
     case (Object.values(Character.armor)[0] === "Hide Armor"):            Character.combat_attributes.armor_class += 12 + _.inRange(altCalcBonus(Character.stats.DEX),2);break;
     case (Object.values(Character.armor)[0] === "Scale Mail"):            Character.combat_attributes.armor_class += 14 + altCalcBonus(Character.stats.DEX);break;
     case (Object.values(Character.armor)[0] === "No Armor"):              Character.combat_attributes.armor_class += 10 + altCalcBonus(Character.stats.DEX) + altCalcBonus(Character.stats.CON);break;
      default: Character.combat_attributes.armor_class = ("Fell Through(calcArmorClass)")
   }return Character;
 }

//calc starting hit points, using first level hitpoints plus con modifier
var calcBaseHP = (Character) => {
  switch (true) {
    case Character.character_attributes.class === "Barbarian": Character.combat_attributes.hit_points = 12  + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Bard":      Character.combat_attributes.hit_points = 8   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Fighter":   Character.combat_attributes.hit_points = 10  + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Cleric":    Character.combat_attributes.hit_points = 8   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Druid" :    Character.combat_attributes.hit_points = 8   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Monk"  :    Character.combat_attributes.hit_points = 8   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Paladin":   Character.combat_attributes.hit_points = 10  + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Ranger":    Character.combat_attributes.hit_points = 10  + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Rogue":     Character.combat_attributes.hit_points = 8   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Sorcerer":  Character.combat_attributes.hit_points = 6   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Warlock":   Character.combat_attributes.hit_points = 8   + altCalcBonus(Character.stats.CON); break;
    case Character.character_attributes.class === "Wizard":    Character.combat_attributes.hit_points = 6   + altCalcBonus(Character.stats.CON); break;
      default: "Error:Fell Through Switch Statement(calcBaseHP)";
  }return Character;
}

var ageCalc = (Character) => {
  switch (true) {
    case Character.character_attributes.race === "Human":      Character.character_attributes.age = getRandomNumber( 18, 100 );  break;
    case Character.character_attributes.race === "Dwarf":      Character.character_attributes.age = getRandomNumber( 50, 350 );  break;
    case Character.character_attributes.race === "Elf":        Character.character_attributes.age = getRandomNumber( 100, 750 ); break;
    case Character.character_attributes.race === "Gnome":      Character.character_attributes.age = getRandomNumber( 40, 500 );  break;
    case Character.character_attributes.race === "Halfling":   Character.character_attributes.age = getRandomNumber( 20, 250 );  break;
    case Character.character_attributes.race === "Dragonborn": Character.character_attributes.age = getRandomNumber( 15, 80 );   break;
    case Character.character_attributes.race === "HalfElf":    Character.character_attributes.age = getRandomNumber( 20, 180 );  break;
    case Character.character_attributes.race === "HalfOrc":    Character.character_attributes.age = getRandomNumber( 14, 75 );   break;
    case Character.character_attributes.race === "Tiefling":   Character.character_attributes.age = getRandomNumber( 18, 120 );  break;
      default: Character.character_attributes.age = "Error:Fell Through Switch Statement (ageCalc)";
  }return Character;
}

var assignSpells = (Character) => {
  Character.spells.cantrips = [];
  Character.spells.firstLevelSpells = [];
  Character.spells.spellSlots = [];

  switch (true) {
    case (Character.character_attributes.class === "Bard"):
    Character.spells.cantrips.push(_.sampleSize(spells.bardCantrips,2));
    Character.spells.firstLevelSpells.push(_.sampleSize(spells.bardLevel1,4))
    Character.spells.spellSlots.push(2);break;

    case (Character.character_attributes.class === "Cleric"):
    Character.spells.cantrips.push(_.sampleSize(spells.clericCantrips,3));
    Character.spells.firstLevelSpells.push(_.sampleSize(spells.clericLevel1,calcBonus(Character.stats.WIS +1 )))
    Character.spells.spellSlots.push(calcBonus(Character.stats.WIS)+1);break;


    case (Character.character_attributes.class === "Druid"):Character.spells.cantrips.push(_.sampleSize(spells.druidCantrips,2));
                                       Character.spells.firstLevelSpells.push(_.sampleSize(spells.druidLevel1,2));break;


    case (Character.character_attributes.class === "Sorcerer"):Character.spells.cantrips.push(_.sampleSize(spells.sorcererCantrips,4));
                                       Character.spells.firstLevelSpells.push(_.sampleSize(spells.sorcererLevel1,2));break;


    case (Character.character_attributes.class === "Warlock"):Character.spells.cantrips.push(_.sampleSize(spells.warlockCantrips,2));
                                       Character.spells.firstLevelSpells.push(_.sampleSize(spells.warlockLevel1,2));break;


    case (Character.character_attributes.class === "Wizard"):Character.spells.cantrips.push(_.sampleSize(spells.wizardCantrips,3));
                                       Character.spells.firstLevelSpells.push(_.sampleSize(spells.wizardLevel1,2));break;


      default:Character.spells.cantrips = ""

  }
  return Character;

}
"Non-Binary"

//generate random name based off sex/race
var getRandomName = (Character) => {
  switch (true){
    case (Character.character_attributes.race === "Human" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.humanMaleNames)  + " " + _.sample(races.humanLastNames);
          break;
    case (Character.character_attributes.race === "Human" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.humanFemaleNames) + " " + _.sample(races.humanLastNames);
          break;
    case (Character.character_attributes.race === "Dwarf" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.dwarfMaleNames) + " " + _.sample(races.dwarfLastNames);
          break;
    case (Character.character_attributes.race === "Dwarf" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.dwarfFemaleNames) + " " + _.sample(races.dwarfLastNames);
          break;
    case (Character.character_attributes.race === "Elf" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.elfMaleNames)           + " " + _.sample(races.elfLastNames);        break;
    case (Character.character_attributes.race === "Elf" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.elfFemaleNames)         + " " + _.sample(races.elfLastNames);        break;
    case (Character.character_attributes.race === "Gnome" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.gnomeMaleNames)         + " " + _.sample(races.gnomeLastNames);      break;
    case (Character.character_attributes.race === "Gnome" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.gnomeFemaleNames)       + " " + _.sample(races.gnomeLastNames);      break;
    case (Character.character_attributes.race === "Halfling" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.halflingMaleNames)      + " " + _.sample(races.halflingLastNames);   break;
    case (Character.character_attributes.race === "Halfling" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.halflingFemaleNames)    + " " + _.sample(races.halflingLastNames);   break;
    case (Character.character_attributes.race === "Dragonborn" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.dragonbornMaleNames)    + " " + _.sample(races.dragonbornLastNames); break;
    case (Character.character_attributes.race === "Dragonborn" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.dragonbornFemaleNames)  + " " + _.sample(races.dragonbornLastNames); break;
    case (Character.character_attributes.race === "HalfElf" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.humanMaleNames)         + " " + _.sample(races.elfLastNames);        break;
    case (Character.character_attributes.race === "HalfElf" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.humanFemaleNames)       + " " + _.sample(races.elfLastNames);        break;
    case (Character.character_attributes.race === "HalfOrc" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.halforcMaleNames)       + " " + _.sample(races.halforcLastName);     break;
    case (Character.character_attributes.race === "HalfOrc" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.halforcFemaleNames)     + " " + _.sample(races.halforcLastName);     break;
    case (Character.character_attributes.race === "Tiefling" && Character.character_attributes.sex === "Male"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.tieflingMaleNames)      + " " + _.sample(races.tieflingLastNames);   break;
    case (Character.character_attributes.race === "Tiefling" && Character.character_attributes.sex === "Female"||Character.character_attributes.sex === "Non-Binary" ):
          Character.character_attributes.name = _.sample(races.tieflingFemaleNames)    + " " + _.sample(races.tieflingLastNames);   break;
    default: Character.character_attributes.name = "Error:Fell Through Switch Statement (getRandomName)";
  }return Character;
   }



var getRandomHeight = (Character) => {
    switch (true){
      case (Character.character_attributes.race === "Human"):Character.character_attributes.height      = _.sample(races.humanElfHeight);break;
      case (Character.character_attributes.race === "Dwarf"):Character.character_attributes.height      = _.sample(races.dwarfHeight);break;
      case (Character.character_attributes.race === "Elf"):Character.character_attributes.height        = _.sample(races.humanElfHeight);break;
      case (Character.character_attributes.race === "Gnome"):Character.character_attributes.height      = _.sample(races.gnomeHeight);break;
      case (Character.character_attributes.race === "Halfling"):Character.character_attributes.height   = _.sample(races.halflingHeight);break;
      case (Character.character_attributes.race === "Dragonborn"):Character.character_attributes.height = _.sample(races.dragonbornHeight);break;
      case (Character.character_attributes.race === "HalfElf"):Character.character_attributes.height    = _.sample(races.humanElfHeight);break;
      case (Character.character_attributes.race === "HalfOrc"):Character.character_attributes.height    = _.sample(races.halforcHeight);break;
      case (Character.character_attributes.race === "Tiefling"):Character.character_attributes.height   = _.sample(races.humanElfHeight);break;
      default:Character.character_attributes.height = "Error:Fell Through Switch Statement (getRandomHeight)";
    }return Character;
  }


//get random race
var getRandomRace = (Character) => {
  raceInfo = _.sample(races.race)
  Character.character_attributes.race = raceInfo.race
  Character.character_attributes.raceLink = raceInfo.www
  return Character;
}


var getRandomClass = (Character) => {
classInfo = _.sample(classes.classes)
Character.character_attributes.class = classInfo.class
Character.character_attributes.classLink = classInfo.www
return Character;
}

//get random alignment
var getRandomAlignment = (Character) => {
  Character.character_attributes.alignment = _.sample(races.alignment);
  return Character;
}

var getFeatures = (Character) => {
  Character.abilities = [];
  switch (true) {
    case Character.character_attributes.class === "Barbarian":Character.abilities.push(classes.Barbarian.abilities);break;
    case Character.character_attributes.class === "Bard":Character.abilities.push(classes.Bard.abilities);break;
    case Character.character_attributes.class === "Fighter":Character.abilities.push(classes.Fighter.abilities),
                                       Character.abilities.push(_.sample(classes.Fighter.extraAbilities));break;
    case Character.character_attributes.class === "Cleric":Character.abilities.push(classes.Cleric.abilities);break;
    case Character.character_attributes.class === "Druid":Character.abilities.push(classes.Druid.abilities);break;
    case Character.character_attributes.class === "Paladin":Character.abilities.push(classes.Paladin.abilities);break;
    case Character.character_attributes.class === "Ranger":Character.abilities.push(classes.Ranger.abilities);break;
    case Character.character_attributes.class === "Rogue":Character.abilities.push(classes.Rogue.abilities);break;
    case Character.character_attributes.class === "Sorcerer":Character.abilities.push(classes.Sorcerer.abilities);break;
    case Character.character_attributes.class === "Warlock":Character.abilities.push(classes.Warlock.abilities);break;
    case Character.character_attributes.class === "Wizard":Character.abilities.push(classes.Wizard.abilities);break;
    case Character.character_attributes.class === "Monk":Character.abilities.push(classes.Monk.abilities);break;
      default:Character.abilities = "Error:Fell Though Switch Statement";

  }return Character;

}


var addFeatureBonues = (Character) => {
  switch (true) {
    case Character.abilities.includes("Defense"):Character.armor_class ++;break;
    default:"Nothing"
  }return Character;
}


//get random sex
var getRandomSex = (Character) => {
  Character.character_attributes.sex = _.sample(races.sex);
  return Character;
}

//get class based Proficiencies
var getRandomProSkills = (Character) => {
  Character.proficiencies.proficient_skills =[];
  switch (true) {
    case (Character.character_attributes.class === "Barbarian"):Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Barbarian.skillProficiencies, 2);break;
    case (Character.character_attributes.class === "Bard"):     Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Bard.skillProficiencies, 3);break;
    case (Character.character_attributes.class === "Fighter")  :Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Fighter.skillProficiencies, 2);break;
    case (Character.character_attributes.class) === "Cleric":   Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Cleric.skillProficiencies,2);break;
    case (Character.character_attributes.class === "Druid")     :Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Druid.skillProficiencies, 2);break;
    case (Character.character_attributes.class === "Monk")      :Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Monk.skillProficiencies, 2);break;
    case (Character.character_attributes.class === "Paladin")      :Character.proficiencies.proficient_skills =
                                           _.sampleSize(classes.Paladin.skillProficiencies, 2);break;
    case (Character.character_attributes.class === "Ranger")  :Character.proficiencies.proficient_skills =
                                          _.sampleSize(classes.Ranger.skillProficiencies, 3);break;
    case (Character.character_attributes.class) === "Rogue":   Character.proficiencies.proficient_skills =
                                          _.sampleSize(classes.Rogue.skillProficiencies,4);break;
    case (Character.character_attributes.class === "Sorcerer")     :Character.proficiencies.proficient_skills =
                                          _.sampleSize(classes.Sorcerer.skillProficiencies, 2);break;
    case (Character.character_attributes.class === "Warlock")      :Character.proficiencies.proficient_skills =
                                          _.sampleSize(classes.Warlock.skillProficiencies, 2);break;
    case (Character.character_attributes.class === "Wizard")      :Character.proficiencies.proficient_skills =
                                          _.sampleSize(classes.Wizard.skillProficiencies, 2);break;

    default:Character.proficiencies.proficient_skills = "Error: Fell Though switch case"
}
return Character;
}

//get armor Proficiencies
var getArmorSkills = (Character) => {
Character.proficiencies.proficient_armor = [];
switch (true) {
  case (Character.character_attributes.class === "Barbarian"):Character.proficiencies.proficient_armor = classes.Barbarian.armorProficiencies;break;
  case (Character.character_attributes.class === "Bard"):Character.proficiencies.proficient_armor = classes.Bard.armorProficiencies;break;
  case (Character.character_attributes.class === "Fighter"):Character.proficiencies.proficient_armor = classes.Fighter.armorProficiencies;break;
  case (Character.character_attributes.class === "Cleric"):Character.proficiencies.proficient_armor = classes.Cleric.armorProficiencies;break;
  case (Character.character_attributes.class === "Druid"):Character.proficiencies.proficient_armor = classes.Druid.armorProficiencies;break;
  case (Character.character_attributes.class === "Monk"):Character.proficiencies.proficient_armor = classes.Monk.armorProficiencies;break;
  case (Character.character_attributes.class === "Paladin"):Character.proficiencies.proficient_armor = classes.Paladin.armorProficiencies;break;
  case (Character.character_attributes.class === "Ranger"):Character.proficiencies.proficient_armor = classes.Ranger.armorProficiencies;break;
  case (Character.character_attributes.class === "Rogue"):Character.proficiencies.proficient_armor = classes.Rogue.armorProficiencies;break;
  case (Character.character_attributes.class === "Sorcerer"):Character.proficiencies.proficient_armor = classes.Sorcerer.armorProficiencies;break;
  case (Character.character_attributes.class === "Warlock"):Character.proficiencies.proficient_armor = classes.Warlock.armorProficiencies;break;
  case (Character.character_attributes.class === "Wizard"):Character.proficiencies.proficient_armor = classes.Wizard.armorProficiencies;break;
  default:Character.proficiencies.proficient_armor = "Error: Fell though switch case"

}
return Character;
}


//get weapon Proficiencies
var getWeaponSkills = (Character) => {
Character.proficiencies.proficient_weapons = [];
switch (true) {
  case (Character.character_attributes.class === "Barbarian"):Character.proficiencies.proficient_weapons = classes.Barbarian.weaponProficiencies;break;
  case (Character.character_attributes.class === "Bard"):Character.proficiencies.proficient_weapons = classes.Bard.weaponProficiencies;break;
  case (Character.character_attributes.class === "Fighter"):Character.proficiencies.proficient_weapons = classes.Fighter.weaponProficiencies;break;
  case (Character.character_attributes.class === "Cleric"):Character.proficiencies.proficient_weapons = classes.Cleric.weaponProficiencies;break;
  case (Character.character_attributes.class === "Druid"):Character.proficiencies.proficient_weapons = classes.Druid.weaponProficiencies;break;
  case (Character.character_attributes.class === "Monk"):Character.proficiencies.proficient_weapons = classes.Monk.weaponProficiencies;break;
  case (Character.character_attributes.class === "Paladin"):Character.proficiencies.proficient_weapons = classes.Paladin.weaponProficiencies;break;
  case (Character.character_attributes.class === "Ranger"):Character.proficiencies.proficient_weapons = classes.Ranger.weaponProficiencies;break;
  case (Character.character_attributes.class === "Rogue"):Character.proficiencies.proficient_weapons = classes.Rogue.weaponProficiencies;break;
  case (Character.character_attributes.class === "Sorcerer"):Character.proficiencies.proficient_weapons = classes.Sorcerer.weaponProficiencies;break;
  case (Character.character_attributes.class === "Warlock"):Character.proficiencies.proficient_weapons = classes.Warlock.weaponProficiencies;break;
  case (Character.character_attributes.class === "Wizard"):Character.proficiencies.proficient_weapons = classes.Wizard.weaponProficiencies;break;
    default:Character.character_attributes.proficient_weapons ="Error: Fell though switch case(getWeaponSkills)"
}
return Character;
}




//orders stats based on character class
var assignStats = (Character) => {

  Character.stats = {};                       //Creates an array inside the Character object

  if(Character.character_attributes.class === "Barbarian")         //Checks the class and executes its code block if true
  {
    var statList = dice.statList();              //invokes the statList() function from dice.js and stores the return values in a variable
    statList.sort(function(a,b){return b - a});  //Sorts the statList variable in a descending order
    Character.stats.STR = statList[0]      //Assigns the highest(first after ordering) score the first ability score in the codeblock
    Character.stats.CON = statList[1]      //And so on...
    Character.stats.DEX = statList[2]
    Character.stats.WIS = statList[3]
    Character.stats.CHA = statList[4]
    Character.stats.INT = statList[5]
  }
  else if (Character.character_attributes.class === "Bard"){
    var statList = dice.statList();
    statList.sort(function(a,b){return b - a});
    Character.stats.CHA = statList[0]      //Here you can see the Bard has a different ordering of desirable ability scores.
    Character.stats.DEX = statList[1]
    Character.stats.CON = statList[2]
    Character.stats.WIS = statList[3]
    Character.stats.STR = statList[4]
    Character.stats.INT = statList[5]
  }
  else if(Character.character_attributes.class === "Fighter")
  {
    var statList = dice.statList();
    statList.sort(function(a,b){return b - a});
    Character.stats.STR = statList[0]
    Character.stats.CON = statList[1]
    Character.stats.DEX = statList[2]
    Character.stats.WIS = statList[3]
    Character.stats.CHA = statList[4]
    Character.stats.INT = statList[5]
  }
  else if(Character.character_attributes.class === "Cleric")
  {
    var statList = dice.statList();
    statList.sort(function(a,b){return b - a});
    Character.stats.WIS = statList[0]
    Character.stats.STR = statList[1]
    Character.stats.CON = statList[2]
    Character.stats.DEX = statList[3]
    Character.stats.CHA = statList[4]
    Character.stats.INT = statList[5]
}
else if(Character.character_attributes.class === "Druid")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.WIS = statList[0]
  Character.stats.DEX = statList[1]
  Character.stats.CON = statList[2]
  Character.stats.CHA = statList[3]
  Character.stats.INT = statList[4]
  Character.stats.STR = statList[5]
}

else if(Character.character_attributes.class === "Monk")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.DEX = statList[0]
  Character.stats.WIS = statList[1]
  Character.stats.CON = statList[2]
  Character.stats.STR = statList[3]
  Character.stats.CHA = statList[4]
  Character.stats.INT = statList[5]
}

else if(Character.character_attributes.class === "Paladin")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.STR = statList[0]
  Character.stats.CHA = statList[1]
  Character.stats.CON = statList[2]
  Character.stats.WIS = statList[3]
  Character.stats.DEX = statList[4]
  Character.stats.INT = statList[5]
}

else if(Character.character_attributes.class === "Ranger")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.DEX = statList[0]
  Character.stats.CON = statList[1]
  Character.stats.WIS = statList[2]
  Character.stats.STR = statList[3]
  Character.stats.CHA = statList[4]
  Character.stats.INT = statList[5]
}

else if(Character.character_attributes.class === "Rogue")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.DEX = statList[0]
  Character.stats.CON = statList[1]
  Character.stats.WIS = statList[2]
  Character.stats.CHA = statList[3]
  Character.stats.INT = statList[4]
  Character.stats.STR = statList[5]
}

else if(Character.character_attributes.class === "Sorcerer")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.CHA = statList[0]
  Character.stats.CON = statList[1]
  Character.stats.INT = statList[2]
  Character.stats.WIS = statList[3]
  Character.stats.DEX = statList[4]
  Character.stats.STR = statList[5]
}

else if(Character.character_attributes.class === "Warlock")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.CHA = statList[0]
  Character.stats.CON = statList[1]
  Character.stats.DEX = statList[2]
  Character.stats.WIS = statList[3]
  Character.stats.INT = statList[4]
  Character.stats.STR = statList[5]
}

else if(Character.character_attributes.class === "Wizard")
{
  var statList = dice.statList();
  statList.sort(function(a,b){return b - a});
  Character.stats.INT = statList[0]
  Character.stats.CON = statList[1]
  Character.stats.DEX = statList[2]
  Character.stats.WIS = statList[3]
  Character.stats.CHA = statList[4]
  Character.stats.STR = statList[5]
}

return Character;
}

var addSubRaceBonus = (Character) => {
  if (Character.character_attributes.race === "Dwarf"){
    Character.stats.WIS +=1;
    Character.stats.CON +=2;
    Character.hit_points ++;
    Character["Racial Traits"] = ["Darkvision "," Dwarven Resilience "," Dwarven Combat Training "," Stonecunning "];
    Character.Subrace = ["Hill Dwarf"];
  }
  else if (Character.character_attributes.race === "Human") {
    Character.stats.STR +=1;
    Character.stats.DEX +=1;
    Character.stats.CON +=1;
    Character.stats.WIS +=1;
    Character.stats.INT +=1;
    Character.stats.CHA +=1;
    Character["Racial Traits"] = [];
    Character.Subrace = [];
  }
  else if (Character.character_attributes.race === "Elf") {
    Character.stats.INT +=1;
    Character.stats.DEX +=2;
    Character["Racial Traits"] = ["Darkvision","Keen Senses","Fey Ancestry", "Trance"];
    Character.Subrace = ["High Elf"];
  }
  else if (Character.character_attributes.race === "Gnome"){
    Character.stats.INT +=2;
    Character.stats.Con +=1;
    Character["Racial Traits"] = ["Gnome Cunning","Artificer’s Lore","Tinker"];
    Character.Subrace = ["Rock Gnome"];
  }
  else if (Character.character_attributes.race === "Halfling"){
    Character.stats.DEX +=2;
    Character.stats.CHA +=1;
    Character["Racial Traits"] = ["Lucky","Brave","Halfling Nimbleness", "Naturally Stealty"];
    Character.Subrace = ["Lightfoot"];
  }
  else if (Character.character_attributes.race === "Dragonborn"){
    Character.stats.STR +=2;
    Character.stats.CHA +=1;
    Character["Racial Traits"] = ["Draconic Ancestry", "Breath Weapon","Damage Resistance"];
    Character.Subrace = _.sample(races.dragonbornColour);
  }
  else if (Character.character_attributes.race === "HalfElf"){
    var stats = ["STR","DEX","CON","WIS","INT"];
    var a = _.sample(stats);
    _.pull(stats,a)
    var b = _.sample(stats);
    Character.stats.CHA +=2;
    Character.stats[a]  +=1;
    Character.stats[b]  +=1;
    Character["Racial Traits"] = ["Darkvision", "Fey Ancestry", "Skill Versatility"]
  }
  else if (Character.character_attributes.race === "HalfOrc"){
    Character.stats.STR +=2;
    Character.stats.CON +=1;
    Character["Racial Traits"] = ["Darkvision", "Menacing","Relentless Endurance","Savage Attacks"];
  }
  else if (Character.character_attributes.race === "Tiefling"){
    Character.stats.INT +=1;
    Character.stats.CHA +=2;
    Character["Racial Traits"] = ["Darkvision", "Hellish Resistance","Infernal Legacy"];
    }
    return Character;
  }




var calcStats = (Character) => {
  Character.skills = {};
  Character.ability_bonuses = {};
  Character.skills.skill_athletics = calcBonus(Character.stats.STR);
  Character.skills.skill_acrobatics = calcBonus(Character.stats.DEX);
  Character.skills.skill_sleightOfHand = calcBonus(Character.stats.DEX);
  Character.skills.skill_stealth = calcBonus(Character.stats.DEX);
  Character.skills.skill_arcana = calcBonus(Character.stats.INT);
  Character.skills.skill_history = calcBonus(Character.stats.WIS);
  Character.skills.skill_nature = calcBonus(Character.stats.INT);
  Character.skills.skill_religion = calcBonus(Character.stats.WIS);
  Character.skills.skill_animalHandling = calcBonus(Character.stats.WIS);
  Character.skills.skill_insight = calcBonus(Character.stats.WIS);
  Character.skills.skill_medicine = calcBonus(Character.stats.WIS);
  Character.skills.skill_perception = calcBonus(Character.stats.WIS);
  Character.skills.skill_survival = calcBonus(Character.stats.WIS);
  Character.skills.skill_deception = calcBonus(Character.stats.CHA);
  Character.skills.skill_intimidation = calcBonus(Character.stats.CHA);
  Character.skills.skill_performance = calcBonus(Character.stats.CHA);
  Character.skills.skill_persuasion = calcBonus(Character.stats.CHA);
  Character.ability_bonuses.strength_bonus = calcBonus(Character.stats.STR);
  Character.ability_bonuses.dexterity_bonus = calcBonus(Character.stats.DEX);
  Character.ability_bonuses.constitution_bonus = calcBonus(Character.stats.CON);
  Character.ability_bonuses.intelligence_bonus = calcBonus(Character.stats.INT);
  Character.ability_bonuses.wisdom_bonus = calcBonus(Character.stats.WIS);
  Character.ability_bonuses.charisma_bonus = calcBonus(Character.stats.CHA);
  return Character;
}

var calcInitiative = (Character) => {
  Character.combat_attributes.initiative = calcBonus(Character.stats.DEX);
  return Character;
}

var calcPassPerception = (Character) => {
  Character.combat_attributes.passive_perception = 10 + altCalcBonus(Character.stats.WIS) + Character.proficiencies.proficiency_bonus;
  return Character;
}








exports.altCalcBonus = altCalcBonus;
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
