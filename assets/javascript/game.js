$(document).ready(function () {
 //defining local variables
  selected = false;
  //defining the character objects
  var Ahrim = {
    Name: "Ahrim",
    defense: 12,
    hp: 99,
    image: "<img src='assets/images/Ahrim.png' />",
    selected: false,
  };
  var Dharok = {
    Name: "Dharok",
    defense: 14,
    hp: 99,
    image: "<img src = 'assets/images/Dharok.png' />",
    selected: false,
  };
  var Guthan = {
    Name: "Guthan",
    defense: 8,
    hp: 99,
    image: "<img src='assets/images/Guthan.png' />",
    selected: false,
  };
  var Karil = {
    Name: "Karil",
    defense: 8,
    hp: 99,
    image: "<img src='assets/images/Karil.png' />",
    selected: false,
  };
  var Torag = {
    Name: "Torag",
    defense: 7,
    hp: 99,
    image: "<img src='assets/images/Torag.png' />",
    selected: false,
  };
  var Verac = {
    Name: "Verac",
    defense: 12,
    hp: 99,
    image: "<img src='assets/images/Verac.png' />",
    selected: false,
  };

  //defining the attack
  var attack = Math.floor(Math.random() * 31 + 1)
  console.log(attack);

  //onclick for placing character in the your character div and changing variable for if character has been selected.
  $(".AhrimIMG").click(function () {
    document.getElementById("character").innerHTML = '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</div></h4>' + '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' + 
    '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>'+ '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' + 
    '<div class = "torag"><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    Ahrim.selected === true;
  });
  $(".DharokIMG").click(function () {
    document.getElementById("character").innerHTML = '<div><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' + "<h1>Your Character</h1>";
    $(".DharokIMG").remove(".DharokIMG");
    Dharok.selected === true;
  });
  $(".GuthanIMG").click(function () {
    document.getElementById("character").innerHTML = '<div><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>' + "<h1>Your Character</h1>";
    $(".GuthanIMG").remove(".GuthanIMG");
    Guthan.selected === true;
  });
  $(".KarilIMG").click(function () {
    document.getElementById("character").innerHTML = '<div><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' + "<h1>Your Character</h1>";
    $(".KarilIMG").remove(".KarilIMG");
    Karil.selected === true;
  });
  $(".ToragIMG").click(function () {
    document.getElementById("character").innerHTML = '<div><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4></div>' + "<h1>Your Character</h1>";
    $(".ToragIMG").remove(".ToragIMG");
    Torag.selected === true;
  });
  $(".VeracIMG").click(function () {
    document.getElementById("character").innerHTML = '<div><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</h4></div>' + "<h1>Your Character</h1>";
    $(".VeracIMG").remove(".VeracIMG");
    Verac.selected === true;
  });

  if (Ahrim.selected = false) {

  };
});