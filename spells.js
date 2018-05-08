
const utils =require('./utils.js');

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



druidCantrips = {
  Guidance:"Guidance",
  Mending:"Mending",
  ProduceFlame:"ProduceFlame",
  Resistance:"Resistance",
  Shillelagh:"Shillelagh"
}

druidLevel1 = {
  CharmPerson:"Charm Person",
  CreateOrDestroyWater:"Create Or Destroy Water",
  CureWounds:"Cure Wounds",
  DetectMagic:"Detect Magic",
  DetectPoisonandDisease:"Detect Poison And Disease",
  Entangle:"Entangle",
  FaerieFire:"Faerie Fire",
  FogCloud:"Fog Cloud",
  HealingWord:"Healing Word",
  Jump:"Jump",
  Longstrider:"Longstrider",
  PurifyFoodandDrink:"Purify Food And Drink",
  SpeakWithAnimals:"Speak With Animals",
  Thunderwave:"Thunderwave"
}

paladinLevel1 = {
  Bless:"Bless",
  Command:"Command",
  CureWounds:"Cure Wounds",
  DetectEvilAndGood:"Detect Evil And Good",
  DetectMagic:"Detect Magic",
  DetectPoisonAndDisease:"Detect Poison And Disease",
  DivineFavor:"Divine Favor",
  Heroism:"Heroism",
  ProtectionFromEvilAndGood:"Protection From Evil And Good",
  PurifyFoodAndDrink:"Purify Food And Drink",
  ShieldOfFaith:"Shield Of Faith"
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
