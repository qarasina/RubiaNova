import ex = require("excalibur");
import {Engine, Vector} from "excalibur";
import {Resources} from "../resources";

export class MotherActor extends ex.Actor {

    public _speed = 1

    constructor(x: number, y: number) {
        super({
            pos: new Vector(x, y)
        })
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine);

        this.addDrawing(Resources.Mother)
    }

    updateScenario(engine: Engine, delta: number): void {
        super.update(engine, delta);

        this.pos.y -= this._speed;

        if (this.pos.y <= 250) {
            this._speed = 0
        }

    }
}