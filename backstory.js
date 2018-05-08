
//import 3rd party
const _ = require ('lodash');
//import my files
const races =require('./races.js');
const utils =require('./utils.js');

var buildings = [
"Abbatoir",
"Barn",
"Chicken coop",
"Cow-shed",
"Farmhouse",
"Granary, Hórreo",
"Greenhouse",
"Hayloft",
"Pigpen",
"Root cellar",
"Shed",
"Silo",
"Slaughterhouse",
"Stable",
"Storm cellar",
"Well house",
"Crib",
"Windmill",
"Bakery",
"Beauty salon",
"Bookshop",
"Clinic",
"Community hall",
"Department store",
"Eatery",
"Inn",
"Floristry",
"Folly",
"Food court",
"Gym",
"Hospice",
"Hospital",
"Mini market",
"Office building",
"Pizzeria",
"Plant nursery",
"Pub",
"Bathhouse",
"Stall",
"Sport club",
"Bar",
"Wet market",
"Workshop"
]

var animals = [
  "Bison",
  "Bison",
  "Eagle",
  "Pony",
  "Ape",
  "Lobster",
  "Monkey",
  "Cow",
  "Deer",
  "Horse",
  "Dog",
  "Goat",
  "Pig",
  "Sheep",
  "Cat",
  "Chicken",
  "Duck",
  "Dove",
  "Rabbit",
  "Mice",
  "Rat",
  "Deer",
  "Bat"

]

var things = [
  "flowers",
  "puddles",
  "stale bread",
  "chalk",
  "soap",
  "Rocks",
  "money",
  "Milk",
  "rusty nails"
]

var food = [
  "black beans",
  "pinto beans",
  "kidney beans",
  "sun-dried tomatoes",
  "tuna",
  "salmon",
  "minced clams",
  "sugar",
  "milk",
  "chicken",
  "beef",
  "turkey",
  "pork",
  "bacon",
  "carrots",
  "melons",
  "apple sauce",
  "avocado",
  "duck hearts",
  "apples"
]

var state = [
  "old",
  "fresh",
  "mouldy",
  "rotten",
  "dried",
  "vegan",
  "ripe",
  "unripened",
  "perished",
  "soiled",
  "raw",
  "over cooked",
  "under cooked",
  "tart",
  "tangy",
  "sour",
  "sweet",
  "thrice cooked",
  "fermented",
  "par-boiled",
  "distiled",
  "bloody",
  "reduced",
  "cream of"
]

var counts = [
  "a single",
  "a group of",
  "a wild pack of",
  "a domesticated herd of",
  "an army of",
  "a squad of",
  "a scouting party of",
  "excatly 100",
]

var mentalState = [
  "Mad",
  "Sane",
  "Scared",
  "Angry",
  "Frightend",
  "Upset",
  "Calm",
  "Possessed",
  "Ghost",
  "Crawling",
  "Slow moving",
  "Rabid",
  "Insane",
  "Hungry",
  "Bored",
  "Depressed"
]

var feeling = [
  "love",
  "hate",
  "dispise",
  "couldn't care less about",
  "lust after",
  "fear",
]


var life = () => {
  const r = utils.getRandomNumber(1,23); //picks a random number between 1 - 23
  switch (true){ //selects a case based of the value of “r”
    case r === 1: return "You grew up in a farming village where you tended " + _.sample(animals) + "s and " + _.sample(animals)+"s";
    case r === 2: return "You were rased in a cult, believing you alone have the power to stop the prophecy coming true...";
    case r === 3: return "You didn't see the light of day until you were " + utils.getRandomNumber(1, 10); + "years old";
    case r === 4: return "You were abandoned at birth by your parents and fended for youself on the streets";
    case r === 5: return "You were rased in a now disgrased noble family and are trying to reclaim your previous status";
    case r === 6: return "You were a divine birth conceived between lesser Gods and Demons, abandoned at birth you have been seeking out your parents";
    case r === 7: return "You were raised in a perfectly stable family that was wiped out by " + _.sample(mentalState) + " " + _.sample(animals)+"s";
    case r === 8: return "You were dropped on your head as a child, ever since then you believe you can speak to " + _.sample(animals) +"s";
    case r === 9: return "You and your siblings learnt to speak backwards perfectly as children to pass each other secret messages";
    case r === 10: return "After a freak wizard accident you permanently lost all hair over your body";
    case r === 11: return "You were hit in the head recently and lost all your memories, you now believe you are an extremly elderly member of the oposite sex";
    case r === 12: return "You were raised in a " + _.sample(buildings) + " where you became addicted to " + _.sample(state) + " " + _.sample(food);
    case r === 13: return "You grew up in a " + _.sample(buildings) + ", and you only friend was a " + _.sample(mentalState) + " " + _.sample(animals);
    case r === 14: return "You grew up poor and shunned by others. In your adolescence you joined a street gang, after a failed robbery you had a bounty placed on your head and had to flee";
    case r === 15: return "Your life has been spent cheating death, trouble seems to find you around every corner";
    case r === 16: return "You grew up in magical floating city despite not believing in magic";
    case r === 17: return "You were sold into slavery at a young age. You grew up in the slave pits, fighting for the amusement of others. During your final fight you blacked out after receiving a mortal wound and woke up fully healed in a " + _.sample(buildings);
    case r === 18: return "You grew up in a haunted castle and due to your experiences there you are now downright racist to living skeletons";
    case r === 19: return "You grew up in a boarding school for middle class wizards who you did not care for at all";
    case r === 20: return "You took a vow of non-silence when you were " + utils.getRandomNumber(1, 15); +  "years old and constantly make some sort of noise";
    case r === 21: return "Your life has been a cruel collection of practical jokes made at your expense. You finally snapped one day and do not speak about what happened to anyone";
    case r === 22: return "You were abandoned at birth and grew up in a scary forest cared for by " + _.sample(animals) + "s";
    case r === 23: return "Your best friend growing up convinced you that the world had a solid gold core. You are always hatching schemes to claim the gold core for your own";

  }

}

var likes = () => {
  const r = utils.getRandomNumber(1,23);
  switch (true){
    case r === 1: return ". You love the smell of " + _.sample(things);
    case r === 2: return ". You are addicted to " + _.sample(animals) + " milk";
    case r === 3: return ". You collect various preserves";
    case r === 4: return ". You love "+ _.sample(races.race) + " chocolate";
    case r === 5: return ". You love " + _.sample(races.race) + " honey";
    case r === 6: return ". You are very proud of your body and like to wear as little clothes as possible when appropriate";
    case r === 7: return ". You love a " + _.sample(state)+ " " + _.sample(food);
    case r === 8: return ". You do not eat meat of any kind";
    case r === 9: return ". You love to collect " + _.sample(animals) + " figurines";
    case r === 10: return ". You "+ _.sample(feeling)+ " the elderly";
    case r === 11: return". You love skinny dipping";
    case r === 12: return". You love music and often hum popular songs out loud";
    case r === 13: return". You love trying new foods";
    case r === 14: return". You love to suck on smooth stones";
    case r === 15: return". You like to chew hay";
    case r === 16: return". You enjoy the elegance of " + _.sample(animals)+"s";
    case r === 17: return". You like to learn about other cultures";
    case r === 18: return". You love cracking your knuckles";
    case r === 19: return". You are very impressed with your ability to cartwheel and like to show off in public places";
    case r === 20: return". You love to paint";
    case r === 21: return". You love to express your feelings though the medium of dance";
    case r === 22: return". You love to read trashy romance novels";
    case r === 23: return". You like to compliment people on their fashion sense";

}
}

var dislikes = () => {
  const r = utils.getRandomNumber(1,20);
  switch (true){
    case r === 1: return " and think the elderly are useless";
    case r === 2: return " and cannot stand the darkness";
    case r === 3: return " and cannot stand the light of day";
    case r === 4: return " and hate small talk";
    case r === 5: return " and you "+ _.sample(feeling)+ " " + _.sample(animals) +"s";
    case r === 6: return " and dislike getting up in the morning";
    case r === 7: return " and avoid eye contact with people smaller than you at all costs";
    case r === 8: return " and hate anyone taller than you ";
    case r === 9: return " and are terrified by any building with more than one floor";
    case r === 10: return " and are mortal enemies with a badger named Gary";
    case r === 11: return " and you can't stand children";
    case r === 12: return " and you can't be bothered to remember people’s names";
    case r === 13: return " and if you see someone yawning you will attempt to cover their mouths for them";
    case r === 14: return " but can't stand the homeless";
    case r === 15: return " and you hate any sweet foods";
    case r === 16: return " and think "+ _.sample(things) + " are pointless";
    case r === 17: return " and can't stand the sight of " + _.sample(buildings) + "s";
    case r === 18: return " and you hate dwelling on the past";
    case r === 19: return " and you hate being woken up";
    case r === 20: return " and you fear heights";
}
}

var flaws = () => {
  const r = utils.getRandomNumber(1,39);
  switch (true){
    case r === 1: return     ". You never back down from a fight, even if it's unwinnable.";
    case r === 2: return     ". You constantly, incorrectly correct other peoples grammar.";
    case r === 3: return     ". You live as if you are the main hero in a bards tale and cannot lose.";
    case r === 4: return     ". You have a nervous tick that causes you to flap you arms like a bird when you are embarrassed.";
    case r === 5: return     ". You are constantly distracted by your own mortality.";
    case r === 6: return     ". If you see a horse, you HAVE to pull its tail.";
    case r === 7: return     ". You eat with your mouth open.";
    case r === 8: return     ". You have awful personal hygine.";
    case r === 9: return     ". You refer to other races as lesser beings.";
    case r === 10: return    ". You believe you were a king in your past life (you were not). ";
    case r === 11: return    ". You snore very loudly.";
    case r === 12: return    ". You don't like to eat in front of other people.";
    case r === 13: return    ". As an adult you once lost a child’s eating competition.";
    case r === 14: return    ". You have deep-rooted father issues.";
    case r === 15: return    ". You dream in black and white.";
    case r === 16: return    ". You are always late for social gatherings.";
    case r === 17: return    ". You breathe loudly though your mouth.";
    case r === 18: return    ". You have heterochromia.";
    case r === 19: return    ". You always feel like someone is watching you.";
    case r === 20: return    ". You need alcohol to get though the day.";
    case r === 21: return    ". You have a very pronounced underbite.";
    case r === 22: return    ". You have a very pronounced overbite.";
    case r === 23: return    ". You think moustaches are ridiculously cool but have never been able to grow one yourself.";
    case r === 24: return    ". You didn't choose the Skux life, the Skux life chose you.";
    case r === 25: return    ". You are convinced the " + _.sample(races.race) + "s are up to something.";
    case r === 26: return    ". You are slightly cross-eyed.";
    case r === 27: return    ". You are slightly boss-eyed.";
    case r === 28: return    ". You blindly follow orders from anyone taller than you.";
    case r === 29: return    ". You have never seen a rainbow and are convinced people are making them up.";
    case r === 30: return    ". You get very nervous opening doors.";
    case r === 31: return    ". You break out in a cold sweat whenever you hear children laughing.";
    case r === 32: return    ". Whenever you see your reflection you stop and become very confused for a moment.";
    case r === 33: return    ". You were chased out of your hometown for stealing " + _.sample(things);
    case r === 34: return    ". You have never been in love.";
    case r === 35: return    ". Your gums bleed excessively.";
    case r === 36: return    ". You quietly cry before you go to sleep.";
    case r === 37: return    ". you are absolutely astonished by jugglers.";
    case r === 38: return    ". you find it impossible to speak to members of the opposite sex.";
    case r === 39: return    ". you tend to end every conversation passive-aggressively."
  }

}






var backstory = () =>{
  return {life:life(), likes:likes(), dislikes:dislikes(), flaws:flaws()}
}

exports.backstory = backstory;
