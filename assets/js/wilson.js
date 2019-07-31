var CONSTANTS = {
  wilsonMaxHealth: 100,
  buttonWidth: 100
};

var wilson = {
  health: CONSTANTS.wilsonMaxHealth,
  hungry: 0,
  height: 449,
  width: 359
};

var game = document.getElementById('game');
var wilsonContainer = document.createElement('div');
var interfaceContainer = document.createElement('div');
var healthContainer = document.createElement('div');
var mealContainer = document.createElement('div');

var wilsonAlive = document.createElement('div');
var wilsonDead = document.createElement('div');

wilsonContainer.style.height = wilson.height.toString();
wilsonContainer.style.width = wilson.width.toString();

wilsonAlive.style.height = wilson.height.toString();
wilsonAlive.style.width = wilson.width.toString();
wilsonAlive.style.background = 'url("' + config.wilson.sprites.alive + '")';

wilsonDead.style.height = "358px";
wilsonDead.style.width = "262px";
wilsonDead.style.position = "relative";
wilsonDead.style.top = "90px";
wilsonDead.style.left = "45px";
wilsonDead.style.background = 'url("' + config.wilson.sprites.dead + '")';

healthContainer.innerHTML = wilson.health;
healthContainer.style.height = CONSTANTS.buttonWidth.toString();
healthContainer.style.width = CONSTANTS.buttonWidth.toString();
healthContainer.style.borderRadius = "100%";
healthContainer.style.border = "1px solid #000";
healthContainer.style.textAlign = "center";
healthContainer.style.display = "inline-block";
healthContainer.style.fontSize = "32px";
healthContainer.style.lineHeight = "3";
healthContainer.style.background = "#fcb603";

mealContainer.style.height = CONSTANTS.buttonWidth.toString();
mealContainer.style.width = CONSTANTS.buttonWidth.toString();
mealContainer.style.borderRadius = "100%";
mealContainer.style.border = "1px solid #000";
mealContainer.style.textAlign = "center";
mealContainer.style.display = "inline-block";
mealContainer.style.fontSize = "32px";
mealContainer.style.lineHeight = "3";
mealContainer.style.background = "#fcb603 url('" + config.meals.sprites.meatBalls + "') 0";
mealContainer.style.backgroundSize = "contain";
mealContainer.style.cursor = 'pointer';
mealContainer.style.marginRight = "12px";

interfaceContainer.style.display = "flex";
interfaceContainer.style.marginTop = "40px";

wilsonContainer.appendChild(wilsonAlive);
interfaceContainer.appendChild(mealContainer);
interfaceContainer.appendChild(healthContainer);
game.appendChild(wilsonContainer);
game.appendChild(interfaceContainer);

function feed(supply) {
  wilson.health += supply;
  wilson.health = wilson.health > CONSTANTS.wilsonMaxHealth ? CONSTANTS.wilsonMaxHealth : wilson.health;
  console.log(wilson.health);
  return wilson;
}

mealContainer.addEventListener('click', function() {
  feed(50);
});

setTimeout(function () {
  var decrease = setInterval(function () {
    wilson.health -= 1;
    healthContainer.style.background = "linear-gradient(to top, #fcb603 " + wilson.health + "%, transparent " + wilson.health + "%, transparent 100%)";
    if (wilson.health <= 0) {
      wilsonContainer.innerHTML = "";
      wilsonContainer.appendChild(wilsonDead);
      clearInterval(decrease)
    }
    healthContainer.innerHTML = wilson.health.toString();
  }, 50);
}, 3000);