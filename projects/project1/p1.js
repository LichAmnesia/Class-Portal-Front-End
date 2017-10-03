
var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(1200, 1000, {backgroundColor : 0xffffff});
document.body.appendChild(renderer.view);

var container = new PIXI.Container();


//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add("basics/triangulated.png")
  .add("basics/yes.png")
  .add("basics/no.png")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the `cat` sprite from the texture
  var cat = new PIXI.Sprite(
    PIXI.loader.resources["basics/triangulated.png"].texture
  );

 
  cat.height = 450;
  cat.width = 360;
  // cat.scal.x = (0.0 + cat.width) / renderer.width;

  //Add the cat to the stage
  container.addChild(cat);
  
  //Render the container   
  renderer.render(container);
}

// for questions
var graphics = new PIXI.Graphics();
// draw a rounded rectangle
graphics.lineStyle(2, 0xbdbdbd, 1);
// graphics.beginFill(0xFF00BB, 0.25);
graphics.drawRoundedRect(0, 450, 360, 300, 10);
graphics.endFill();
container.addChild(graphics);


// create some white text using the Snippet webfont
var textSample = new PIXI.Text("What's the purpose of your visit?", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black', 
    align: 'left' 
});
textSample.x = 20;
textSample.y = 460;
container.addChild(textSample);

// create some white text using the Snippet webfont
var ansExample = new PIXI.Text("I came to work", {
    fontFamily: 'Roboto',
    fontSize: 12,
    fill: 'black', 
    align: 'left' 
});
ansExample.x = 20;
ansExample.y = 490;
container.addChild(ansExample);



// create some white text using the Snippet webfont
var textSample1 = new PIXI.Text("How long will you stay?", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black', 
    align: 'left' 
});
textSample1.x = 20;
textSample1.y = 520;
container.addChild(textSample1);

// create some white text using the Snippet webfont
var ansExample1 = new PIXI.Text("Forever", {
    fontFamily: 'Roboto',
    fontSize: 12,
    fill: 'black', 
    align: 'left' 
});
ansExample1.x = 20;
ansExample1.y = 550;
container.addChild(ansExample1);



// for passport
var passportGraphics = new PIXI.Graphics();
// draw a rounded rectangle
passportGraphics.lineStyle(2, 0xbdbdbd, 1);
// passportGraphics.beginFill(0xFF00BB, 0.25);
passportGraphics.drawRoundedRect(380, 0, 500, 400, 10);
passportGraphics.endFill();
container.addChild(passportGraphics);


// create some white text using the Snippet webfont
var passportText1 = new PIXI.Text("Abraham Lincoln", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black', 
    align: 'left' 
});
passportText1.x = 400;
passportText1.y = 20;
container.addChild(passportText1);

// create some white text using the Snippet webfont
var ansExample1 = new PIXI.Text("Forever", {
    fontFamily: 'Roboto',
    fontSize: 12,
    fill: 'black', 
    align: 'left' 
});
ansExample1.x = 20;
ansExample1.y = 550;
container.addChild(ansExample1);

// create some white text using the Snippet webfont
var textSample1 = new PIXI.Text("How long will you stay?", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black', 
    align: 'left' 
});
textSample1.x = 20;
textSample1.y = 520;
container.addChild(textSample1);

// create some white text using the Snippet webfont
var ansExample1 = new PIXI.Text("Forever", {
    fontFamily: 'Roboto',
    fontSize: 12,
    fill: 'black', 
    align: 'left' 
});
ansExample1.x = 20;
ansExample1.y = 550;
container.addChild(ansExample1);



// for entry
var entryGraphics = new PIXI.Graphics();
// draw a rounded rectangle
entryGraphics.lineStyle(2, 0xbdbdbd, 1);
// entryGraphics.beginFill(0xFF00BB, 0.25);
entryGraphics.drawRoundedRect(380, 420, 500, 330, 10);
entryGraphics.endFill();
container.addChild(entryGraphics);


// create some white text using the Snippet webfont
var entryVisa = new PIXI.Text("Entry Visa", {
    fontFamily: 'Roboto',
    fontSize: 35,
    fill: 'black', 
    align: 'left' 
});
entryVisa.x = 450;
entryVisa.y = 450;
container.addChild(entryVisa);

// accepted denied
var yes = PIXI.Sprite.fromImage("basics/yes.png");

// Opt-in to interactivity
yes.interactive = true;

// Shows hand cursor
yes.buttonMode = true;

yes.x = 450;
yes.y = 500;
yes.width = 150;
yes.height = 150;
// Pointers normalize touch and mouse
yes.on('pointerdown', onyesClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

container.addChild(yes);

function onyesClick () {
    alert("you approve the Visa!")
    renderer.render(container);
}

var no = PIXI.Sprite.fromImage("basics/no.png");

// Opt-in to interactivity
no.interactive = true;

// Shows hand cursor
no.buttonMode = true;

no.x = 700;
no.y = 510;
no.width = 120;
no.height = 120;
// Pointers normalize touch and mouse
no.on('pointerdown', onnoClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

container.addChild(no);

function onnoClick () {
    alert("you denied the Visa!")
    renderer.render(container);
}
