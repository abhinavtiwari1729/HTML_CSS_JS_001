let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;

let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

const text = document.querySelector('#text');
const xptext = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterNameText = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');

const weapons = [

  {
    name: "stick",
    power: 5
  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "hammer",
    power: 50
  },
  {
    name: "sword",
    power: 100
  }

];


const monsters = [

  {
    name: "KumbhKaran",
    level: 2,
    health: 15
  },
  {
    name: "Meghnad",
    level: 8,
    health: 60
  },
  {
    name: "Ravan",
    level: 20,
    health: 300
  }
]





const locations = [

  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight Ravan"],
    "button functions": [goStore, goCave, fightRavan],
    text: "You are in the town square. You see a sign that says \"Store\"."

  },

  {

    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."

  },

  {
    name: "cave",
    "button text": ["Fight KumbhKaran", "Fight Meghnad", "Go To Town Square"],
    "button functions": [fightKumbhKaran, fightMeghnad, goTown],
    text: "You enter the cave. You see some Rakshas."
  }

]



// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightRavan;


function update(location) {

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];

  text.innerText = location.text;

}
function goTown() {

  update(locations[0]);

}
function goStore() {

  update(locations[1]);
}

function goCave() {
  console.log("going to cave");
}



function buyHealth() {

  if (gold >= 10) {

    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;

  }
  else {
    text.innerText = "you do not have enough gold to buy health";
  }

}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "you now have a" + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += "In your inventory you have: " + inventory;

    }
    else {
      text.innerText = "you do not have enough gold to buy a weapon";
    }
  }
  else {
    text.innerText = "you already have the most powerful weapon";
    button2.innerText = "sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}


function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "you sold a " + currentWeapon + ".";
    text.innerText += "In your inventory you have: " + inventory;
  }
  else {
    text.innerText = "don't sell your only weapon!";
  }
}



function fightKumbhKaran() {
  fighting = 0;
  goFight();
}

function fightMeghnad() {
  fighting = 1;
  goFight();
}

function fightRavan() {
  fighting = 2;
  goFight();
}


function goFight() {

}
