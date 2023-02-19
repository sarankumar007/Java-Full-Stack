
class Shape{
    
    constructor(colour) {
        this.colour=colour;
        
    }
    type="square";
    describe(){
        console.log(`A ${this.colour} ${this.type}`)
    }
}



class Rectangle extends Shape{
    type="rectangle"
    constructor(colour,width,height)
    {
        super(colour);
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}
class Square extends Shape{
    constructor(colour,sidelength)
    {
        super(colour);
        this.sidelength=sidelength;
    }
    area(){
        return this.sidelength*this.sidelength;
    }
}

const square = new Square("pink", 5);
console.log( square.area() );

const rectangle = new Rectangle("blue", 5,6);
console.log( rectangle.area() );

for(const shape of [square,rectangle])
{
    shape.describe();
}
