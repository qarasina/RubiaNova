import ex = require("excalibur");
import {Actor, Engine, Scene, Vector} from "excalibur";
import {Resources} from "../resources";
import {FatherActor} from "../actors/FatherActor";
import {MotherActor} from "../actors/MotherActor";
import {DoctorActor} from "../actors/DoctorActor";
import {MainActor} from "../actors/MainActor";
import {BubbleEntity} from "../entity/BubbleEntity";
import {ScenarioHomeScene} from "./ScenarioHomeScene";

export class ScenarioHospitalScene extends Scene {

    private _startTime = performance.now()

    private _background = new Actor()
    private _father = new FatherActor(168, 350)
    private _mother = new MotherActor(609, 275)
    private _doctor = new DoctorActor(1074, 305)
    private _bubbles = []
    private _backgroundSong = Resources.BackgroundHospitalSong

    constructor(engine: Engine) {
        super(engine);

        this._bubbles.push(new BubbleEntity(this._father.pos.x, this._father.pos.y, Resources.FirstBubblesHospital))
        this._bubbles.push(new BubbleEntity(this._doctor.pos.x, this._doctor.pos.y, Resources.SecondBubblesHospital))
        this._bubbles.push(new BubbleEntity(this._mother.pos.x, this._mother.pos.y, Resources.ThreeBubblesHospital))
        this._bubbles.push(new BubbleEntity(this._doctor.pos.x, this._doctor.pos.y, Resources.FourBubblesHospital))
        this._bubbles.push(new BubbleEntity(this._doctor.pos.x, this._doctor.pos.y, Resources.FiveBubblesHospital))
    }

    calculateElapsedTime(): number {
        let timeDiff = performance.now() - this._startTime
        timeDiff /= 1000
        return Math.round(timeDiff)
    }

    onInitialize(_engine: Engine): void {
        this._background.addDrawing(Resources.BackgroundHospital)
        this._background.pos = new Vector(640,360)

        this.add(this._background)
        this.add(this._father)
        this.add(this._mother)
        this.add(this._doctor)
        this.add(this._bubbles[0])

        this._backgroundSong.play(5.0)
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta)

        const currentTime = this.calculateElapsedTime()

        this._bubbles[0]._update(engine, delta, this._father.pos.x, this._father.pos.y)
        this._bubbles[1]._update(engine, delta, this._doctor.pos.x, this._doctor.pos.y)
        this._bubbles[2]._update(engine, delta, this._mother.pos.x, this._mother.pos.y)
        this._bubbles[3]._update(engine, delta, this._doctor.pos.x, this._doctor.pos.y)
        this._bubbles[4]._update(engine, delta, this._doctor.pos.x, this._doctor.pos.y)

        console.log(currentTime)

        if (currentTime === 5) {
            this.remove(this._bubbles[0])
            this.add(this._bubbles[1])
        }

        if (currentTime === 10) {
            this.remove(this._bubbles[1])
            this.add(this._bubbles[2])
        }

        if (currentTime === 15)  {
            this.remove(this._bubbles[2])
            this.add(this._bubbles[3])
        }

        if (currentTime === 19) {
            this._mother.updateScenario(engine, delta)
            const main = new MainActor(615, 186)
            this.add(main)
        }

        if (currentTime === 20) {
            this._doctor._update(engine, delta)
            this.remove(this._bubbles[3])
            this.add(this._bubbles[4])
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.E) || currentTime === 28) {
            engine.add('scenarioHomeScene', new ScenarioHomeScene(engine))
            this._backgroundSong.stop()
            engine.goToScene('scenarioHomeScene')
        }

    }


}