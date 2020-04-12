import {Actor, Engine, Texture, Vector} from "excalibur";
import ex = require("excalibur");

export class BubbleEntity extends Actor {

    private readonly _bubbleName: Texture

    constructor(x: number, y: number, bubbleName: Texture) {
        super({
            pos: new Vector(x, y)
        })
        this._bubbleName = bubbleName
    }

    onInitialize(_engine: Engine): void {
        this.addDrawing(this._bubbleName)
    }

    _update(engine: Engine, delta: number, x: number, y: number): void {
        this.pos.x = x - 24
        this.pos.y = y - 75
    }
}