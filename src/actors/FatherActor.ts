import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "../resources";

export class FatherActor extends Actor {

    private _inverseAxe = false
    public _speed = 2;

    constructor(x: number, y: number) {
        super({
            pos: new Vector(x, y),
        })
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine);

        this.addDrawing('left', Resources.FatherLeft.asSprite())
        this.addDrawing('right', Resources.FatherRight.asSprite())

        this.setDrawing('left')
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta);

        if (this.pos.x >= 237)
            this._inverseAxe = false

        if (this.pos.x <= 118)
            this._inverseAxe = true

        if (this._inverseAxe) {
            this.pos.x += this._speed
            this.setDrawing('right')
        }
        else {
            this.pos.x -= this._speed
            this.setDrawing('left')
        }
    }
}