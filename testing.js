const _         =require('lodash');
const classes   =require('./classes.js');
const weapons   =require('./weapons.js');
const armor     =require('./armor.js');
const tools     =require('./tools.js');
const utils     =require('./utils.js');
const equipment =require('./equipment');
const races     =require('./races.js');
const dice      =require('./dice.js');

const fs = require('fs');

var Character = {
              //    getArmor() {return this.characterEquipment.armor.Name},
              // getBackpack() {return this.characterEquipment.backpack.Name},
              //  getLeftWep() {return this.characterEquipment.leftHandedWeapon.Name},
              // getRightWep() {return this.characterEquipment.rightHandedWeapon.Name},
              //
              //   getAddWep() { list = [];
              //                 if (this.characterEquipment.additionalWeapons.length > 1)
              //                 {
              //                   return {weapon1:this.characterEquipment.additionalWeapons[0].Name,
              //                           weapon2:this.characterEquipment.additionalWeapons[1].Name};
              //                 }
              //                 else return this.characterEquipment.additionalWeapons[0].Name
              //
              //               },
                          };


// var charClasses = ["Barbarian","Bard","Cleric","Fighter"];
var charClasses = ["Bard"];

var buildCharacter = () => {
  getChracterInfo(Character);
  getDefaultEquipment(Character);

  return Character;
}

var getChracterInfo = (Character) => {
  Character.class = "Bard";
  // Character.race  = _.sample(races.race)
  // Character.sex   = _.sample(races.sex);
  // utils.assignStats(Character);
  // utils.addSubRaceBonus(Character);
  // utils.calcBaseHP(Character);
  return Character
}


var getDefaultEquipment = (Character) => {
Character.equipment = {};
Character.equipment.weapons = {};
Character.equipment.armor = {};
Character.equipment.tools = {};

if(Character.class === "Bard"){

    Character.equipment.weapons =

    {
      leftHandedWeapon: _.sample(weapons.SimpleWeapons, weapons.MartialMeleeWeapons.Rapier, weapons.MartialMeleeWeapons.Longsword),
      rightHandedWeapon:{Name: "None"},
      additionalWeapons:weapons.SimpleWeapons.Dagger
    }

    Character.equipment.armor                       = armor.LightArmor.Leather;
    Character.equipment.tools.backpack              = _.sample([equipment.EquipmentPacks.DiplomatsPack, equipment.EquipmentPacks.EntertainersPack]);
    Character.equipment.tools.additionalItems       = _.sample(tools.Tools.MusicalInstruments)

}

  else if (Character.class === "Barbarian"){

    Character.equipment.weapons =

    {
      leftHandedWeapon:_.sample(weapons.MartialMeleeWeapons),
      rightHandedWeapon:{Name: "None"},
      additionalWeapons:

    }

    Character.equipment.armor                     = armor.LightArmor.No_Armor;
    Character.equipment.tools.backpack            = _.sample([equipment.EquipmentPacks.DungeoneersPack, equipment.EquipmentPacks.ExplorersPack]);


    r = utils.getRandomNumber( 0 , 1 );
    switch (true) {
    case (r === 0):Character.characterEquipment.additionalWeapons = [_.sample(weapons.SimpleWeapons),weapons.barbWeps.BarbJavelin]
    ;break;
    case (r === 1):Character.characterEquipment.additionalWeapons = [weapons.barbWeps.barbHandaxe,weapons.barbWeps.BarbJavelin]
    ;break;
    default: Character.characterEquipment.additionalWeapons = "Error:Fell though Switch Case"};

  }

  else if (Character.class === "Fighter"){

    Character.characterEquipment.armor              = _.sample([armor.LightArmor.Leather, armor.HeavyArmor.ChainMail]);
    Character.characterEquipment.backpack           = _.sample([equipment.EquipmentPacks.DungeoneersPack, equipment.EquipmentPacks.ExplorersPack]);

    r = utils.getRandomNumber( 0 , 1 );
    switch (true) {
      case (r === 0):Character.characterEquipment.leftHandedWeapon  = _.sample(weapons.MartialMeleeWeapons);
                     Character.characterEquipment.rightHandedWeapon = _.sample(weapons.MartialMeleeWeapons)
                     ;break;
      case (r === 1):Character.characterEquipment.leftHandedWeapon  = _.sample(weapons.MartialMeleeWeapons);
                     Character.characterEquipment.rightHandedWeapon = armor.Shields.Shield
                     ;break;
      default:       Character.characterEquipment.leftHandedWeapon  = "Error: Fell Though Switch Case"};

    if(Character.characterEquipment.armor.Name  === "Leather Armor"){Character.characterEquipment.additionalWeapons = [weapons.MartialRangedWeapons.Longbow];}
      else if (Character.characterEquipment.armor.Name === "Chain Mail"){Character.characterEquipment.additionalWeapons = [weapons.SimpleRangedWeapons.LightCrossbow];}
      else Character.characterEquipment.additionalWeapons = ["None"];

    }

  else if (Character.class === "Cleric"){

    //NEED TO ADD THE FOLLOWING WHEN PROFICIENCIES ADDED
    //  a warhammer (if proficient)
    //  chain mail (if proficient)


    Character.characterEquipment.leftHandedWeapon    = weapons.SimpleWeapons.Mace;
    Character.characterEquipment.rightHandedWeapon   = armor.Shields.Shield;
    Character.characterEquipment.additionalWeapons   = _.sample([weapons.SimpleRangedWeapons.LightCrossbow, _.sample(weapons.SimpleWeapons)]);
    Character.characterEquipment.armor               = _.sample([armor.LightArmor.Leather,armor.MediumArmor.ScaleMail])
    Character.characterEquipment.backpack            = _.sample([equipment.EquipmentPacks.PriestsPack, equipment.EquipmentPacks.ExplorersPack])
    Character.characterEquipment.additionalItems     = _.sample(["Holy Symbol"])
  }
  return Character;
}

// var printCharacterEquipmentPretty = (x) => {
//
//   console.log("----------------"+x.class+"----------------")
//   console.log("----------Character Equipment----------")
//   console.log("")
//   console.log("Left Handed Weapon:  " + x.getLeftWep())
//   console.log("Right Handed Weapon: " + x.getRightWep())
//   console.log("Additional Weapons:  " + x.getAddWep())
//   console.log("Armor: "               + x.getArmor())
//   console.log("Backpack: "            + x.getBackpack())
//   console.log("")
//   console.log("---------------------------------------")
//   return "";
// }

x = buildCharacter()
// console.log(Object.values(x.stats))

// var txtFile = "C:\\Users\\Christopher\\Desktop\\dnd\\" + Math.random() + ".json"; //replace this with some character ref
// var str = JSON.stringify(x, undefined, 2);
// // console.log(JSON.stringify(x, undefined, 2));
// // console.log(str)
//
// fs.writeFile(txtFile, str, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log(`The file was saved as: ${txtFile}`);
// });

// console.log(x.characterEquipment.additionalWeapons.length)
console.log(JSON.stringify(x, undefined, 2))
// console.log(printCharacterEquipmentPretty(x))
