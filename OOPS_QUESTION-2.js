class Circle{
    radius=1.0;
        color="red";
   
    constructor(radius,color){
      if(typeof(radius)!="undefined"){
    this.radius=radius;}
    if(typeof(color)!="undefined") {
        this.color=color};
        }  
  getRadius(){
    return this.radius;
  }
  getColor(){
    return this.color;
  }
  getArea(){
    return Math.PI*this.radius*this.radius;
  }
  getCircumference(){
    return Math.PI*2*this.radius;
  }
  }
  var circle1=new Circle(5,"yellow")
  console.log(circle1)
  console.log(circle1.getArea())
  var circle2=new Circle()
  console.log(circle2)
  console.log(circle2.getCircumference())