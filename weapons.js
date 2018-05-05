var SimpleWeapons = {


  Club:{Name:"Club", Cost:"1sp", Damage:"1d4 bludgeoning", Weight:"2lb", Properties:"Light"},
  Dagger:{Name:"Dagger" , Cost:"	2 gp" , Damage: "1d4 piercing", Weight:"1lb" , Properties:"Finesse, light, thrown (range 20/60)"},
  Greatclub:{Name:"Greatclub" , Cost:"2sp" , Damage: "1d8 bludgeoning	", Weight:"10 lb" , Properties:"Two-handed"},
  Handaxe:{Name:"Handaxe" , Cost:"5gp" , Damage: "1d6 slashing", Weight:"2lb" , Properties:"Light, thrown (range 20/60)"},
  Javelin:{Name:"Javelin" , Cost:"5sp" , Damage: "1d6 piercing", Weight:"2lb" , Properties:"Thrown (range 30/120)"},
  LightHammer:{Name:"Light Hammer" , Cost:"2gp" , Damage: "1d4 bludgeoning", Weight:"2lb" , Properties:"Light, thrown (range 20/60)"},
  Mace:{Name:"Mace" , Cost:"5gp" , Damage: "1d6 bludgeoning", Weight:"4lb" , Properties:""},
  Quarterstaff:{Name:"Quarterstaff" , Cost:"2sp" , Damage: "1d6 bludgeoning", Weight:"4lb" , Properties:"Versatile (1d8)"},
  Sickle:{Name:"Sickle" , Cost:"1gp" , Damage: "1d4 slashing", Weight:"2lb" , Properties:"Light"},
  Spear:{Name:"Spear" , Cost:"1gp" , Damage: "1d6 piercing", Weight:"3lb" , Properties:"Thrown (range 20/60), versatile (1d8)"}

}


var SimpleRangedWeapons = {


  LightCrossbow:{Name:"Light Crossbow", Cost:"25 gp",Damage:"1d8 piercing",Weight:"	5 lb",Properties:"	Ammunition (range 80/320), loading, two-handed"},
  Dart:{Name:"Dart", Cost:"5 cp",Damage:"1d4 piercing",Weight:"1/4 lb",Properties:"Finesse, thrown (range 20/60)"},
  Shortbow:{Name:"Shortbow", Cost:"25 gp",Damage:"1d6 piercing",Weight:"2 lb",Properties:"Ammunition (range 80/320), two-handed"},
  Sling:{Name:"Sling", Cost:"1 sp",Damage:"1d4 bludgeoning",Weight:"-",Properties:"Ammunition (range 30/120)"}

}

var MartialMeleeWeapons = {

   Battleaxe :{ Name:"Battleaxe",	Cost:"10 gp",	Damage:"1d8 slashing",	Weight:"4 lb",	Properties:"Versatile (1d10)"},
   Flail :{ Name:"Flail",	Cost:"10 gp",	Damage:"1d8 bludgeoning",	Weight:"2 lb",	Properties:"—"},
   Glaive :{ Name:"Glaive",	Cost:"20 gp",	Damage:"1d10 slashing",	Weight:"6 lb",	Properties:"Heavy, reach, two-handed"},
   Greataxe :{ Name:"Greataxe",	Cost:"30 gp",	Damage:"1d12 slashing",	Weight:"7 lb",	Properties:"Heavy, two-handed"},
   Greatsword :{ Name:"Greatsword",	Cost:"50 gp",	Damage:"2d6 slashing",	Weight:"6 lb",	Properties:"Heavy, two-handed"},
   Halberd :{ Name:"Halberd",	Cost:"20 gp",	Damage:"1d10 slashing",	Weight:"6 lb",	Properties:"Heavy, reach, two-handed"},
   Lance :{ Name:"Lance",	Cost:"10 gp",	Damage:"1d12 piercing",	Weight:"6 lb",	Properties:"Reach, special"},
   Longsword :{ Name:"Longsword",	Cost:"15 gp",	Damage:"1d8 slashing",	Weight:"3 lb",	Properties:"Versatile (1d10)"},
   Maul :{ Name:"Maul",	Cost:"10 gp",	Damage:"2d6 bludgeoning",	Weight:"10 lb",	Properties:"Heavy, two-handed"},
   Morningstar :{ Name:"Morningstar",	Cost:"15 gp",	Damage:"1d8 piercing",	Weight:"4 lb",	Properties:"-"},
   Pike :{ Name:"Pike",	Cost:"5 gp",	Damage:"1d10 piercing",	Weight:"18 lb",	Properties:"Heavy, reach, two-handed"},
   Rapier :{ Name:"Rapier",	Cost:"25 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"Finesse"},
   Scimitar :{ Name:"Scimitar",	Cost:"25 gp",	Damage:"1d6 slashing",	Weight:"3 lb",	Properties:"Finesse, light"},
   Shortsword :{ Name:"Shortsword",	Cost:"10 gp",	Damage:"1d6 piercing",	Weight:"2 lb",	Properties:"Finesse, light"},
   Trident :{ Name:"Trident",	Cost:"5 gp",	Damage:"1d6 piercing",	Weight:"4 lb",	Properties:"Thrown (range 20/60), versatile (1d8)"},
   WarPick :{ Name:"War Pick",	Cost:"5 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"—"},
   Warhammer :{ Name:"Warhammer",	Cost:"15 gp",	Damage:"1d8 bludgeoning",	Weight:"2 lb",	Properties:"Versatile (1d10)"},
   Whip :{ Name:"Whip",	Cost:"2 gp",	Damage:"1d4 slashing",	Weight:"3 lb",	Properties:"Finesse, reach"}

}

var MartialRangedWeapons = {


   Blowgun :{ Name:"Blowgun",	Cost:"10 gp",	Damage:"1 piercing",	Weight:"1 lb",	Properties:"Ammunition (range 25/100), loading"},
   HandCrossbow :{ Name:"Hand Crossbow",	Cost:"75 gp",	Damage:"1d6 piercing",	Weight:"3 lb", Properties:"Ammunition (range 30/120), light, loading"},
   HeavyCrossbow :{ Name:"Heavy Crossbow",	Cost:"50 gp",	Damage:"1d10 piercing",	Weight:"18 lb",	Properties:"Ammunition (range 100/400), heavy, loading two-handed"},
   Longbow :{ Name:"Longbow",	Cost:"50 gp",	Damage:"1d8 piercing	Weight:2 lb",	Properties:"Ammunition (range 150/600), heavy, two-handed"},
   Net :{ Name:"Net",	Cost:"1 gp",	Damage:"—",	Weight:"3 lb",	 Properties:"Special, thrown (range 5/15)"}



}

exports.SimpleWeapons = SimpleWeapons;
exports.SimpleRangedWeapons = SimpleRangedWeapons;
exports.MartialMeleeWeapons = MartialMeleeWeapons;
exports.MartialRangedWeapons = MartialRangedWeapons;
