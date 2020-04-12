import {Actor, Engine, Scene, Vector} from "excalibur";
import {Resources} from "../resources";
import {HeartEntity} from "../entity/HeartEntity";
import {MainActor} from "../actors/MainActor";
import {BubbleEntity} from "../entity/BubbleEntity";
import {FireEntity} from "../entity/FireEntity";
import {ScenarioScene} from "./ScenarioScene";
import {Rectangle} from "../utils/Rectangle";

export class ArenaScenarioScene extends Scene {

    private _background = new Actor()
    private _main = new MainActor(242, 282)
    private _mob = new Actor()
    private _advert = new BubbleEntity(0, 0, Resources.AdvertBubble)
    private _hearts = []
    private _fire = new FireEntity(242, 282)
    private _backgroundSong = Resources.BackgroundHospitalSong

    constructor(engine: Engine) {
        super(engine);
        this._background.pos = new Vector(640,360)

        this._hearts.push(new HeartEntity(508, 637))
        this._hearts.push(new HeartEntity(568, 637))
        this._hearts.push(new HeartEntity(628, 637))

        this._mob.pos = new Vector(996, 282)
    }


    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine)

        this._background.addDrawing(Resources.BackgroundArenaOne)
        this._mob.addDrawing(Resources.FirstMob)

        this.add(this._background)
        this.add(this._main)
        this.add(this._mob)

        this._hearts.map(heart => this.add(heart))
        this._backgroundSong.play(5.0)
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta)

        if (this._main._life === 1)  {
            this._main.pos = new Vector(242, 282)
            this._mob.pos = new Vector(996, 282)
            this._main.setDrawing("right")
            this._advert.pos.x = this._main.pos.x
            this._advert.pos.y = this._main.pos.y - 75
            this.add(this._advert)
            this.add(this._fire)
            if (this._fire.pos.x > 1000) {
                this._backgroundSong.stop()
                engine.add("LuminusScene", new ScenarioScene(engine))

                engine.goToScene("LuminusScene")
            }
        }

        if (this._mob.pos.x > this._main.pos.x) {
            this._mob.pos.x -= 5
        }
        if (this._mob.pos.x < this._main.pos.x) {
            this._mob.pos.x += 5
        }
        if (this._mob.pos.y > this._main.pos.y) {
            this._mob.pos.y -= 5
        }
        if (this._mob.pos.y < this._main.pos.y) {
            this._mob.pos.y += 5
        }

        const hitboxMob = new Rectangle(this._mob.pos.x, this._mob.y, 64, 64)
        const hitboxMain = new Rectangle(this._main.pos.x, this._main.y, 44, 64)

        if (hitboxMain.onIntersect(hitboxMob)) {
            this._main._life -= 1
            this._main.pos = new Vector(242, 282)
            this._mob.pos = new Vector(996, 282)
            this._hearts.pop()
            this.remove(this._hearts[0])
        }

    }


}