import {Actor, Engine, Texture, Vector} from "excalibur";
import {Resources} from "../resources";

export class HeartEntity extends Actor {

    private readonly _texture = Resources.Heart;

    constructor(x: number, y: number) {
        super({
            pos: new Vector(x, y)
        });

    }

    onInitialize(_engine: Engine): void {
        this.addDrawing(this._texture);
    }
}
