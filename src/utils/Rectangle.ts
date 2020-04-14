export class Rectangle {
    public _x = 0;
    public _y = 0;
    public _width = 0;
    public _height = 0;

    constructor(x: number, y: number, width: number, height: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    onIntersect(r2: Rectangle) {
        return !(r2._x > (this._x + this._width)
            || (r2._x + r2._width) < this._x
            || r2._y > (this._y + this._height)
            || (r2._y + this._height) < this._y
        );
    }
}
