$(document).ready(function () {
  //declaring the variables and the character objects
  var hp = 99;
  playercharacter = false;
  enemyselected = false;
  defense = undefined;
  var attack = Math.floor(Math.random() * 31 + 1)
  console.log(attack);
  
  var Ahrim = {
    hp: 99,
    name: "Ahrim",
    defense: 17,
    imageurl: "assets/images/Ahrim.png"
  };
  var Dharok = {
    hp: 99,
    name: "Dharok",
    defense: 22,
    imageurl: "assets/images/Ahrim.png"
  };
  var Guthan = {
    hp: 99,
    name: "Guthan",
    defense: 9,
    imageurl: "assets/images/Ahrim.png"
  };
  var Karil = {
    hp: 99,
    name: "Karil",
    defense: 12,
    imageurl: "assets/images/Ahrim.png"
  };
  var Torag = {
    hp: 99,
    name: "Torag",
    defense: 11,
    imageurl: "assets/images/Ahrim.png"
  };
  var Verac = {
    hp: 99,
    name: "Verac",
    defense: 15,
    imageurl: "assets/images/Ahrim.png"
  };
});