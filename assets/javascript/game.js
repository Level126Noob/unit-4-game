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
        defense: 11,
        hp: 99,
        image: "<img src='assets/images/Ahrim.png' />",
        alert: "You Selected Ahrim! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Dharok': {
        Name: "Dharok",
        defense: 10,
        hp: 99,
        image: "<img src = 'assets/images/Dharok.png' />",
        alert: "You Selected Dharok! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Guthan': {
        Name: "Guthan",
        defense: 5,
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
        defense: 6,
        hp: 99,
        image: "<img src='assets/images/Torag.png' />",
        alert: "You Selected Torag! Good choice! Now pick an enemey from the 'Enemies Avaliable To Attack' section to start a battle!"
      },
      'Verac': {
        Name: "Verac",
        defense: 7,
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

  //onclick function defining the variable of click and clicked getting the data from the parent objects and appending them to the appropriate divs
  $('.character').click(function (e) {
    if (gameEngine.selectedCharacter == null) {
      var clicked = this.getAttribute('data-name');
      var characterswrapper = $(this).parent();
      alert('You Selected: ' + clicked + ' good choice! Now click on an enemey in the "enemies to attack" section to engage in battle!')
      console.log(clicked);
      gameEngine.selectedCharacter = characters[clicked];
      $('#Yourcharacter').append('<h4 class = "yourcharhp">Health: ' + gameEngine.selectedCharacter.hp + '</h4>' + gameEngine.selectedCharacter.image + '<h3>Name: ' + gameEngine.selectedCharacter.Name + '</h3>');
      characterswrapper.hide();
      $('#enemies').append($('.characters'));
      $('.character').removeClass('character').addClass('enemy');
    } else if (gameEngine.selectedDefender == null) {
      var click = this.getAttribute('data-name');
      var characterswrapper = $(this).parent();
      alert('You Selected: ' + click + ' now click the ATTACK button to start fighting!');
      console.log(click);
      gameEngine.selectedDefender = characters[click];
      $('#defender').append('<h4 class = "defenderhp">Health: ' + gameEngine.selectedDefender.hp + '</h4>' + gameEngine.selectedDefender.image + '<h3>Name: ' + gameEngine.selectedDefender.Name + '</h3>');
      characterswrapper.hide();
      $('#attackbtn').css('visibility', 'visible');
    }
  });

 var RemoveDef = 0;
  //defining the attack function does
  function attackdefender() {
    var attack = Math.floor(Math.random() * 99 + 1)
    console.log('You Hit: ' + attack);
    gameEngine.selectedDefender.hp = gameEngine.selectedDefender.hp - attack;
    $('.defenderhp').text(gameEngine.selectedDefender.hp)
    console.log('Defenders Health: ' + gameEngine.selectedDefender.hp);
    gameEngine.selectedCharacter.hp = gameEngine.selectedCharacter.hp - gameEngine.selectedDefender.defense;
    $('.yourcharhp').text(gameEngine.selectedCharacter.hp)
    console.log('Opponent Hit: ' + gameEngine.selectedDefender.defense);
    console.log('Your Health: ' + gameEngine.selectedCharacter.hp);
    $('#attackbtn').prepend('You Hit: ' + attack);
    $('#attackbtn').append('Defender Hit: ' + gameEngine.selectedDefender.defense);
    if (gameEngine.selectedCharacter.hp <= 0) {
      youlost();
    }
    if (gameEngine.selectedDefender.hp <= 0) {
      removeDefender();
      RemoveDef ++;
       console.log('Defenders Removed: ' + RemoveDef);
    } 
    if (RemoveDef == 5) {
      YouWIN();
  };
};
  
  //creating a win function
  function YouWIN() {
    alert('You Won!! Congratulations! Click the "Reset Button" to play again!');
      $('#button').css('visibility', 'visible');
      $("button").click(function () {
        location.reload(true);
      });
  };
   
  //onclick attack button performing attack function
  $('#attackbtn').click(function () {
    attackdefender();
  });
  //function for removing characters if hp = 0
  function removeDefender() {
    if (gameEngine.selectedDefender.hp <= 0) {
      $('#defender').html('<h1>Defender</h1>');
      gameEngine.selectedDefender = null;
      alert("You beat that opponent! Pick another one to fight!");
      $('#attackbtn').empty();
      $('#attackbtn').append('@Attack!@');
    }
};

  function youlost() {
    alert("Oh NO! You lost! Click the Reset Button to Try again!");
    $('#button').css('visibility', 'visible')
    $("button").click(function () {
      location.reload(true);
    });
  };
});