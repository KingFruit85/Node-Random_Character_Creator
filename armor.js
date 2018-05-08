  var LightArmor = {
    No_Armor:{Name:"No Armor"},
  	Padded:{Name:"Padded Armor",Cost:"5gp", ArmorClass:"11 + DEX", StrengthRequirement: "", Stealth:"Disadvantage", Weight:"8lb"},
  	Leather:{Name:"Leather Armor",Cost:"10 gp", ArmorClass:"11 + DEX", Weight:"10lb"},
  	StuddedLeather:{Name:"Studded Leather Armor",Cost:"45 gp", ArmorClass:"12 + DEX", StrengthRequirement: "", Stealth:"", Weight:"13lb"}
  }

var  MediumArmor = {

  	Hide:{Name:"Hide Armor", Cost:"10gp", ArmorClass:"12 + DEX(Max 2)", StrengthRequirement: "", Stealth:"", Weight:"12lb"},
  	ChainShirt:{Name:"Chain Shirt",Cost:"50gp", ArmorClass:"13 + DEX(max 2)", StrengthRequirement: "", Stealth:"", Weight:"20lb"},
  	ScaleMail:{Name:"Scale Mail",Cost:"50gp", ArmorClass:"14 + DEX(max 2)", StrengthRequirement: "", Stealth:"Disadvantage", Weight:"45lb"},
  	Breastplate:{Name:"Breastplate",Cost:"400gp", ArmorClass:"15 + DEX(max 2)", StrengthRequirement: "", Stealth:"Disadvantage", Weight:"40lb"},
  	HalfPlate:{Name:"HalfPlate",Cost:"750gp", ArmorClass:"11 + DEX", StrengthRequirement: "", Stealth:"", Weight:"8lb"}
  }

var HeavyArmor = {

  	RingMail:{Name:"Ring Mail", Cost:"30 gp", ArmorClass:"14", StrengthRequirement: "—", Stealth:"Disadvantage", Weight:"40 lb"},
  	ChainMail:{Name:"Chain Mail", Cost:"75 gp", ArmorClass:"16", StrengthRequirement: "STR 13", Stealth:"Disadvantage", Weight:"55 lb"},
  	Splint:{Name:"Splint Mail", Cost:"200 gp", ArmorClass:"17", StrengthRequirement: "STR 15", Stealth:"Disadvantage", Weight:"60 lb"},
  	Plate:{Name:"Plate Mail", Cost:"1500 gp", ArmorClass:"18", StrengthRequirement: "STR 15", Stealth:"Disadvantage", Weight:"65 lb"},

  }

  var Shields = {
    Shield:{Name:"Shield", Cost:"10gp"}

  };

  	// Shield:{Name:"Shield", Cost:"10 gp", ArmorClass:"+2",StrengthRequirement:"",Stealth:"",Weight:"6 lb"}




exports.LightArmor =  LightArmor;
exports.MediumArmor = MediumArmor;
exports.HeavyArmor = HeavyArmor;
exports.Shields = Shields;
