$(document).ready(function () {

  //defining the character objects
  var Ahrim = {
    Name: "Ahrim",
    defense: 12,
    hp: 99,
    image: "<img src='assets/images/Ahrim.png' />",
  };
  var Dharok = {
    Name: "Dharok",
    defense: 14,
    hp: 99,
    image: "<img src = 'assets/images/Dharok.png' />",
  };
  var Guthan = {
    Name: "Guthan",
    defense: 8,
    hp: 99,
    image: "<img src='assets/images/Guthan.png' />",
  };
  var Karil = {
    Name: "Karil",
    defense: 8,
    hp: 99,
    image: "<img src='assets/images/Karil.png' />",
  };
  var Torag = {
    Name: "Torag",
    defense: 7,
    hp: 99,
    image: "<img src='assets/images/Torag.png' />",
  };
  var Verac = {
    Name: "Verac",
    defense: 12,
    hp: 99,
    image: "<img src='assets/images/Verac.png' />",
  };

  //defining the attack
  var attack = Math.floor(Math.random() * 31 + 1)
  console.log(attack);

  //onclick function
  $(".AhrimIMG").click(function () {
    document.getElementById("your character").innerHTML ='<div>' + Ahrim.image + '<p>Name: ' + Ahrim.Name + '</p><p>Health: ' + Ahrim.hp + '</p></div>' + "<h1>Your Character</h1>"
  });
  $(".DharokIMG").click(function () {
    document.getElementById("your character").innerHTML = '<div>' + Dharok.image + '<p>Name: ' + Dharok.Name + '</p><p>Health: ' + Dharok.hp + '</p></div>' + "<h1>Your Character</h1>"
  });
  $(".GuthanIMG").click(function () {
    document.getElementById("your character").innerHTML = '<div>' + Guthan.image + '<p>Name: ' + Guthan.Name + '</p><p>Health: ' + Guthan.hp + '</p></div>' + "<h1>Your Character</h1>"
  });
  $(".KarilIMG").click(function () {
    document.getElementById("your character").innerHTML = '<div>' + Karil.image + '<p>Name: ' + Karil.Name + '</p><p>Health: ' + Karil.hp + '</p></div>' + "<h1>Your Character</h1>"
  });
  $(".ToragIMG").click(function () {
    document.getElementById("your character").innerHTML = '<div>' + Torag.image + '<p>Name: ' + Torag.Name + '</p><p>Health: ' + Torag.hp + '</p></div>' + "<h1>Your Character</h1>"
  });
  $(".VeracIMG").click(function () {
    document.getElementById("your character").innerHTML = '<div>' + Verac.image + '<p>Name: ' + Verac.Name + '</p><p>Health: ' + Verac.hp + '</p></div>' + "<h1>Your Character</h1>"
  });
});