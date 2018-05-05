
const utils =require('./utils.js');



// bardCantrips:["Dancing Lights", "Light", "Mage Hand", "Mending", "Message",
//                   "Minor Illusion", "Prestidigitation", "True Strike", "Vicious Mockery" ],

bardCantrips = {
    DancingLights:"Dancing Lights",
    Light:"Light",
    MageHand:"Mage Hand",
    Mending:"Mending",
    Message:"Message",
    MinorIllusion:"Minor Illusion",
    Prestidigitation:"Prestidigitation",
    TrueStrike:"True Strike",
    ViciousMockery:"Vicious Mockery"
}

bardLevel1 = {
    AnimalFriendship:"Animal Friendship",
    Bane:"Bane",
    CharmPerson:"Charm Person",
    ComprehendLanguages:"Comprehend Languages",
    CureWounds:"Cure Wounds",
    DetectMagic:"Detect Magic",
    DisguiseSelf:"Disguise Self",
    FaerieFire:"Faerie Fire",
    FeatherFall:"Feather Fall",
    HealingWord:"Healing Word",
    Heroism:"Heroism",
    HideousLaughter:"Hideous Laughter",
    Identify:"Identify",
    IllusoryScript:"Illusory Script",
    Longstrider:"Longstrider",
    SilentImage:"Silent Image",
    Sleep:"Sleep",
    SpeakwithAnimals:"Speak with Animals",
    Thunderwave:"Thunderwave",
    UnseenServant:"Unseen Servant"
  }

clericCantrips = {
  Guidance:"Guidance",
  Light:"Light",
  Mending:"Mending",
  Resistance:"Resistance",
  SacredFlame:"Sacred Flame",
  Thaumaturgy:"Thaumaturgy"
}

clericLevel1 = {
  Bane:"Bane",
  Bless:"Bless",
  Command:"Command",
  CreateorDestroyWater:"Create or Destroy Water",
  CureWounds:"Cure Wounds",
  DetectEvilandGood:"Detect Evil and Good",
  DetectMagic:"Detect Magic",
  DetectPoisonandDisease:"Detect Poison and Disease",
  GuidingBolt:"Guiding Bolt",
  HealingWord:"Healing Word",
  InflictWounds:"Inflict Wounds",
  ProtectionfromEvilandGood:"Protection from Evil and Good",
  PurifyFoodandDrink:"Purify Food and Drink",
  Sanctuary:"Sanctuary",
  ShieldofFaith:"Shield of Faith"
}


// bardLevel1:["Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds",
//                 "Detect Magic", "Disguise Self", "Faerie Fire", "Feather Fall", "Healing Word",
//                 "Heroism", "Hideous Laughter", "Identify", "Illusory Script", "Longstrider",
//                 "Silent Image", "Sleep", "Speak with Animals", "Thunderwave", "Unseen Servant" ]

exports.bardCantrips = bardCantrips;
exports.bardLevel1 = bardLevel1;
exports.clericCantrips = clericCantrips;
exports.clericLevel1 = clericLevel1;
