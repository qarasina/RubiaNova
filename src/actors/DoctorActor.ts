import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "../resources";

export class DoctorActor extends Actor {

    private _speed = 1

    constructor(x: number, y: number) {
        super({
            pos: new Vector(x, y)
        })
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine)

        this.addDrawing('right', Resources.DoctorRight.asSprite())
        this.addDrawing('left', Resources.DoctorLeft.asSprite())

        this.setDrawing('right')
    }

    _update(engine: Engine, delta: number): void {
        super.update(engine, delta)
        this.setDrawing('left')

        this.pos.x -= this._speed
    }
}