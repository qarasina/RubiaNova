import {Actor, Engine, Scene, Vector} from "excalibur";
import {Resources} from "../resources";
import {MainActor} from "../actors/MainActor";
import {BubbleEntity} from "../entity/BubbleEntity";
import {JuliaActor} from "../actors/JuliaActor";
import {ArenaScenarioScene} from "./ArenaScenarioScene";
import ex = require("excalibur");

export class ScenarioSantaNova extends Scene {

    private _background = new Actor();
    private _main = new MainActor(1074, 100);
    private _julia = new JuliaActor(974, 100);
    private _advert = new BubbleEntity(0, 0, Resources.JuliaAdvert);
    private _startTime = performance.now();
    private _backgroundSong = Resources.BackgroundHomeSong;

    constructor(engine: Engine) {
        super(engine);
        this._background.pos = new Vector(640,360);
    }

    calculateElapsedTime(): number {
        let timeDiff = performance.now() - this._startTime;
        timeDiff /= 1000;
        return Math.round(timeDiff);
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine);

        this._background.addDrawing(Resources.BackgroundSantaNova);

        this.add(this._background);

        this.add(this._main);

        this.add(this._julia);

        this._backgroundSong.play(5.0);
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta);

        this._julia._updateSantaNova(engine, delta);
        this._main._updateSantaNova(engine, delta);

        const currentTime = this.calculateElapsedTime();

        if (currentTime >= 4) {
            this.add(this._advert);
            this._advert.pos.x = this._julia.pos.x;
            this._advert.pos.y = this._julia.pos.y - 50;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.E) || this._main.pos.y < 0) {
            engine.add('arenaScenarioScene', new ArenaScenarioScene(engine));
            this._backgroundSong.stop();
            engine.goToScene("arenaScenarioScene");
        }
    }
}
