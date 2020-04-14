import * as ex from 'excalibur';

// Scenario
const backgroundScenario = require('./assets/images/scenario.png');
const backgroundScenarioSong = require("./assets/songs/scenariohist.mp3");

// Scenario Hospital
const backgroundHospital = require("./assets/images/hospital.png");
const doctorRight = require("./assets/images/doctor.png");
const doctorLeft = require("./assets/images/doctorleft.png");
const fatherRigh = require("./assets/images/father.png");
const fatherLeft = require("./assets/images/fatherleft.png");
const mother = require("./assets/images/mother.png");
const mainFace = require("./assets/images/mainface.png");
const main = require("./assets/images/main.png");
const mainRight = require("./assets/images/mainright.png");
const mainLeft = require("./assets/images/mainleft.png");
const firstBubblesHospital = require("./assets/images/firstBubblesHospital.png");
const secondBubblesHospital = require("./assets/images/secondBubblesHospital.png");
const threeBubblesHospital = require("./assets/images/threeBubblesHospital.png");
const fourBubblesHospital = require("./assets/images/fourBubblesHospital.png");
const fiveBubblesHospital = require("./assets/images/fiveBubblesHospital.png");
const backgroundHospitalSong = require("./assets/songs/backgroundHospitalSong.mp3");

// Scenario Home
const backgroundHome = require("./assets/images/home.png");
const julia = require('./assets/images/julia.png');
const juliaFace = require("./assets/images/juliaface.png");
const juliaRight = require("./assets/images/juliaright.png");
const juliaLeft = require("./assets/images/julialeft.png");
const firstBubbleHome = require("./assets/images/firstBubbleHome.png");
const secondBubbleHome = require("./assets/images/secondBubbleHome.png");
const threeBubbleHome = require("./assets/images/threeBubbleHome.png");
const fourBubbleHome = require("./assets/images/fourBubbleHome.png");
const fiveBubbleHome = require("./assets/images/fiveBubbleHome.png");
const backgroundHomeSong = require("./assets/songs/home.mp3");

// Scenario Santa Nova
const backgroundSantaNova = require("./assets/images/santanova.png");
const juliaAdvert = require("./assets/images/juliaadvert.png");

// First Arena
const backgroundArenaOne = require("./assets/images/arenaone.png");
const firstMob = require("./assets/images/mob.png");
const heart = require("./assets/images/heart.png");
const fire = require("./assets/images/fire.png");
const advertBubble = require("./assets/images/advertBubble.png");

let Resources = {
    BackgroundScenario: new ex.Texture(backgroundScenario),
    BackgroundSong: new ex.Sound(backgroundScenarioSong),
    BackgroundHospital: new ex.Texture(backgroundHospital),
    DoctorRight: new ex.Texture(doctorRight),
    DoctorLeft: new ex.Texture(doctorLeft),
    FatherRight: new ex.Texture(fatherRigh),
    FatherLeft: new ex.Texture(fatherLeft),
    Mother: new ex.Texture(mother),
    MainFace: new ex.Texture(mainFace),
    MainRight: new ex.Texture(mainRight),
    MainLeft: new ex.Texture(mainLeft),
    Main: new ex.Texture(main),
    FirstBubblesHospital: new ex.Texture(firstBubblesHospital),
    SecondBubblesHospital: new ex.Texture(secondBubblesHospital),
    ThreeBubblesHospital: new ex.Texture(threeBubblesHospital),
    FourBubblesHospital: new ex.Texture(fourBubblesHospital),
    FiveBubblesHospital: new ex.Texture(fiveBubblesHospital),
    BackgroundHospitalSong: new ex.Sound(backgroundHospitalSong),
    BackgroundHome: new ex.Texture(backgroundHome),
    Julia: new ex.Texture(julia),
    JuliaFace: new ex.Texture(juliaFace),
    JuliaRight: new ex.Texture(juliaRight),
    JuliaLeft: new ex.Texture(juliaLeft),
    FirstBubbleHome: new ex.Texture(firstBubbleHome),
    SecondBubbleHome: new ex.Texture(secondBubbleHome),
    ThreeBubbleHome: new ex.Texture(threeBubbleHome),
    FourBubbleHome: new ex.Texture(fourBubbleHome),
    FiveBubbleHome: new ex.Texture(fiveBubbleHome),
    BackgroundHomeSong: new ex.Sound(backgroundHomeSong),
    BackgroundSantaNova: new ex.Texture(backgroundSantaNova),
    JuliaAdvert: new ex.Texture(juliaAdvert),
    BackgroundArenaOne: new ex.Texture(backgroundArenaOne),
    FirstMob: new ex.Texture(firstMob),
    Heart: new ex.Texture(heart),
    Fire: new ex.Texture(fire),
    AdvertBubble: new ex.Texture(advertBubble)
};

export { Resources };
