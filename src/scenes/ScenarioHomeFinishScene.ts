import {Actor, Engine, Scene, Vector} from "excalibur";
import {Resources} from "../resources";
import {BubbleEntity} from "../entity/BubbleEntity";
import {MainActor} from "../actors/MainActor";
import {JuliaActor} from "../actors/JuliaActor";

export class ScenarioHomeFinishScene extends Scene {

    private readonly _background = new Actor();
    private readonly _main = new MainActor(732, 297);
    private readonly _julia = new JuliaActor(807, 297);
    private readonly _homeSong = Resources.BackgroundHomeSong;
    private _startTime = performance.now();

    private readonly _bubbles = [];

    constructor(engine: Engine) {
        super(engine);

        this._background.pos = new Vector(640,360);
        this._background.addDrawing(Resources.BackgroundHome);

        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.FirstBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.SecondBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.ThreeBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.FourBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.FiveBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.SixBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.SevenBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.EightBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.NineBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.TenBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.ElevenBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.TwelveBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.ThirteenBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._main.pos.x, this._main.pos.y, Resources.FourteenBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.FifteenBubbleFinishHome));
        this._bubbles.push(new BubbleEntity(this._julia.pos.x, this._julia.pos.y, Resources.SixteenBubbleFinishHome));
    }

    calculateElapsedTime(): number {
        let timeDiff = performance.now() - this._startTime;
        timeDiff /= 1000;
        return Math.round(timeDiff);
    }

    onInitialize(_engine: Engine): void {
        super.onInitialize(_engine);

        this.add(this._background);
        this.add(this._main);
        this.add(this._julia);
       // this._homeSong.play(5.0)
    }

    update(engine: Engine, delta: number): void {
        super.update(engine, delta);

        const currentTime = this.calculateElapsedTime();

        this._main._updateFinishHome(engine, delta);
        this._julia._updateFinishHome(engine, delta, currentTime);

        this._bubbles[0]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[1]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[2]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[3]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[4]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[5]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[6]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[7]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[8]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[9]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[10]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[11]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[12]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[13]._update(engine, delta, this._main.pos.x, this._main.pos.y);
        this._bubbles[14]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);
        this._bubbles[15]._update(engine, delta, this._julia.pos.x, this._julia.pos.y);

        switch (currentTime) {
            case 3:
                this.add(this._bubbles[0])
                break;
            case 6:
                this.remove(this._bubbles[0])
                this.add(this._bubbles[1])
                break;
            case 9:
                this.remove(this._bubbles[1])
                this.add(this._bubbles[2])
                break;
            case 12:
                this.remove(this._bubbles[2])
                this.add(this._bubbles[3])
                break;
            case 15:
                this.remove(this._bubbles[3])
                this.add(this._bubbles[4])
                break;
            case 18:
                this.remove(this._bubbles[4])
                this.add(this._bubbles[5])
                break;
            case 21:
                this.remove(this._bubbles[5])
                this.add(this._bubbles[6])
                break;
            case 24:
                this.remove(this._bubbles[6])
                this.add(this._bubbles[7])
                break;
            case 27:
                this.remove(this._bubbles[7])
                this.add(this._bubbles[8])
            case 30:
                this.remove(this._bubbles[8])
                this.add(this._bubbles[9])
                break;
            case 33:
                this.remove(this._bubbles[9])
                this.add(this._bubbles[10])
                break;
            case 36:
                this.remove(this._bubbles[10])
                this.add(this._bubbles[11])
                break;
            case 39:
                this.remove(this._bubbles[11])
                this.add(this._bubbles[12])
                break;
            case 42:
                this.remove(this._bubbles[12])
                this.add(this._bubbles[13])
                break;
            case 45:
                this.remove(this._bubbles[13])
                this.add(this._bubbles[14])
                break;
            case 48:
                this.remove(this._bubbles[14])
                this.add(this._bubbles[15])
                break;
            case 51:
                this.remove(this._bubbles[15])
                this.remove(this._main)
                break;
            default:
                break;
        }
        console.log(currentTime)
    }
}
