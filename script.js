/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var plaatjeAppel; //in deze variabelen stoppen we de functie
var plaatjeCake; // preload() de afbeeldingen
var plaatjeKers;
var plaatjePeer;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel


var vijandenX1 = []; // x-positie van Appel 
var vijandenX2 = []; // x-positie van kers
var vijandenX3 = []; // x-positie van peer
var vijandenY1 = []; // y-positie van appel
var vijandenY2 = []; // y-positie van kers
var vijandenY3 = []; // y-positie van peer

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

 
var tekenVijanden = function() {
    for (var teller = 0; teller < vijandenX1.length; teller++) {   
    image(plaatjeAppel, vijandenX1[teller], vijandenY1[teller], 170, 150); 
    }
    //plaatjeappel
    for (var teller = 0; teller < vijandenX2.length; teller++) {   
    image(plaatjeKers, vijandenX2[teller], vijandenY2[teller], 200, 200); 
    } //plaatje kers
    for (var teller = 0; teller < vijandenX3.length; teller++) {   
    image(plaatjePeer, vijandenX3[teller], vijandenY3[teller], 120, 120); 
    } //plaatje peer
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

 
var tekenSpeler = function(x, y) {
  /*fill(173, 205, 255);
  ellipse(mouseX, 600, 50, 50);*/
};

function preload() {
    plaatjeCake = loadImage ("afbeeldingen/cake.png");
    plaatjeAppel = loadImage ("afbeeldingen/appel.png");
    plaatjeKers = loadImage ("afbeeldingen/kers.png");
    plaatjePeer = loadImage ("afbeeldingen/peer.png");

}

function tekenScore() {

    fill(255, 172, 94);
    rect(0, 0, 320, 80);

    fill(0, 0, 0);
    textSize (45);
    text(score, 145, 55);
    text("score:", 20, 55);
}

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

var beweegVijand = function() {
     for (var teller = 0; teller < vijandenX1.length; teller++) {        
         vijandenY1[teller] = vijandenY1[teller] + 5;
         if (vijandenY1[teller] > 800) {
             vijandenY1[teller] = random(0, -1200); // ik weet niet of de getallen kloppen ook bij rij 199!!!!!!!!!
             vijandenX1[teller] = random(20, 1200);
         }
    }

     for (var teller = 0; teller < vijandenX2.length; teller++) {        
         vijandenY2[teller] = vijandenY2[teller] + 10;
         if (vijandenY2[teller] > 800) {
             vijandenY2[teller] = random(0, -1200); // ik weet niet of de getallen kloppen ook bij rij 199!!!!!!!!!
             vijandenX2[teller] = random(20, 1200);
         }
    }
     for (var teller = 0; teller < vijandenX3.length; teller++) {        
         vijandenY3[teller] = vijandenY3[teller] + 5;
         if (vijandenY3[teller] > 800) {
             vijandenY3[teller] = random(0, -1200); // ik weet niet of de getallen kloppen ook bij rij 199!!!!!!!!!
             vijandenX3[teller] = random(20, 1200);
         }
    }
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function(x,y) {

    for (var i =0; i < vijandenX1.length; i++) {
        if (CollideRectRect(vijandenX1[vijandNummer], vijandenY1[vijandNummer], 170, spelerX[i],spelerY[i], 200)) {
            teruggeefwaarde = true;
        
            verwijderVijand (i);

            console.log("Speler" + vijandNummer + "geraakt door vijand" + i);
        }
    }

        return teruggeefwaarde;

        function verwijderVijand(nummer) {
            console.log("verwijder vijand " + nummer);
            vijandenX1.splice(nummer, 1);
            vijandenY1.splice(nummer, 1)
            vijandenSnelheid.splice(nummer, 1);
}

   /* var vijandX = spelerX 
    boolean(vijandX);  //returns false
  return false;
   
  if  (boolean = false)  //dus als de vijand de speler raakt
    PrintIn("GAME OVER"); */


};

// ook als de kers is geraakt score + 1000


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};

function updateScore () {
    score = score + 10;
}

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  setInterval(updateScore,1000);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  
  // maak 10 keer een nieuwe x en y waarden voor de vijanden'
  // en voeg deze achter aan de array toe
   for (var teller = 0; teller < 4; teller++) {        
     vijandenX1.push(random(20, 1200));
     vijandenY1.push(random(0, -1200));

    }
   

    for (var teller = 0; teller < 1; teller++) {        
     vijandenX2.push(random(20, 1200));
     vijandenY2.push(random(0, -1200));

    }
   

    for (var teller = 0; teller < 4; teller++) {        
     vijandenX3.push(random(20, 1200));
     vijandenY3.push(random(0, -1200));

    }
   
  
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:

   background(255, 253, 186);

    image(plaatjeCake, mouseX, 600, 150, 100);
if (mouseX >= 1130) {
    mouseX = 1130; 
}
if (mouseX <= 0){
    mouseX = 0;
}






      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijanden();
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);
      tekenScore();

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
