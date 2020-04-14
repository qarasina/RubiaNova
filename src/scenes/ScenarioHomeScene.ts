import {Actor, Engine, Scene, Vector} from "excalibur";
import {Resources} from "../resources";
import {MainActor} from "../actors/MainActor";
import {JuliaActor} from "../actors/JuliaActor";
import {BubbleEntity} from "../entity/BubbleEntity";
import ex = require("excalibur");
import {ScenarioSantaNova} from "./ScenarioSantaNova";

export class ScenarioHomeScene extends Scene {

    private _startTime = performance.now();
    private _backgroundHome = new Actor();
    private _main = new MainActor(546, 449);
    private _julia = new JuliaActor(546, 710);
    private _bubbles = [];
    private _backgroundSong = Resources.BackgroundHomeSong;

    constructor(engine: Engine) {
        super(engine);

        this._backgroundHome.pos = new Vector(640,360);

        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.FirstBubbleHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.SecondBubbleHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.ThreeBubbleHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.FourBubbleHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.FiveBubbleHome));
    }

    calculateElapsedTime(): number {
        let timeDiff = performance.now() - this._startTime;
        timeDiff /= 1000;
        return Math.round(timeDiff);
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine);

        this._backgroundHome.addDrawing(Resources.BackgroundHome);

        this.add(this._backgroundHome);
        this.add(this._main);
        this.add(this._julia);
        this.add(this._bubbles[0]);

        this._backgroundSong.play(5.0);
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta);

        const currentTime = this.calculateElapsedTime();

        if (currentTime < 3) {
            this._main.setDrawing("main");
        }

        this._julia._updateHome(engine, delta);
        this._main._updateHome(engine, delta);

        this._bubbles[0]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[1]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[2]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[3]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[4]._update(engine, delta, this._main.pos.x, this._main.pos.y);

        if (currentTime === 3) {
            this.remove(this._bubbles[0]);
            this.add(this._bubbles[1]);
            this._main.setDrawing("face");
        }

        if (currentTime === 5) {
            this.remove(this._bubbles[1]);
            this.add(this._bubbles[2]);
        }

        if (currentTime === 7) {
            this.remove(this._bubbles[2]);
            this.add(this._bubbles[3]);
        }

        if (currentTime === 9) {
            this.remove(this._bubbles[3]);
            this.add(this._bubbles[4]);
        }

        if (currentTime === 11) {
            this.remove(this._bubbles[4]);
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.E) || this._main.pos.y >= 700) {
            engine.add('scenarioSantaNova', new ScenarioSantaNova(engine));
            this._backgroundSong.stop();
            engine.goToScene('scenarioSantaNova');
        }
    }
}
