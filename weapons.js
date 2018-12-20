var SimpleWeapons = [

  {Name:"Club", Cost:"1sp", Damage:"1d4 bludgeoning", Weight:"2lb", Properties:"Light"},
  {Name:"Dagger" , Cost:"2gp" , Damage: "1d4 piercing", Weight:"1lb" , Properties:"Finesse, light, thrown (range 20/60)"},
  {Name:"Greatclub" , Cost:"2sp" , Damage: "1d8 bludgeoning	", Weight:"10 lb" , Properties:"Two-handed"},
  {Name:"Handaxe" , Cost:"5gp" , Damage: "1d6 slashing", Weight:"2lb" , Properties:"Light, thrown (range 20/60)"},
  {Name:"Javelin" , Cost:"5sp" , Damage: "1d6 piercing", Weight:"2lb" , Properties:"Thrown (range 30/120)"},
  {Name:"Light Hammer" , Cost:"2gp" , Damage: "1d4 bludgeoning", Weight:"2lb" , Properties:"Light, thrown (range 20/60)"},
  {Name:"Mace" , Cost:"5gp" , Damage: "1d6 bludgeoning", Weight:"4lb" , Properties:""},
  {Name:"Quarterstaff" , Cost:"2sp" , Damage: "1d6 bludgeoning", Weight:"4lb" , Properties:"Versatile (1d8)"},
  {Name:"Sickle" , Cost:"1gp" , Damage: "1d4 slashing", Weight:"2lb" , Properties:"Light"},
  {Name:"Spear" , Cost:"1gp" , Damage: "1d6 piercing", Weight:"3lb" , Properties:"Thrown (range 20/60), versatile (1d8)"}

];

var barbWeps = [

  {Name:"4 x Javelin", Cost:"5sp (each)", Damage:"1d6 piercing (each)", Weight:"2lb (each)" , Properties:"Thrown (range 30/120)"},
  {Name:"2 x Handaxe" ,Cost:"5gp (each)", Damage:"1d6 slashing (each)", Weight:"2lb (each)" , Properties:"Light, thrown (range 20/60)"}

];

var palWeps = [

  {Name:"5 x Javelin", Cost:"5sp (each)", Damage:"1d6 piercing (each)", Weight:"2lb (each)" , Properties:"Thrown (range 30/120)"}

];

var rogueWeps = [

  {Name:"2 x Daggers" , Cost:"2gp (each)" , Damage: "1d4 piercing (each)", Weight:"1lb(each)" , Properties:"Finesse, light, thrown (range 20/60)"}

];

var SimpleRangedWeapons = [

  {Name:"Light Crossbow", Cost:"25 gp",Damage:"1d8 piercing",Weight:"	5 lb",Properties:"	Ammunition (range 80/320), loading, two-handed"},
  {Name:"Dart", Cost:"5 cp",Damage:"1d4 piercing",Weight:"1/4 lb",Properties:"Finesse, thrown (range 20/60)"},
  {Name:"Shortbow", Cost:"25 gp",Damage:"1d6 piercing",Weight:"2 lb",Properties:"Ammunition (range 80/320), two-handed"},
  {Name:"Sling", Cost:"1 sp",Damage:"1d4 bludgeoning",Weight:"-",Properties:"Ammunition (range 30/120)"}

];

var MartialMeleeWeapons = [

 { Name:"Battleaxe",	Cost:"10 gp",	Damage:"1d8 slashing",	Weight:"4 lb",	Properties:"Versatile (1d10)"},
 { Name:"Flail",	Cost:"10 gp",	Damage:"1d8 bludgeoning",	Weight:"2 lb",	Properties:"—"},
 { Name:"Glaive",	Cost:"20 gp",	Damage:"1d10 slashing",	Weight:"6 lb",	Properties:"Heavy, reach, two-handed"},
 { Name:"Greataxe",	Cost:"30 gp",	Damage:"1d12 slashing",	Weight:"7 lb",	Properties:"Heavy, two-handed"},
 { Name:"Greatsword",	Cost:"50 gp",	Damage:"2d6 slashing",	Weight:"6 lb",	Properties:"Heavy, two-handed"},
 { Name:"Halberd",	Cost:"20 gp",	Damage:"1d10 slashing",	Weight:"6 lb",	Properties:"Heavy, reach, two-handed"},
 { Name:"Lance",	Cost:"10 gp",	Damage:"1d12 piercing",	Weight:"6 lb",	Properties:"Reach, special"},
 { Name:"Longsword",	Cost:"15 gp",	Damage:"1d8 slashing",	Weight:"3 lb",	Properties:"Versatile (1d10)"},
 { Name:"Maul",	Cost:"10 gp",	Damage:"2d6 bludgeoning",	Weight:"10 lb",	Properties:"Heavy, two-handed"},
 { Name:"Morningstar",	Cost:"15 gp",	Damage:"1d8 piercing",	Weight:"4 lb",	Properties:"-"},
 { Name:"Pike",	Cost:"5 gp",	Damage:"1d10 piercing",	Weight:"18 lb",	Properties:"Heavy, reach, two-handed"},
 { Name:"Rapier",	Cost:"25 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"Finesse"},
 { Name:"Scimitar",	Cost:"25 gp",	Damage:"1d6 slashing",	Weight:"3 lb",	Properties:"Finesse, light"},
 { Name:"Shortsword",	Cost:"10 gp",	Damage:"1d6 piercing",	Weight:"2 lb",	Properties:"Finesse, light"},
 { Name:"Trident",	Cost:"5 gp",	Damage:"1d6 piercing",	Weight:"4 lb",	Properties:"Thrown (range 20/60), versatile (1d8)"},
 { Name:"War Pick",	Cost:"5 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"—"},
 { Name:"Warhammer",	Cost:"15 gp",	Damage:"1d8 bludgeoning",	Weight:"2 lb",	Properties:"Versatile (1d10)"},
 { Name:"Whip",	Cost:"2 gp",	Damage:"1d4 slashing",	Weight:"3 lb",	Properties:"Finesse, reach"}

];

var MartialRangedWeapons = [

 { Name:"Blowgun",	Cost:"10 gp",	Damage:"1 piercing",	Weight:"1 lb",	Properties:"Ammunition (range 25/100), loading"},
 { Name:"Hand Crossbow",	Cost:"75 gp",	Damage:"1d6 piercing",	Weight:"3 lb", Properties:"Ammunition (range 30/120), light, loading"},
 { Name:"Heavy Crossbow",	Cost:"50 gp",	Damage:"1d10 piercing",	Weight:"18 lb",	Properties:"Ammunition (range 100/400), heavy, loading two-handed"},
 { Name:"Longbow",	Cost:"50 gp",	Damage:"1d8 piercing",	Weight:"2 lb",	Properties:"Ammunition (range 150/600), heavy, two-handed"},
 { Name:"Net",	Cost:"1 gp",	Damage:"—",	Weight:"3 lb",	 Properties:"Special, thrown (range 5/15)"}

];

exports.SimpleWeapons = SimpleWeapons;
exports.barbWeps = barbWeps;
exports.palWeps = palWeps;
exports.rogueWeps = rogueWeps;
exports.SimpleRangedWeapons = SimpleRangedWeapons;
exports.MartialMeleeWeapons = MartialMeleeWeapons;
exports.MartialRangedWeapons = MartialRangedWeapons;
