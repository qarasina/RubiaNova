import {Actor, Engine, Scene, Vector} from "excalibur";
import {Resources} from "../resources";
import ex = require("excalibur");
import {ScenarioHospitalScene} from "./ScenarioHospitalScene";

export class ScenarioScene extends Scene {

    private readonly _backgroundScenar = new Actor();
    private readonly _startTime = performance.now();
    private readonly _backgroundSong = Resources.BackgroundSong;

    public constructor(engine: Engine) {
        super(engine);

        this._backgroundScenar.pos = new Vector(640,360);
        this._backgroundScenar.addDrawing(Resources.BackgroundScenario);
    }

    calculateElapsedTime(): number {
        let timeDiff = performance.now() - this._startTime;
        timeDiff /= 1000;
        return Math.round(timeDiff);
    }

    onInitialize(_engine: Engine): void {
        this.add(this._backgroundScenar);
        this._backgroundSong.play(5.0);
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta);

        const currentTime = this.calculateElapsedTime();

        if (currentTime >= 31 || engine.input.keyboard.isHeld(ex.Input.Keys.E)) {
            engine.add('scenarioHospitalScene', new ScenarioHospitalScene(engine));
            this._backgroundSong.stop();
            engine.goToScene('scenarioHospitalScene');
        }
    }
}

