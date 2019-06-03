$(document).ready(function () {
  //defining local variables
  selected = false;
  //defining the character objects
GameEngine();

  function GameEngine () {
    YourCharacter(),
    DefenderSelected();
  };
  var Ahrim = {
    Name: "Ahrim",
    defense: 12,
    hp: 99,
    image: "<img src='assets/images/Ahrim.png' />",
    alert: "You Selected Ahrim! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!",
    selected: false
  };
  var Dharok = {
    Name: "Dharok",
    defense: 14,
    hp: 99,
    image: "<img src = 'assets/images/Dharok.png' />",
    alert: "You Selected Dharok! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!",
    selected: false
  };
  var Guthan = {
    Name: "Guthan",
    defense: 8,
    hp: 99,
    image: "<img src='assets/images/Guthan.png' />",
    alert: "You Selected Guthan! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!",
    selected: false
  };
  var Karil = {
    Name: "Karil",
    defense: 8,
    hp: 99,
    image: "<img src='assets/images/Karil.png' />",
    alert: "You Selected Karil! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!",
    selected: false
  };
  var Torag = {
    Name: "Torag",
    defense: 7,
    hp: 99,
    image: "<img src='assets/images/Torag.png' />",
    alert: "You Selected Torag! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!",
    selected: false
  };
  var Verac = {
    Name: "Verac",
    defense: 12,
    hp: 99,
    image: "<img src='assets/images/Verac.png' /  alt='verac'>",
    alert: "You Selected Verac! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!",
    selected: false
  };

  //defining the attack
  var attack = Math.floor(Math.random() * 31 + 1)
  console.log(attack);

  function YourCharacter() {
  //onclick for placing character in the your character div and changing variable for if character has been selected.
  
  $(".AhrimIMG").click(function AhrimSelected () {
    alert(Ahrim.alert)
    $(Ahrim.selected).data('clicked', true);
    document.getElementById("character").innerHTML = '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</div></h4>' + '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' +
      '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>' + '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' +
      '<div class = "torag"><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    $(".DharokIMG").remove(".DharokIMG")
    $(".ToragIMG").remove(".ToragIMG")
    $(".VeracIMG").remove(".VeracIMG")
    $(".GuthanIMG").remove(".GuthanIMG")
    $(".KarilIMG").remove(".KarilIMG")
  });
  $(".DharokIMG").click(function DharokSelected () {
    alert(Dharok.alert)
    $(Dharok.selected).data('clicked', true);
    document.getElementById("character").innerHTML = '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</div></h4>' + '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4></div>' +
      '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>' + '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' +
      '<div class = "torag"><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    $(".DharokIMG").remove(".DharokIMG")
    $(".ToragIMG").remove(".ToragIMG")
    $(".VeracIMG").remove(".VeracIMG")
    $(".GuthanIMG").remove(".GuthanIMG")
    $(".KarilIMG").remove(".KarilIMG")
  });
  $(".GuthanIMG").click(function GuthanSelected () {
    alert(Guthan.alert)
    $(Guthan.selected).data('clicked', true);
    document.getElementById("character").innerHTML = '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</div></h4>' + '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4></div>' +
      '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' + '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' +
      '<div class = "torag"><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    $(".DharokIMG").remove(".DharokIMG")
    $(".ToragIMG").remove(".ToragIMG")
    $(".VeracIMG").remove(".VeracIMG")
    $(".GuthanIMG").remove(".GuthanIMG")
    $(".KarilIMG").remove(".KarilIMG")
  });
  $(".KarilIMG").click(function KarilSelected () {
    alert(Karil.alert)
    $(Karil.selected).data('clicked', true);
    document.getElementById("character").innerHTML = '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</div></h4>' + '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4></div>' +
      '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' + '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>' +
      '<div class = "torag"><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    $(".DharokIMG").remove(".DharokIMG")
    $(".ToragIMG").remove(".ToragIMG")
    $(".VeracIMG").remove(".VeracIMG")
    $(".GuthanIMG").remove(".GuthanIMG")
    $(".KarilIMG").remove(".KarilIMG")
  });
  $(".ToragIMG").click(function ToragSelected () {
    alert(Torag.alert)
    $(Torag.selected).data('clicked', true);
    document.getElementById("character").innerHTML = '<div><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</div></h4>' + '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4></div>' +
      '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' + '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>' +
      '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    $(".DharokIMG").remove(".DharokIMG")
    $(".ToragIMG").remove(".ToragIMG")
    $(".VeracIMG").remove(".VeracIMG")
    $(".GuthanIMG").remove(".GuthanIMG")
    $(".KarilIMG").remove(".KarilIMG")
  });
  $(".VeracIMG").click(function VeracSelected () {
    alert(Verac.alert)
    $(Verac.selected).data('clicked', true);
    document.getElementById("character").innerHTML = '<div class = "verac"><h3>Name: ' + Verac.Name + '</h3>' + Verac.image + '<h4>Health: ' + Verac.hp + '</h4>' + "<h1>Your Character</h1></div>";
    document.getElementById("enemies").innerHTML = '<div class = "torag"><h3>Name: ' + Torag.Name + '</h3>' + Torag.image + '<h4>Health: ' + Torag.hp + '</div></h4>' + '<div class = "ahrim"><h3>Name: ' + Ahrim.Name + '</h3>' + Ahrim.image + '<h4>Health: ' + Ahrim.hp + '</h4></div>' +
      '<div class = "dharok"><h3>Name: ' + Dharok.Name + '</h3>' + Dharok.image + '<h4>Health: ' + Dharok.hp + '</h4></div>' + '<div class = "guthan"><h3>Name: ' + Guthan.Name + '</h3>' + Guthan.image + '<h4>Health: ' + Guthan.hp + '</h4></div>' +
      '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4></div>' + "<h1>Enemies Avaliable To Attack</h1>";
    $(".AhrimIMG").remove(".AhrimIMG")
    $(".DharokIMG").remove(".DharokIMG")
    $(".ToragIMG").remove(".ToragIMG")
    $(".VeracIMG").remove(".VeracIMG")
    $(".GuthanIMG").remove(".GuthanIMG")
    $(".KarilIMG").remove(".KarilIMG")
  });
};

  function DefenderSelected () {
    $(".karil").click(function KarilSelected () {
      document.getElementById("defender").innerHTML = '<div class = "karil"><h3>Name: ' + Karil.Name + '</h3>' + Karil.image + '<h4>Health: ' + Karil.hp + '</h4>' + "<h1>Defender</h1></div>";
    });
  };
});