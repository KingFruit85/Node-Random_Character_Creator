const _ = require ('lodash');


spells = {

bardCantrips = {

  DancingLights:{
    name:"Dancing Lights",
    desc:"You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range.",
    page:"phb 230",
    range:"120 feet",
    components:"V, S, M",
    material:"A bit of phosphorus or wychwood, or a glowworm.",
    ritual:"no",
    duration:"Up to 1 minute",
    concentration:"yes",
    casting_time:"1 action",
    level:"Cantrip",
    school:"Evocation",
    class:"Bard, Sorcerer, Wizard"
  },

  Light:{
    name:"Light",
    desc:"You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a dexterity saving throw to avoid the spell.",
    page:"phb 255",
    range:"Touch",
    components:"V, M",
    material:"A firefly or phosphorescent moss.",
    ritual:"no",
    duration:"1 hour",
    concentration:"no",
    casting_time:"1 action",
    level:"Cantrip",
    school:"Evocation",
    class:"Bard, Cleric, Sorcerer, Wizard"
  },

  MageHand:{
    name:"Mage Hand",
    desc:"A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.The hand can’t attack, activate magic items, or carry more than 10 pounds.",
    page:"phb 256",
    range:"30 feet",
    components:"V, S",
    ritual:"no",
    duration:"1 minute",
    concentration:"no",
    casting_time:"1 action",
    level:"Cantrip",
    school:"Conjuration",
    class:"Bard, Sorcerer, Warlock, Wizard"
  },

  Mending:{
    name:"Mending",
    desc:"This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object.",
    page:"phb 259",
    range:"Touch",
    components:"V, S, M",
    material:"Two lodestones.",
    ritual:"no",
    duration:"Instantaneous",
    concentration:"no",
    casting_time:"1 minute",
    level:"Cantrip",
    school:"Transmutation",
    class:"Cleric, Bard, Druid, Sorcerer, Wizard"
  },

  Message:{
    name:"Message",
    desc:"You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.",
    page:"phb 259",
    range:"120 feet",
    components:"V, S, M",
    material:"A short piece of copper wire.",
    ritual:"no",
    duration:"1 round",
    concentration:"no",
    casting_time:"1 action",
    level:"Cantrip",
    school:"Transmutation",
    class:"Bard, Sorcerer, Wizard"
  },

  MinorIllusion:{
  name:"Minor Illusion",
  desc:"placeholder text",
  page:"phb 260",
  range:"30 feet",
  components:"S, M",
  material:"A bit of fleece.",
  ritual:"no",
  duration:"1 minute",
  concentration:"no",
  casting_time:"1 action",
  level:"Cantrip",
  school:"Illusion",
  class:"Bard, Sorcerer, Warlock, Wizard"
},

Prestidigitation:{
  name:"Prestidigitation",
  desc:"This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within 'range': You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. You instantaneously light or snuff out a candle, a torch, or a small campfire. You instantaneously clean or soil an object no larger than 1 cubic foot. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
  page:"phb 267",
  range:"10 feet",
  components:"V, S",
  ritual:"no",
  duration:"1 hour",
  concentration:"no",
  casting_time:"1 action",
  level:"Cantrip",
  school:"Transmutation",
  class:"Bard, Sorcerer, Warlock, Wizard"
},

TrueStrike:{
  name:"True Strike",
  desc:"You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target’s defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn’t ended.",
  page:"phb 284",
  range:"30 feet",
  components:"S",
  ritual:"no",
  duration:"Up to 1 round",
  concentration:"yes",
  casting_time:"1 action",
  level:"Cantrip",
  school:"Divination",
  class:"Bard, Sorcerer, Warlock, Wizard"
},

ViciousMockery:{
  name:"Vicious Mockery",
  desc:"You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
  page:"phb 285",
  range:"60 feet",
  components:"V",
  ritual:"no",
  duration:"Instantaneous",
  concentration:"no",
  casting_time:"1 action",
  level:"Cantrip",
  school:"Enchantment",
  class:"Bard"
}
}


bardLevel1 = {

  AnimalFriendship:{
    name:"Animal Friendship",
    desc:"This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
    page:"phb 212",
    range:"30 feet",
    components:"V, S, M",
    material:"A morsel of food.",
    ritual:"no",
    duration:"24 hours",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Enchantment",
    class:"Bard, Cleric, Druid, Ranger",
    archetype:"Cleric: Nature",
    domains:"Nature"
  },

  Bane:{
    name:"Bane",
    desc:"Up to three creatures of your choice that you can see within range must make charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    page:"phb 216",
    range:"30 feet",
    components:"V, S, M",
    material:"A drop of blood.",
    ritual:"no",
    duration:"Up to 1 minute",
    concentration:"yes",
    casting_time:"1 action",
    level:"1st-level",
    school:"Enchantment",
    class:"Bard, Cleric, Paladin",
    archetype:"Paladin: Vengeance",
    oaths:"Vengeance"
  },

CharmPerson:{
    name:"Charm Person",
    desc:"You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    page:"phb 221",
    range:"30 feet",
    components:"V, S",
    ritual:"no",
    duration:"1 hour",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Enchantment",
    class:"Bard, Cleric, Druid, Sorcerer, Warlock, Wizard",
    archetype:"Cleric: Trickery",
    domains:"Trickery"
    },

    {
    name:"Comprehend Languages",
    desc:"For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.This spell doesn’t decode secret messages in a text or a glyph, such as an arcane sigil, that isn’t part of a written language.",
    page:"phb 224",
    range:"Self",
    components:"V, S, M",
    material:"A pinch of soot and salt.",
    ritual:"yes",
    duration:"1 hour",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Divination",
    class:"Bard, Ritual Caster, Sorcerer, Warlock, Wizard"
    },

    {
    name:"Cure Wounds",
    desc:"A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
    page:"phb 230",
    range:"Touch",
    components:"V, S",
    ritual:"no",
    duration:"Instantaneous",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Evocation",
    class:"Bard, Cleric, Druid, Paladin, Ranger",
    domains:"Life"
    },

    {
    name:"Detect Magic",
    desc:"For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
    page:"phb 231",
    range:"Self",
    components:"V, S",
    ritual:"yes",
    duration:"Up to 10 minutes",
    concentration:"yes",
    casting_time:"1 action",
    level:"1st-level",
    school:"Divination",
    class:"Bard, Cleric, Druid, Paladin, Ranger, Ritual Caster, Sorcerer, Wizard"
    },

    {
    name:"Disguise Self",
    desc:"Placeholder text",
    page:"phb 233",
    range:"Self",
    components:"V, S",
    ritual:"no",
    duration:"1 hour",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Illusion",
    class:"Bard, Cleric, Sorcerer, Wizard",
    archetype:"Cleric: Trickery",
    domains:"Trickery"
    },

    {
    name:"Faerie Fire",
    desc:"Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible.",
    page:"phb 239",
    range:"60 feet",
    components:"V",
    ritual:"no",
    duration:"Up to 1 minute",
    concentration:"yes",
    casting_time:"1 action",
    level:"1st-level",
    school:"Evocation",
    class:"Bard, Cleric, Druid, Warlock",
    archetype:"Cleric: Light<br/> Warlock: Archfey",
    domains:"Light",
    patrons:"Archfey"
    },

    {
    name:"Feather Fall",
    desc:"Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
    page:"phb 239",
    range:"60 feet",
    components:"V, M",
    material:"A small feather or a piece of down.",
    ritual:"no",
    duration:"1 minute",
    concentration:"no",
    casting_time:"1 reaction",
    level:"1st-level",
    school:"Transmutation",
    class:"Bard, Sorcerer, Wizard"
    },

    {
    name:"Healing Word",
    desc:"A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
    page:"phb 250",
    range:"60 feet",
    components:"V",
    ritual:"no",
    duration:"Instantaneous",
    concentration:"no",
    casting_time:"1 bonus action",
    level:"1st-level",
    school:"Evocation",
    class:"Bard, Cleric, Druid"
    },

    {
    name:"Heroism",
    desc:"A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.",
    page:"phb 250",
    range:"Touch",
    components:"V, S",
    ritual:"no",
    duration:"Up to 1 minute",
    concentration:"yes",
    casting_time:"1 action",
    level:"1st-level",
    school:"Enchantment",
    class:"Bard, Paladin"
    },

    {
     name:"Tasha's Hideous Laughter",
     desc:"A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected. At the end of each of its turns, and each time it takes damage, the target can make another wisdom saving throw. The target had advantage on the saving throw if it’s triggered by damage. On a success, the spell ends.",
     page:"phb 280",
     range:"30 feet",
     components:"V, S, M",
     material:"Tiny tarts and a feather that is waved in the air.",
     ritual:"no",
     duration:"Up to 1 minute",
     concentration:"yes",
     casting_time:"1 action",
     level:"1st-level",
     school:"Enchantment",
     class:"Bard, Warlock, Wizard",
     archetype:"Warlock: Great Old One",
     patrons:"Great Old One"
    },

    {
    name:"Identify",
    desc:"You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
    page:"phb 252",
    range:"Touch",
    components:"V, S, M",
    material:"A pearl worth at least 100gp and an owl feather.",
    ritual:"yes",
    duration:"Instantaneous",
    concentration:"no",
    casting_time:"1 minute",
    level:"1st-level",
    school:"Divination",
    class:"Bard, Cleric, Ritual Caster, Wizard",
    archetype:"Cleric: Knowledge",
    domains:"Knowledge"
    },

    {
    name:"Illusory Script",
    desc:"You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.Should the spell be dispelled, the original script and the illusion both disappear.A creature with truesight can read the hidden message.",
    page:"phb 252",
    range:"Touch",
    components:"S, M",
    material:"A lead-based ink worth at least 10gp, which this spell consumes.",
    ritual:"yes",
    duration:"10 days",
    concentration:"no",
    casting_time:"1 minute",
    level:"1st-level",
    school:"Illusion",
    class:"Bard, Ritual Caster, Warlock, Wizard"
    },

    {
    name:"Longstrider",
    desc:"You touch a creature. The target’s speed increases by 10 feet until the spell ends.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each spell slot above 1st.",
    page:"phb 256",
    range:"Touch",
    components:"V, S, M",
    material:"A pinch of dirt.",
    ritual:"no",
    duration:"1 hour",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Transmutation",
    class:"Bard, Druid, Ranger, Wizard"
    },

    {
    name:"Silent Image",
    desc:"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects.You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
    page:"phb 276",
    range:"60 feet",
    components:"V, S, M",
    material:"A bit of fleece.",
    ritual:"no",
    duration:"Up to 10 minutes",
    concentration:"yes",
    casting_time:"1 action",
    level:"1st-level",
    school:"Illusion",
    class:"Bard, Sorcerer, Wizard"
    },

    {
    name:"Sleep",
    desc:"This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected.Undead and creatures immune to being charmed aren’t affected by this spell.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
    page:"phb 276",
    range:"90 feet",
    components:"V, S, M",
    material:"A pinch of fine sand, rose petals, or a cricket.",
    ritual:"no",
    duration:"1 minute",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Enchantment",
    class:"Bard, Sorcerer, Warlock, Wizard",
    archetype:"Warlock: Archfey",
    patrons:"Archfey"
    },

    {
    name:"Speak with Animals",
    desc:"You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM’s discretion.",
    page:"phb 277",
    range:"Self",
    components:"V, S",
    ritual:"yes",
    duration:"10 minutes",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Divination",
    class:"Bard, Cleric, Druid, Paladin, Ranger, Ritual Caster",
    archetype:"Cleric: Nature<br/> Paladin: Ancients",
    domains:"Nature",
    oaths:"Ancients"
    },

    {
    name:"Thunderwave",
    desc:"A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed.In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet.",
    higher_level:"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    page:"phb 282",
    range:"Self",
    components:"V, S",
    ritual:"no",
    duration:"Instantaneous",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Evocation",
    class:"Bard, Cleric, Druid, Sorcerer, Wizard",
    archetype:"Cleric: Tempest",
    domains:"Tempest"
    },

    {
    name:"Unseen Servant",
    desc:"This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can’t attack. If it drops to 0 hit points, the spell ends.Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wind. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
    page:"phb 284",
    range:"60 feet",
    components:"V, S, M",
    material:"A piece of string and a bit of wood.",
    ritual:"yes",
    duration:"1 hour",
    concentration:"no",
    casting_time:"1 action",
    level:"1st-level",
    school:"Conjuration",
    class:"Bard, Ritual Caster, Warlock, Wizard"
    }

}

}


var char = () => {
  char = {};
  char.name = "Test Name";
  char.age = "33";
  char.cantrips = {};
  char.cantrips = _.sampleSize(bardCantrips, 3);
  char.firstLevelSpells = _.sampleSize(bardLevel1, 4);
  char.spellNames = getSpellNames(char)
  return char
}

var getSpellNames = (char) => {
  spells = {}
  cantripNames = [];
  firstLevelSpellNames = [];

  for (var i = 0; i < char.cantrips.length; i++){
    cantripNames.push(char.cantrips[i].name)
    }

  for (var i = 0; i < char.firstLevelSpells.length; i++){
    firstLevelSpellNames.push(char.firstLevelSpells[i].name)
    }

    spells.cantrips = cantripNames;
    spells.firstLevelSpells = firstLevelSpellNames;

  return spells;
}

var printChar = (char) => {
  charInfo = [];
  charInfo.push("Name: " + char.name);
  charInfo.push("Age: " + char.age);
  charInfo.push("Cantrips: " + getSpellNames(char));
  return charInfo;

}

x = char()
console.log(x.spellNames.cantrips);




















clericCantrips = {
  name:"Guidance",
  name:"Light",
  name:"Mending",
  name:"Resistance",
  name:"Sacred Flame",
  name:"Thaumaturgy"
}

clericLevel1 = {
  name:"Bane",
  name:"Bless",
  name:"Command",
  name:"Create or Destroy Water",
  name:"Cure Wounds",
  name:"Detect Evil and Good",
  name:"Detect Magic",
  name:"Detect Poison and Disease",
  name:"Guiding Bolt",
  name:"Healing Word",
  name:"Inflict Wounds",
  name:"Protection from Evil and Good",
  name:"Purify Food and Drink",
  name:"Sanctuary",
  name:"Shield of Faith"
}


druidCantrips = {
  name:"Guidance",
  name:"Mending",
  name:"ProduceFlame",
  name:"Resistance",
  name:"Shillelagh"
}

druidLevel1 = {
  name:"Charm Person",
  name:"Create Or Destroy Water",
  name:"Cure Wounds",
  name:"Detect Magic",
  name:"Detect Poison And Disease",
  name:"Entangle",
  name:"Faerie Fire",
  name:"Fog Cloud",
  name:"Healing Word",
  name:"Jump",
  name:"Longstrider",
  name:"Purify Food And Drink",
  name:"Speak With Animals",
  name:"Thunderwave"
}

paladinLevel1 = {
  name:"Bless",
  name:"Command",
  name:"Cure Wounds",
  name:"Detect Evil And Good",
  name:"Detect Magic",
  name:"Detect Poison And Disease",
  name:"Divine Favor",
  name:"Heroism",
  name:"Protection From Evil And Good",
  name:"Purify Food And Drink",
  name:"Shield Of Faith"
}


rangerLevel1 = {
  Alarm:"Alarm",
  CureWounds:"Cure Wounds",
  DetectMagic:"Detect Magic",
  DetectPoisonandDisease:"Detect Poison and Disease",
  FogCloud:"Fog Cloud",
  Jump:"Jump",
  Longstrider:"Longstrider",
  SpeakWithAnimals:"Speak with Animals"
}

sorcererCantrips = {
  AcidSplash:"Acid Splash",
  ChillTouch:"Chill Touch",
  DancingLights:"Dancing Lights",
  Light:"Light",
  MageHand:"Mage Hand",
  Mending:"Mending",
  Message:"Message",
  MinorIllusion:"Minor Illusion",
  Prestidigitation:"Prestidigitation",
  RayofFrost:"Ray of Frost",
  ShockingGrasp:"Shocking Grasp",
  TrueStrike:"True Strike"
}

sorcererLevel1 = {
  BurningHands:"Burning Hands",
  CharmPerson:"Charm Person",
  ColorSpray:"Color Spray",
  ComprehendLanguages:"Comprehend Languages",
  DetectMagic:"Detect Magic",
  DisguiseSelf:"Disguise Self",
  ExpeditiousRetreat:"Expeditious Retreat",
  FalseLife:"False Life",
  FeatherFall:"Feather Fall",
  FogCloud:"Fog Cloud",
  Jump:"Jump",
  MageArmor:"Mage Armor",
  MagicMissile:"Magic Missile",
  Shield:"Shield",
  SilentImage:"Silent Image",
  Sleep:"Sleep",
  Thunderwave:"Thunderwave"
}

warlockCantrips = {
  ChillTouch:"Chill Touch",
  MageHand:"Mage Hand",
  MinorIllusion:"Minor Illusion",
  Prestidigitation:"Prestidigitation",
  TrueStrike:"TrueStrike"
}

warlockLevel1 = {
  CharmPerson:"Charm Person",
  ComprehendLanguages:"Comprehend Languages",
  ExpeditiousRetreat:"Expeditious Retreat",
  IllusoryScript:"Illusory Script",
  ProtectionfromEvilandGood:"Protection from Evil and Good",
  UnseenServant:"Unseen Servant"
}

wizardCantrips = {
  AcidSplash:"Acid Splash",
  ChillTouch:"Chill Touch",
  DancingLights:"Dancing Lights",
  Light:"Light",
  MageHand:"Mage Hand",
  Mending:"Mending",
  Message:"Message",
  MinorIllusion:"Minor Illusion",
  Prestidigitation:"Prestidigitation",
  RayofFrost:"Ray of Frost",
  ShockingGrasp:"Shocking Grasp",
  TrueStrike:"True Strike"
}

wizardLevel1 = {
  Alarm:"Alarm",
  BurningHands:"Burning Hands",
  CharmPerson:"Charm Person",
  ColorSpray:"Color Spray",
  ComprehendLanguages:"Comprehend Languages",
  DetectMagic:"Detect Magic",
  DisguiseSelf:"Disguise Self",
  ExpeditiousRetreat:"Expeditious Retreat",
  FalseLife:"False Life",
  FeatherFall:"Feather Fall",
  FloatingDisk:"Floating Disk",
  FogCloud:"Fog Cloud",
  Grease:"Grease",
  HideousLaughter:"Hideous Laughter",
  Identify:"Identify",
  IllusoryScript:"Illusory Script",
  Jump:"Jump",
  Longstrider:"Longstrider",
  MageArmor:"Mage Armor",
  MagicMissile:"Magic Missile",
  ProtectionfromEvilandGood:"Protection from Evil and Good",
  Shield:"Shield",
  SilentImage:"Silent Image",
  Sleep:"Sleep",
  Thunderwave:"Thunderwave",
  UnseenServant:"Unseen Servant"

}

console.log(JSON.stringify(spells))



exports.wizardLevel1 = wizardLevel1;
exports.wizardCantrips = wizardCantrips;
exports.warlockLevel1 = warlockLevel1;
exports.warlockCantrips = warlockCantrips;
exports.sorcererLevel1 = sorcererLevel1;
exports.sorcererCantrips = sorcererCantrips;
exports.rangerLevel1 = rangerLevel1;
exports.paladinLevel1 = paladinLevel1;
exports.druidLevel1 = druidLevel1;
exports.druidCantrips = druidCantrips;
exports.bardCantrips = bardCantrips;
exports.bardLevel1 = bardLevel1;
exports.clericCantrips = clericCantrips;
exports.clericLevel1 = clericLevel1;
