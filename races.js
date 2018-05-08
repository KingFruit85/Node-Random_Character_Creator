var race=["Human","Dwarf","Elf","Gnome","Halfling","Dragonborn","HalfElf","HalfOrc","Tiefling"];
// var race=["Dragonborn"]; //testing.


var sex=["Male","Female","Non-Binary"];

var alignment=["Lawful Good"," Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral"," Lawful Evil","Neutral Evil","Chaotic Evil"];

var dwarfHeight=["4ft 0in","4ft 1in","4ft 2in","4ft 3in","4ft 4v","4ft 5in","4ft 6in","4ft 7in","4ft 8in","4ft 9in","4ft 10in","4ft 11in","5ft"];

var humanElfHeight=["4ft 11in","5ft","5ft 1in","5ft 2in","5ft 3in","5ft 4in","5ft 5in","5ft 6in","5ft 7in","5ft 8in","5ft 9in","5ft 10in","5ft 11in"
                  ,"6ft","6ft 1in","6ft 2in","6ft 3in","6ft 4in","6ft 5in","6ft 6in","6ft 7in","6ft 8in","6ft 9in","6ft 10in","6ft 11in","7ft"];

var gnomeHeight=["3ft 0in","3ft 1in","3ft 2in", "3ft 3in","3ft 4in","3ft 5in", "3ft 6in", "3ft 7in", "3ft 8in", "3ft 9in", "3ft 10in", "3ft 11in","4ft"];

var halflingHeight=["2ft 5in","2ft 6 in", "2ft 7in","2ft 8in", "2ft 9in", "2ft 10in", "2ft 11in","3ft","3ft 1in","3ft 2in","3ft 3 in","3ft 4in","3ft 5in"];

var dragonbornHeight = ["6ft","6ft 1in","6ft 2in","6ft 3in","6ft 4in","6ft 5in","6ft 6in","6ft 7in","6ft 8in","6ft 9in","6ft 10in","6ft 11in","7ft","7ft 1in"
                        ,"7ft 2in","7ft 3in","7ft 3in","7ft 5in", "7ft 6in","7ft 7in","7ft 8in","7ft 9in","8ft"];

var dragonbornColour = ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"];

var halforcHeight = ["5ft","5ft 1in","5ft 2in","5ft 3in","5ft 4in","5ft 5in","5ft 6in","5ft 7in","5ft 8in","5ft 9in","5ft 10in","5ft 11in"
                  ,"6ft","6ft 1in","6ft 2in","6ft 3in","6ft 4in","6ft 5in","6ft 6in","6ft 7in","6ft 8in","6ft 9in","6ft 10in","6ft 11in","7ft"]

var Dwarf ={
  Size:"Medium",
  Speed:25,
  Weight: null,
  Languages:["Dwarvish"],
  ExtraLanguage:["Common"],
  ToolProficiency:null //ranomise

}
var Human ={
  Speed:30,
  Weight: null,
  Languages:["Common"],
  ExtraLanguage:["Abyssal","Aquan","Auran","Celestial","Deep Speech","Draconic","Dwarvish","Elvish",
                "Giant","Gnomish","Goblin","Gnoll","Halfling","Ignan","Infernal","Orc","Primordial",
                "Sylvan","Terran","Undercommon"]
}

var Elf = {
  Speed:30,
  Weight: null,
  Languages:["Elvish"],
  ExtraLanguage:["Common"]
}

var Gnome = {
  Speed:25,
  Weight: null,
  Languages:["Gnomish"],
  ExtraLanguage:["Common"],
  classFeatures:["Gnome Cunning"]
}

var Halfling = {
  Speed:25,
  Weight: null,
  Languages:["Halfling"],
  ExtraLanguage:["Common"]
}

var Dragonborn = {
  Speed:30,
  Weight: null,
  Languages:["Draconic"],
  ExtraLanguage:["Common"],
  Colour:null
}

var HalfElf = {
  Speed:30,
  Weight: null,
  Languages:["Common","Elvish"],
  ExtraLanguage:["Abyssal","Aquan","Auran","Celestial","Deep Speech","Draconic","Dwarvish","Elvish",
                "Giant","Gnomish","Goblin","Gnoll","Halfling","Ignan","Infernal","Orc","Primordial",
                "Sylvan","Terran","Undercommon"]
}

var HalfOrc = {
  Speed:30,
  Weight: null,
  Languages:["Orcish"],
  ExtraLanguage:["Common"]
}

var Tiefling = {
  Speed:30,
  Weight: null,
  Languages:["Common"],
  ExtraLanguage:["Infernal"]
}

var humanMaleNames=["Noah", "Anlow", "Dato","Arando", "Bram", "Cale", "Dalkon", "Daylen",
                    "Dodd", "Dungarth", "Dyrk", "Durden", "Eandro", "Falken", "Feck",
                    "Fenton", "Gryphero", "Hagar", "Jeras", "Krynt", "Lavant",
                    "Leyten", "Madian", "Malfier", "Markus", "Meklan", "Namen",
                    "Navaren", "Nerle", "Nilus", "Ningyan", "Norris", "Quentin",
                    "Semil", "Sevenson", "Steveren", "Talfen", "Tamond", "Taran",
                    "Tavon", "Tegan", "Vanan", "Vincent","Noah"];

var humanFemaleNames=["Natalia", "Magda","Azura","Brey", "Hallan", "Kasaki", "Lorelei", "Mirabel", "Pharana", "Remora",
                      "Rosalyn", "Sachil", "Saidi", "Tanika", "Tura", "Tylsa", "Vencia", "Xandrilla"];

var humanLastNames=["Araniseli","Arkalis", "Armanci", "Bilger", "Blackstrand", "Brightwater", "Carnavon", "Caskajaro", "Coldshore",
                    "Coyle", "Cresthill", "Cuttlescar", "Daargen", "Dalicarlia", "Danamark", "Donoghan", "Drumwind",
                    "Dunhall", "Ereghast", "Falck", "Fallenbridge", "Faringray", "Fletcher", "Fryft", "Goldrudder",
                    "Grantham", "Graylock", "Gullscream", "Hindergrass", "Iscalon", "Kreel", "Kroft", "Lamoth", "Leerstrom",
                    "Lynchfield", "Moonridge", "Netheridge", "Oakenheart", "Pyncion", "Ratley", "Redraven", "Revenmar",
                    "Roxley", "Sell", "Seratolva", "Shanks", "Shattermast", "Shaulfer", "Silvergraft", "Stavenger",
                    "Stormchapel", "Strong", "Swiller", "Talandro" , "Targana", "Towerfall", "Umbermoor", "Van Devries",
                    "Van Gandt", "Van Hyden", "Varcona", "Varzand", "Voortham", "Vrye", "Webb", "Welfer", "Wilxes", "Wintermere",
                    "Wygarthe", "Zatchet", "Zethergyll", "Weavers", "Plume"];

var dwarfMaleNames=["Frûity","Kurzan", "HarryBack","Swagger","Agaro", "Arnan", "Auxlan", "Avamir", "Baelnar", "Balfam", "Bariken", "Borkûl", "Darkûl", "Dolmen", "Dyrnar", "Erag", "Ezegan", "Ferrek",
                    "Garmûl", "Glint", "Ghorvas", "Grimmalk", "Haeltar", "Halagmar", "Halzar", "Hlant", "Korlag", "Krag", "Krim", "Kurman", "Lurtrum",
                    "Malagar", "Mardam", "Maulnar", "Melgar", "Morak", "Orobok", "Rogath", "Roken", "Rozag", "Sabakzar", "Sharak", "Smethykk", "Swargar",
                    "Thorbalt", "Thorin", "Tredigar", "Vabûl", "Vistrum", "Wolvar"];


var dwarfFemaleNames=["Beyla", "Fenryl", "Grenenzel", "Krystolari", "Lokara", "Lurka", "Marnia", "Praxana", "Rokel", "Roksana", "Thurlfara", "Vauldra",
                      "Veklani", "Vronwe", "Zebel"];

var dwarfLastNames=["Ambershard", "Barrelhelm", "Copperhearth", "Deepmiddens", "Drakantal", "Evermead", "Garkalan", "Grimtor", "Hackshield",
                    "Irongull", "Markolak", "Ramcrown", "Rockharvest", "Silvertarn", "Skandalor", "Zarkanan","Boatmurdered"];


var elfMaleNames=["Alarcion", "Alathar", "Ariandar", "Arromar", "Borel", "Bvachan", "Carydion", "Elgoth", "Farlien", "Ferel", "Gaerlan", "Iafalior", "Kaelthorn", "Laethan",
                    "Leliar", "Leodor", "Lorak", "Lorifir", "Morian", "Oleran", "Rylef", "Savian", "Seylas", "Tevior", "Veyas"];

var elfFemaleNames=["Zifa","Aryllan", "Atalya", "Ayrthwil", "Irva", "Lyfalia", "Ronefel", "Thirya", "Velene", "Venefiq", "Zereni"];

var elfLastNames=["Abildgaard", "Autumnloft", "Balefrost", "Briarfell", "Evenwind", "Graytrails", "Mooncairn", "Riverwall", "Stormwolf", "Summergale", "Sunshadow", "Woodenhawk"];

var gnomeMaleNames=["Masquerade","Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri",
                    "Warryn", "Wrenn", "Zook"];
var gnomeFemaleNames = ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn",
                        "Shamil", "Tana", "Waywocket", "Zanna"];
var gnomeLastNames = ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen", "Aleslosh", "Ashhearth", "Badger", "Cloak", "Doublelock", "Filchbatter",
                      "Fnipper", "Ku", "Nim", "Oneshoe", "Pock", "Sparklegem", "Stumbleduck"];

var halflingMaleNames = ["Quozu","Uriry","Uriser","Kasry","Neeon","Erder","Osser","Yenwrick","Orivias","Elyver"];
var halflingFemaleNames = ["Lecey","Isacaryn","Eielle","Rosree","Nedola","Nedbyn","Idasica","Oraola","Fenyola","Xiree"];
var halflingLastNames = ["Banks","Gamgee","Noakes","Boffin","Gammidge","Oldbuck","Bolger","Gardner","Proudfoot",
                         "Bolger-Baggins","Gaukrogers","Puddifoot","Bracegirdle","Goldworthy","Sackville"];
var dragonbornMaleNames=["Arskan","Tazwarum","Goraxiros","Wulrinn","Tazjhan","Lumidaar","Brenythas","Trouprax","Wulciar","Marturim"];
var dragonbornFemaleNames=["Malpora","Subis","Naxora","Ushibirith","Lilovayla","Surina","Vyrarann","Bilarys","Aridrish","Perliann"];
var dragonbornLastNames=["Clethtinthiallor", "Daardendria", "Crushfacen", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon",
                         "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir",
                         "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"];
var halforcMaleNames=["Chiller","Orurth","Urthutar","Garod","Lumaburk","Bradall","Horig","Rekurash","Renatar","Grimebur","Ogueg"];
var halforcFemaleNames=["Kutenur","Senizi","Roharal","Katonar","Gajemi","Rashizar","Tamener","Brutir","Ekagu","Zenoda"];
var halforcLastName=["Thunderfist","At'Tak","Crushface","Hammerfall","Stoneedge","Fireborn","MukMuk", "Hellfury","Laughingdrums","Gravedrums","Sharphammer"];

var tieflingMaleNames=["Izanagi", "Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai"];
var tieflingFemaleNames=["Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta"];
var tieflingLastNames=["Art", "Carrion", "Chant", "Creed", "Despair", "Excellence", "Fear", "Glory", "Hope", "Ideal", "Music", "Nowhere", "Open", "Poetry", "Quest", "Random", "Reverence", "Sorrow", "Temerity", "Torment", "Weary"];




exports.race = race;
exports.humanMaleNames = humanMaleNames;
exports.humanFemaleNames = humanFemaleNames;
exports.humanLastNames = humanLastNames;
exports.dwarfMaleNames = dwarfMaleNames;
exports.dwarfFemaleNames = dwarfFemaleNames;
exports.dwarfLastNames = dwarfLastNames;
exports.gnomeMaleNames = gnomeMaleNames;
exports.gnomeFemaleNames = gnomeFemaleNames;
exports.gnomeLastNames = gnomeLastNames;
exports.sex = sex;
exports.alignment = alignment;
exports.elfMaleNames = elfMaleNames;
exports.elfFemaleNames = elfFemaleNames;
exports.elfLastNames = elfLastNames;
exports.Dwarf = Dwarf;
exports.Human = Human;
exports.Elf = Elf;
exports.Gnome = Gnome;
exports.Halfling = Halfling;
exports.halflingHeight = halflingHeight;
exports.halflingMaleNames = halflingMaleNames;
exports.halflingFemaleNames = halflingFemaleNames;
exports.halflingLastNames = halflingLastNames;
exports.Dragonborn = Dragonborn;
exports.dragonbornMaleNames = dragonbornMaleNames;
exports.dragonbornFemaleNames = dragonbornFemaleNames;
exports.dragonbornLastNames = dragonbornLastNames;
exports.HalfElf = HalfElf;
exports.HalfOrc = HalfOrc;
exports.halforcMaleNames = halforcMaleNames;
exports.halforcFemaleNames = halforcFemaleNames;
exports.halforcLastName = halforcLastName;
exports.Tiefling = Tiefling;
exports.tieflingMaleNames = tieflingMaleNames;
exports.tieflingFemaleNames = tieflingFemaleNames;
exports.tieflingLastNames = tieflingLastNames;
exports.dwarfHeight = dwarfHeight;
exports.humanElfHeight = humanElfHeight;
exports.gnomeHeight = gnomeHeight;
exports.halflingHeight = halflingHeight;
exports.dragonbornHeight = dragonbornHeight;
exports.dragonbornColour = dragonbornColour;
exports.halforcHeight = halforcHeight;
