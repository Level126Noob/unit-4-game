var characters
var gameEngine
$(document).ready(function () {
  //defining local variables
  GameStart();

  function GameStart() {
    characters = resetCharacters();
    gameEngine = resetGameEngine();
  };

  //defining the character objects and creating a reset player fuction to reset the player variables back to 
  function resetCharacters() {
    return {
      'Ahrim': {
        Name: "Ahrim",
        defense: 12,
        hp: 99,
        image: "<img src='assets/images/Ahrim.png' />",
        alert: "You Selected Ahrim! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Dharok': {
        Name: "Dharok",
        defense: 14,
        hp: 99,
        image: "<img src = 'assets/images/Dharok.png' />",
        alert: "You Selected Dharok! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Guthan': {
        Name: "Guthan",
        defense: 8,
        hp: 99,
        image: "<img src='assets/images/Guthan.png' />",
        alert: "You Selected Guthan! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Karil': {
        Name: "Karil",
        defense: 8,
        hp: 99,
        image: "<img src='assets/images/Karil.png' />",
        alert: "You Selected Karil! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Torag': {
        Name: "Torag",
        defense: 7,
        hp: 99,
        image: "<img src='assets/images/Torag.png' />",
        alert: "You Selected Torag! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Verac': {
        Name: "Verac",
        defense: 12,
        hp: 99,
        image: "<img src='assets/images/Verac.png' /  alt='verac'>",
        alert: "You Selected Verac! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      }
    }
  };

  function resetGameEngine() {
    // resets game engine
    return {
      selectedCharacter: null,
      selectedDefender: null,
    }
  };

  
  $('.character').click(function (e) {
    if (gameEngine.selectedCharacter == null) {
      var clicked = this.getAttribute('data-name');
      var characterswrapper = $(this).parent();
      console.log(clicked);
      gameEngine.selectedCharacter = characters[clicked];
      $('#Yourcharacter').append('<h4 class = "yourcharhp">Health: ' + gameEngine.selectedCharacter.hp + '</h4>' + gameEngine.selectedCharacter.image + '<h3>Name: ' + gameEngine.selectedCharacter.Name + '</h3>');
      characterswrapper.hide();
      $('#enemies').append($('.characters'));
      $('.character').removeClass('character').addClass('enemy');
    } else if (gameEngine.selectedDefender == null) {
      var click = this.getAttribute('data-name');
      var characterswrapper = $(this).parent();
      gameEngine.selectedDefender = characters[click];
      $('#defender').append('<h4 class = "defenderhp">Health: ' + gameEngine.selectedDefender.hp + '</h4>' + gameEngine.selectedDefender.image + '<h3>Name: ' + gameEngine.selectedDefender.Name + '</h3>');
      characterswrapper.hide();
      $('#attackbtn').css('visibility', 'visible');
    }
  });

 //defining the attack function does
  function attackdefender() {
    var attack = Math.floor(Math.random() * 50 + 1)
    console.log(attack);
    gameEngine.selectedDefender.hp = gameEngine.selectedDefender.hp - attack;
    $('.defenderhp').text(gameEngine.selectedDefender.hp)
    console.log(gameEngine.selectedDefender.hp);
    gameEngine.selectedCharacter.hp = gameEngine.selectedCharacter.hp - gameEngine.selectedDefender.defense;
    $('.yourcharhp').text(gameEngine.selectedCharacter.hp)
    console.log(gameEngine.selectedCharacter.hp);
    if (gameEngine.selectedDefender.hp <= 0) {
      removeDefender();
    }
    if (gameEngine.selectedCharacter.hp <= 0) {
      youlost();
    };
  };

  

  $('#attackbtn').click(function () {
    attackdefender();
  });

  //function for removing characters if hp = 0
  function removeDefender() {
    if (gameEngine.selectedDefender.hp <= 0) {
      $('#defender').html('<h1>Defender!</h1>');
      gameEngine.selectedDefender = null;
      alert("You beat that opponent! Pick another one to fight!")
    };
  };

  function youlost() {
      alert("Oh NO! You lost! Click the Reset Button to Try again!");
      $('#button').css('visibility', 'visible')
      $("button").click(function(){
        location.reload(true);
    });
  };
});