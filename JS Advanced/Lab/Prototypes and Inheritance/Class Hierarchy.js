function hierarchy(){
    
    class Figure{
        constructor(units = 'cm'){
            this.units = units;
        }

        convert(value){
            if(this.units == 'm'){
                return value /= 10;
            }else if(this.units == 'mm'){
                return value *= 10;
            }
        }

        changeUnits(value){
            this.units = value;
        }

        toString(){
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure{
        constructor(radius,units){
            super(units);
            this._radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
        get radius() {
            return this.convert(this._radius);
        }

        toString(){
            return `Figures units: ${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width,height,units){
            super(units);
            this._width = width;
            this._height = height;
        }

        get area(){
            return this.width * this.height;
        }

        get width() {
            return this.convert(this._width);
        }
        get height() {
            return this.convert(this._height);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure,Circle,Rectangle};
    
}
let c = new Circle(5);
debugger
console.log(c.area); // 78.53981633974483

console.log(c.toString());