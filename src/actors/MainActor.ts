import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "../resources";
import ex = require("excalibur");

export class MainActor extends Actor {

    private _startTime = performance.now();
    private _speed = 2;
    public _life = 3;

    constructor(x: number, y: number) {
        super({
            pos: new Vector(x, y)
        });
    }

    calculateElapsedTime(): number {
        let timeDiff = performance.now() - this._startTime;
        timeDiff /= 1000;
        return Math.round(timeDiff);
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine);

        this.addDrawing('face', Resources.MainFace.asSprite());
        this.addDrawing("main", Resources.Main.asSprite());
        this.addDrawing('right', Resources.MainRight.asSprite());
        this.addDrawing("left", Resources.MainLeft.asSprite());

        this.setDrawing('face');
    }

    _updateHome(engine: Engine, delta: number): void {
        super.update(engine, delta);

        const currentTime = this.calculateElapsedTime();

        if (currentTime >= 12)
            this.pos.y += this._speed;

    }

    _updateSantaNova(engine: Engine, delta: number): void {
        super.update(engine, delta);

        this.setDrawing("left");

        const currentTime = this.calculateElapsedTime();

        this.pos.x -= this._speed;

        if (this.pos.x <= 600)
            this.pos.x += this._speed;

        if (currentTime >= 6) {
            this.pos.x += this._speed;
            this.pos.x -= this._speed;
            this.setDrawing("main");
            this.pos.y -= this._speed;
        }

    }

    _update(engine: Engine, delta: number): void {
        super.update(engine, delta);

        this._speed = 3;

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
            this.pos.y -= this._speed;
            this.setDrawing("main");
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
            this.pos.y += this._speed;
            this.setDrawing("face");
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
            this.pos.x += this._speed;
            this.setDrawing("right");
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
            this.pos.x -= this._speed;
            this.setDrawing("left");
        }
    }

    _updateFinishHome(engine: Engine, delta: number): void {
        super.update(engine, delta);

        this.setDrawing('right');
    }
}
