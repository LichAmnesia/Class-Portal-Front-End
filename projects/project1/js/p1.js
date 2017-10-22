/*
 * @Author: Shen Huang
 * @Date:   2017-10-05 01:46:08
 * @Last Modified time: 2017-10-05 10:26:20
 */


var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(883, 753, { backgroundColor: 0xffffff });
document.body.appendChild(renderer.view);

var container = new PIXI.Container();


//Use Pixi's built-in `loader` object to load an image
PIXI.loader
    .add("basics/denied.png")
    .add("basics/approved.png")
    .add("basics/triangulated_1.png")
    .add("basics/triangulated_2.png")
    .add("basics/triangulated_3.png")
    .add("basics/triangulated_4.png")
    .add("basics/triangulated_5.png")
    .add("basics/triangulated_6.png")
    .add("basics/triangulated_7.png")
    .add("basics/triangulated_8.png")
    .add("basics/triangulated_9.png")
    .add("basics/triangulated_10.png")
    .load(setup);

//This `setup` function will run when the image has loaded
var animationStamp = true;
var approved;
var denied;
var portrait;
var img_num = Math.floor(Math.random() * 10 + 1);

function setup() {
    //Create the `portrait` sprite from the texture
    portrait = new PIXI.Sprite(
        PIXI.loader.resources["basics/triangulated_" + img_num + ".png"].texture
    );


    portrait.height = 450;
    portrait.width = 360;
    // portrait.scal.x = (0.0 + portrait.width) / renderer.width;
    container.addChild(portrait);

    approved = new PIXI.Sprite(PIXI.loader.resources["basics/approved.png"].texture);
    container.addChild(approved);

    approved.anchor.set(0.8);
    approved.position.x = 600;
    approved.position.y = 500;
    approved.scale.set(0.5);
    approved.alpha = 0;


    denied = new PIXI.Sprite(PIXI.loader.resources["basics/denied.png"].texture);
    container.addChild(denied);

    denied.anchor.set(0.8);
    denied.position.x = 600;
    denied.position.y = 500;
    denied.scale.set(0.5);
    denied.alpha = 0;



    //Render the container   
    renderer.render(container);
}

function animations() {
    var action_alphato = new PIXI.action.AlphaTo(0.9, 1);
    var action_delay = new PIXI.action.DelayTime(1.5);
    // var action_func = new PIXI.action.CallFunc(function() {
    //     for (var i = container.children.length - 1; i >= 0; i--) { container.removeChild(container.children[i]); };
    //     container = new PIXI.Container();
    // console.log("sss");
    //     display();
    //     renderer.render(container);
    // });

    var action_alphaby = new PIXI.action.AlphaBy(-0.5, 0.5);
    var action_seq = new PIXI.action.Sequence([action_alphato, action_delay]);
    if (animationStamp === true) {
        var animation = PIXI.actionManager.runAction(approved, action_seq);
        animation.on('end', function(elapsed) {
            PIXI.actionManager.runAction(approved, action_alphaby);
        });

    } else if (animationStamp === false) {
        var animation = PIXI.actionManager.runAction(denied, action_seq);
        animation.on('end', function(elapsed) {
            PIXI.actionManager.runAction(denied, action_alphaby);
        });
    }

}

function generateGraphics(argument) {
    // for questions
    var graphics = new PIXI.Graphics();
    // draw a rounded rectangle
    graphics.lineStyle(2, 0xbdbdbd, 1);
    // graphics.beginFill(0xFF00BB, 0.25);
    graphics.drawRoundedRect(0, 450, 360, 300, 10);
    graphics.endFill();
    container.addChild(graphics);

    // passport information
    // for passport
    var passportGraphics = new PIXI.Graphics();
    // draw a rounded rectangle
    passportGraphics.lineStyle(2, 0xbdbdbd, 1);
    // passportGraphics.beginFill(0xFF00BB, 0.25);
    passportGraphics.drawRoundedRect(380, 0, 500, 400, 10);
    passportGraphics.endFill();
    container.addChild(passportGraphics);


    // for entry
    var entryGraphics = new PIXI.Graphics();
    // draw a rounded rectangle
    entryGraphics.lineStyle(2, 0xbdbdbd, 1);
    // entryGraphics.beginFill(0xFF00BB, 0.25);
    entryGraphics.drawRoundedRect(380, 420, 500, 330, 10);
    entryGraphics.endFill();
    container.addChild(entryGraphics);
}



// create some white text using the Snippet webfont
var question_1 = new PIXI.Text("What's the purpose of your visit?", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black',
    align: 'left'
});
question_1.x = 20;
question_1.y = 480;

// create some white text using the Snippet webfont
var question_2 = new PIXI.Text("How long will you stay?", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black',
    align: 'left'
});
question_2.x = 20;
question_2.y = 560;

// create some white text using the Snippet webfont
var question_3 = new PIXI.Text("Do you plan to immigrate?", {
    fontFamily: 'Roboto',
    fontSize: 20,
    fill: 'black',
    align: 'left'
});
question_3.x = 20;
question_3.y = 640;

// create some white text using the Snippet webfont
var ans_1_List = ["I come to work in this country.", "For traveling", "For studying.", "To attend conference.", "See friends.", "See family members."];
var ans_2_List = ["Forever.", "About one week.", "Less than 2 days.", "More than one month.", "52 days.", "Eh~ Hard to say.", "It depends."];
var ans_3_List = ["Yes.", "No.", "I don't know.", "No!! I love my country!"];

function generateAns() {
    var ans_1 = new PIXI.Text(ans_1_List[Math.floor(Math.random() * ans_1_List.length)], {
        fontFamily: 'Roboto',
        fontSize: 12,
        fill: 'black',
        align: 'left'
    });
    ans_1.x = 20;
    ans_1.y = 510;

    // create some white text using the Snippet webfont
    var ans_2 = new PIXI.Text(ans_2_List[Math.floor(Math.random() * ans_2_List.length)], {
        fontFamily: 'Roboto',
        fontSize: 12,
        fill: 'black',
        align: 'left'
    });
    ans_2.x = 20;
    ans_2.y = 590;

    // create some white text using the Snippet webfont
    var ans_3 = new PIXI.Text(ans_3_List[Math.floor(Math.random() * ans_3_List.length)], {
        fontFamily: 'Roboto',
        fontSize: 12,
        fill: 'black',
        align: 'left'
    });
    ans_3.x = 20;
    ans_3.y = 670;


    container.addChild(ans_1);
    container.addChild(ans_2);
    container.addChild(ans_3);
}



// Section 1, fixed info
var info = [];
var tmp_info = new PIXI.Text("Surname", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 400;
tmp_info.y = 20;
info.push(tmp_info);

tmp_info = new PIXI.Text("Given Name", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 400;
tmp_info.y = 80;
info.push(tmp_info);

tmp_info = new PIXI.Text("Nationality", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 400;
tmp_info.y = 140;
info.push(tmp_info);

tmp_info = new PIXI.Text("Date of Birth", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 400;
tmp_info.y = 200;
info.push(tmp_info);

tmp_info = new PIXI.Text("Date of Issue", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 400;
tmp_info.y = 260;
info.push(tmp_info);

// expiration date
tmp_info = new PIXI.Text("Date of Expiration", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 400;
tmp_info.y = 320;
info.push(tmp_info);

// Race, same height as birth, info_4
tmp_info = new PIXI.Text("Race", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 650;
tmp_info.y = 260;
info.push(tmp_info);

// Sex, same height as issue, info_5
tmp_info = new PIXI.Text("Sex", {
    fontFamily: 'Roboto',
    fontSize: 14,
    fill: 'black',
    align: 'left'
});
tmp_info.x = 650;
tmp_info.y = 320;
info.push(tmp_info);

// Section 2, random info
// info[0], info[1]
var name_list = ["Brynlee Buckley", "Julissa Green", "Ernest Parrish", "Mylie Marquez", "Amani Richards", "Dominique Lowe", "Deja Villa", "Isabela Anderson", "Emiliano Orozco", "Karla Estrada", "Roland Coffey", "Angelique Foster", "Isabel David", "Emmy Bowman", "Oswaldo Bradford", "Kaley Rios", "Brylee Ayala", "Iliana Mcintosh", "Quinn Hamilton", "Kennedi Davila", "Dahlia Meadows", "Shea Sloan", "Tori Shields", "Joel Duffy", "Meghan Horton", "Skye Gibson", "Annika Dunn", "Helena Solis", "Franco Rivas", "Dominik May", "Rowan Massey", "Allyson Roberson", "Bianca Christian", "Mitchell Dougherty", "Zariah Bass", "Jamal Dunlap", "Keshawn Gilbert", "Tanner Ross", "Dangelo Ford", "Bethany Clay", "Maddison Conrad", "Will Mccoy", "Miya Rocha", "Jaidyn Garrison", "Tara Lopez", "Darius Casey", "Tatiana Maldonado", "Reagan Gill", "Steve Hatfield", "Braiden Byrd", "Luciana Hanson", "Malik Ho", "Kiana Freeman", "Jon Martin", "Jett Solomon", "Aditya Tapia", "Juliette Lucero", "Mya Combs", "Arielle Pena", "Killian Blackwell", "Heath Rush", "Eli Mayo", "Eve Martinez", "Camron Watkins", "Irvin Downs", "Elian Cardenas", "Jaiden Hays", "Tamia Arellano", "Preston Tucker", "Camille Morse", "Dominique Michael", "Jean Richmond", "Braedon Keller", "Rebekah Colon", "Jamir Hickman", "Kristin Mccann", "Hezekiah Gates", "Ezekiel Castaneda", "Heidi Walters", "Alyssa Valentine", "Alec Fischer", "Cale Bautista", "Aldo Warren", "Glenn Barker", "Tripp Lozano", "Jose Griffith", "Rosa Cross", "Kelvin Baker", "Beckett Jensen", "Gracie Vaughan", "Jasper Crane", "Athena Snyder", "Sanaa Brock", "Chloe Burch", "Kian Higgins", "Chaim Knox", "Gianna Hodge", "Jayden Phillips", "Sofia Arias", "Ralph Perez"];
//info[2]
// nationality list
var country_list = ["United States", "China", "India", "Japan", "Germany", "Russia", "Brazil", "United Kingdom", "France", "Mexico", "Italy", "Korea, South", "Canada", "Spain", "Indonesia", "Turkey", "Australia", "Iran", "Saudi Arabia", "Taiwan", "Iraq", "South Sudan", "North Korea", "Colombia", "Israel"];

function generateRandomDate(randomSeed, randomLen) {
    var day = new Date(+(new Date()) - Math.floor(Math.random() * randomSeed) - randomLen);
    var dd = day.getDate();
    var mm = day.getMonth() + 1; //January is 0!
    var yyyy = day.getFullYear();
    if (dd === 1) {
        dd += 1;
    }
    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    var ex_dd = (dd - 1);

    if (ex_dd < 10) {
        ex_dd = '0' + ex_dd
    }

    issue_day = mm + '/' + dd + '/' + yyyy;
    expiration_day = mm + '/' + ex_dd + '/' + (yyyy + 10);
    return [issue_day, expiration_day];
}
// info[6], info[7]
var race_list = ["White", "Black", "Asian", "2+ races"];
var sex_list = ["Female", "Male"];


function generateInfoAns() {
    var info_ans = [];
    var full_name = name_list[Math.floor(Math.random() * name_list.length)]
    // info[0] surname
    tmp_info = new PIXI.Text(full_name.split(' ')[1], {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 400;
    tmp_info.y = 40;
    info_ans.push(tmp_info);

    tmp_info = new PIXI.Text(full_name.split(' ')[0], {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 400;
    tmp_info.y = 100;
    info_ans.push(tmp_info);

    tmp_info = new PIXI.Text(country_list[Math.floor(Math.random() * country_list.length)], {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 400;
    tmp_info.y = 160;
    info_ans.push(tmp_info);

    // info[3], info[4], info[5], date of birth
    var tmp_date = generateRandomDate(700000000000, 400000000000);
    var birth_date = tmp_date[0];
    tmp_date = generateRandomDate(700000000000, 100000000000);
    var issue_day = tmp_date[0];
    while (birth_date.split('/')[2] > issue_day.split('/')[2]) {
        tmp_date = generateRandomDate(700000000000, 400000000000);
        birth_date = tmp_date[0];
        tmp_date = generateRandomDate(700000000000, 100000000000);
        issue_day = tmp_date[0];
    }
    var expiration_day = tmp_date[1];
    tmp_info = new PIXI.Text(birth_date, {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 400;
    tmp_info.y = 220;
    info_ans.push(tmp_info);

    tmp_info = new PIXI.Text(issue_day, {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 400;
    tmp_info.y = 280;
    info_ans.push(tmp_info);

    tmp_info = new PIXI.Text(expiration_day, {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 400;
    tmp_info.y = 340;
    info_ans.push(tmp_info);

    tmp_info = new PIXI.Text(race_list[Math.floor(Math.random() * race_list.length)], {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        fill: 'black',
        align: 'left'
    });
    tmp_info.x = 650;
    tmp_info.y = 280;
    info_ans.push(tmp_info);

    if (img_num === 1 || img_num === 5 || img_num === 7 || img_num === 9) {
        tmp_info = new PIXI.Text(sex_list[1], {
            fontFamily: 'Roboto Bold',
            fontSize: 24,
            fill: 'black',
            align: 'left'
        });
    } else {
        tmp_info = new PIXI.Text(sex_list[0], {
            fontFamily: 'Roboto Bold',
            fontSize: 24,
            fill: 'black',
            align: 'left'
        });
    }

    tmp_info.x = 650;
    tmp_info.y = 340;
    info_ans.push(tmp_info);

    return info_ans;
}

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

function generateVisa() {
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

    container.addChild(yes);
    container.addChild(no);
}

function redisplay() {
    window.cancelAnimationFrame(animate);
    for (var i = container.children.length - 1; i >= 0; i--) { container.removeChild(container.children[i]); };
    container = new PIXI.Container();
    display();
    // setup();
}

function onyesClick() {
    animationStamp = true;
    animations();
    animate();
    window.setTimeout(redisplay, 3000);
    // for (var i = container.children.length - 1; i >= 0; i--) { container.removeChild(container.children[i]); };
    // container = new PIXI.Container();
    // display();

    // renderer.render(container);
}

function onnoClick() {
    animationStamp = false;
    animations();
    animate();
    window.setTimeout(redisplay, 3000);
}

function display(first_img_num) {
    if (first_img_num != null) {
        img_num = 5;

    } else {
        img_num = Math.floor(Math.random() * 10 + 1);

    }
    //Create the `portrait` sprite from the texture
    portrait = new PIXI.Sprite(
        PIXI.loader.resources["basics/triangulated_" + img_num + ".png"].texture
    );

    portrait.height = 450;
    portrait.width = 360;
    // portrait.scal.x = (0.0 + portrait.width) / renderer.width;
    container.addChild(portrait);

    approved = new PIXI.Sprite(PIXI.loader.resources["basics/approved.png"].texture);
    container.addChild(approved);

    approved.anchor.set(0.8);
    approved.position.x = 600;
    approved.position.y = 500;
    approved.scale.set(0.5);
    approved.alpha = 0;


    denied = new PIXI.Sprite(PIXI.loader.resources["basics/denied.png"].texture);
    container.addChild(denied);

    denied.anchor.set(0.8);
    denied.position.x = 600;
    denied.position.y = 500;
    denied.scale.set(0.5);
    denied.alpha = 0;

    generateGraphics();
    container.addChild(question_1);
    container.addChild(question_2);
    container.addChild(question_3);
    generateAns();
    for (var _i = 0; _i < info.length; _i++) {
        container.addChild(info[_i]);
    }
    info_ans = generateInfoAns();
    for (var _i = 0; _i < info_ans.length; _i++) {
        container.addChild(info_ans[_i]);
    }
    generateVisa();
    // setup();
    // animationSetup();
}


function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(container);
    PIXI.actionManager.update();
}

$(document).ready(function() {
    display(5);
});