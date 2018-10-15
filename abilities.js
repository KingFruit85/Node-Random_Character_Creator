var rage = 'Rage\n\
In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action\n\
While raging, you gain the following benefits if you aren’t wearing heavy armor:\n\
You have advantage on Strength checks and Strength saving throws.\n\
When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.\n\
You have resistance to bludgeoning, piercing, and slashing damage.\n\
If you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\
Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\n\
Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.'

var unarmored_defense = 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'

var spellcasting = 'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music.\n\
Your spells are part of your vast repertoire, magic that you can tune to different situations.'

var ritual_casting = 'You can cast any bard spell you know as a ritual if that spell has the ritual tag.'

var bardic_inspiration = 'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\n\
Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\n\
You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\n\
Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'

var second_wind = 'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.'

var archery = "You gain a +2 bonus to attack rolls you make with ranged weapons."
var defense = "While you are wearing armor, you gain a +1 bonus to AC."
var dueling = "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
var great_weapon_fighting = "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
var protection = "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
var two_weapon_fighting = "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."

var disciple_of_life = "The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community."

var druidic = "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic."
var martial_arts = "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two- handed or heavy property.\n\
You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:\n\
You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\n\
You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.\n\
When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.\n\
Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."

var divine_sense = "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.\n\
You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
var lay_on_hands = "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.\n\
As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\n\
Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\n\
This feature has no effect on undead and constructs."

var favored_enemy = "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\n\
Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\n\
You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\n\
When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\n\
You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."

var natural_explorer = "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.\n\
While traveling for an hour or more in your favored terrain, you gain the following benefits:\n\
Difficult terrain doesn’t slow your group’s travel.\n\
Your group can’t become lost except by magical means.\n\
Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\n\
If you are traveling alone, you can move stealthily at a normal pace.\n\
When you forage, you find twice as much food as you normally would.\n\
While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.\n\
You choose additional favored terrain types at 6th and 10th level."

var expertise = "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\
At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit."
var sneak_attack = "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\n\
You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.\n\
The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
var thieves_cant = "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\n\
In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."

var sorcerous_origin = "Choose a sorcerous origin, which describes the source of your innate magical power.\n\
Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.\n\
The draconic bloodline is the only origin released by Wizards of the Coast as Open Game Content but there are other options available from other publishers (listed below)."

var otherworldly_patron = "At 1st level, you have struck a bargain with an otherworldly being of your choice. Only details for the Fiend were released as Open Game Content by Wizards of the Coast. Additional options are listed below.\n\
Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.\n\
The beings that serve as patrons for warlocks are mighty inhabitants of other planes of existence—not gods, but almost godlike in their power. Various patrons give their warlocks access to different powers and invocations, and expect significant favors in return. Some patrons collect warlocks, doling out mystic knowledge relatively freely or boasting of their ability to bind mortals to their will. Other patrons bestow their power only grudgingly, and might make a pact with only one warlock. Warlocks who serve the same patron might view each other as allies, siblings, or rivals."
var pact_magic = "Your arcane research and the magic bestowed on you by your patron have given you facility with spells."

var arcane_recovery = "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\n\
For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."

exports.rage = rage;
exports.unarmored_defense = unarmored_defense;
exports.spellcasting = spellcasting;
exports.ritual_casting = ritual_casting;
exports.bardic_inspiration = bardic_inspiration;
exports.second_wind = second_wind;
exports.archery = archery;
exports.defense = defense;
exports.dueling = dueling;
exports.great_weapon_fighting = great_weapon_fighting;
exports.protection = protection;
exports.two_weapon_fighting = two_weapon_fighting;
exports.disciple_of_life = disciple_of_life;
exports.druidic = druidic;
exports.martial_arts = martial_arts;
exports.divine_sense =  divine_sense;
exports.lay_on_hands = lay_on_hands;
exports.favored_enemy = favored_enemy;
exports.natural_explorer = natural_explorer;
exports.expertise = expertise;
exports.sneak_attack = sneak_attack;
exports.thieves_cant = thieves_cant;
exports.sorcerous_origin = sorcerous_origin;
exports.otherworldly_patron = otherworldly_patron;
exports.pact_magic = pact_magic;
exports.arcane_recovery = arcane_recovery;
