import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "../resources";

export class FireEntity extends Actor {
    constructor(x: number, y: number) {
        super({
            pos: new Vector(x, y)
        })
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine)
        this.addDrawing(Resources.Fire)
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta)
        this.pos.x += 3
    }
}