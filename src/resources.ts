import * as ex from 'excalibur';
import {Sound, Texture} from "excalibur";

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

// Home finish state
const firstBubbleFinishHome = require("./assets/images/FirstBubbleFinishHome.png")
const secondBubbleFinishHome = require("./assets/images/SecondBubbleFinishHome.png")
const threeBubbleFinishHome = require("./assets/images/ThreeBubbleFinishHome.png")
const fourBubbleFinishHome = require("./assets/images/FourBubbleFinishHome.png")
const fiveBubbleFinishHome = require("./assets/images/FiveBubbleFinishHome.png")
const sixBubbleFinishHome = require("./assets/images/SixBubbleFinishHome.png")
const sevenBubbleFinishHome = require("./assets/images/SevenBubbleFinishHome.png")
const eightBubbleFinishHome = require("./assets/images/EightBubbleFinishHome.png")
const nineBubbleFinishHome = require("./assets/images/NineBubbleFinishHome.png")
const tenBubbleFinishHome = require("./assets/images/TenBubbleFinishHome.png")
const elevenBubbleFinishHome = require("./assets/images/ElevenBubbleFinishHome.png")
const twelveBubbleFinishHome = require("./assets/images/TwelveBubbleFinishHome.png")
const thirteenBubbleFinishHome = require("./assets/images/ThirteenBubbleFinishHome.png")
const fourteenBubbleFinishHome = require("./assets/images/FourteenBubbleFinishHome.png")
const fifteenBubbleFinishHome = require("./assets/images/FifteenBubbleFinishHome.png")
const sixteenBubbleFinishHome = require("./assets/images/SixteenBubbleFinishHome.png")


let Resources = {
    FirstBubbleFinishHome: new Texture(firstBubbleFinishHome),
    SecondBubbleFinishHome: new Texture(secondBubbleFinishHome),
    ThreeBubbleFinishHome: new Texture(threeBubbleFinishHome),
    FourBubbleFinishHome: new Texture(fourBubbleFinishHome),
    FiveBubbleFinishHome: new Texture(fiveBubbleFinishHome),
    SixBubbleFinishHome: new Texture(sixBubbleFinishHome),
    SevenBubbleFinishHome: new Texture(sevenBubbleFinishHome),
    EightBubbleFinishHome: new Texture(eightBubbleFinishHome),
    NineBubbleFinishHome: new Texture(nineBubbleFinishHome),
    TenBubbleFinishHome: new Texture(tenBubbleFinishHome),
    ElevenBubbleFinishHome: new Texture(elevenBubbleFinishHome),
    TwelveBubbleFinishHome: new Texture(twelveBubbleFinishHome),
    ThirteenBubbleFinishHome: new Texture(thirteenBubbleFinishHome),
    FourteenBubbleFinishHome: new Texture(fourteenBubbleFinishHome),
    FifteenBubbleFinishHome: new Texture(fifteenBubbleFinishHome),
    SixteenBubbleFinishHome: new Texture(sixteenBubbleFinishHome),
    BackgroundScenario: new Texture(backgroundScenario),
    BackgroundSong: new Sound(backgroundScenarioSong),
    BackgroundHospital: new Texture(backgroundHospital),
    DoctorRight: new Texture(doctorRight),
    DoctorLeft: new Texture(doctorLeft),
    FatherRight: new Texture(fatherRigh),
    FatherLeft: new Texture(fatherLeft),
    Mother: new Texture(mother),
    MainFace: new Texture(mainFace),
    MainRight: new Texture(mainRight),
    MainLeft: new Texture(mainLeft),
    Main: new Texture(main),
    FirstBubblesHospital: new Texture(firstBubblesHospital),
    SecondBubblesHospital: new Texture(secondBubblesHospital),
    ThreeBubblesHospital: new Texture(threeBubblesHospital),
    FourBubblesHospital: new Texture(fourBubblesHospital),
    FiveBubblesHospital: new Texture(fiveBubblesHospital),
    BackgroundHospitalSong: new Sound(backgroundHospitalSong),
    BackgroundHome: new Texture(backgroundHome),
    Julia: new Texture(julia),
    JuliaFace: new Texture(juliaFace),
    JuliaRight: new Texture(juliaRight),
    JuliaLeft: new Texture(juliaLeft),
    FirstBubbleHome: new Texture(firstBubbleHome),
    SecondBubbleHome: new Texture(secondBubbleHome),
    ThreeBubbleHome: new Texture(threeBubbleHome),
    FourBubbleHome: new Texture(fourBubbleHome),
    FiveBubbleHome: new Texture(fiveBubbleHome),
    BackgroundHomeSong: new Sound(backgroundHomeSong),
    BackgroundSantaNova: new Texture(backgroundSantaNova),
    JuliaAdvert: new Texture(juliaAdvert),
    BackgroundArenaOne: new Texture(backgroundArenaOne),
    FirstMob: new Texture(firstMob),
    Heart: new Texture(heart),
    Fire: new Texture(fire),
    AdvertBubble: new Texture(advertBubble)
};

export { Resources };
