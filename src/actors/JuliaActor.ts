import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "../resources";

export class JuliaActor extends Actor {

    private _inverseAxe = false;
    private _startTime = performance.now();
    private _speed = 3;

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

        this.addDrawing('julia', Resources.Julia.asSprite());
        this.addDrawing('face', Resources.JuliaFace.asSprite());
        this.addDrawing('right', Resources.JuliaRight.asSprite());
        this.addDrawing('left', Resources.JuliaLeft.asSprite());

        this.setDrawing('julia');
    }


    _updateHome(engine: Engine, delta: number): void {
        super.update(engine, delta);

        const currentTime = this.calculateElapsedTime();

        if (this._inverseAxe)
            this.setDrawing("face");
        else
            this.setDrawing('julia');

        if (currentTime >= 12) {
            this._inverseAxe = true;
            this.pos.y += this._speed * 2;
        }

        this.pos.y -= this._speed;

        if (this.pos.y <= 480)
            this.pos.y += this._speed;

    }

    _updateSantaNova(engine: Engine, delta: number): void {
        super.update(engine, delta);

        this.setDrawing("left");

        this.pos.x -= this._speed;

        if (this.pos.x <= 500) {
            this.pos.x += this._speed;
            this.setDrawing("right");
        }
    }

    _updateFinishHome(engine: Engine, delta: number, currentTime: number): void {
        super.update(engine, delta);
        this.setDrawing("left")
    }
}
