class Uber{
    constructor(city,km,fare){
        this.city=city;
        this.km=km
        this.fare=fare;
        this.rate_km=14.27;
  }
  
  getFare(){
    
        return this.rate_km*this.km;
   
  }
  }
  var calcfare= new Uber("chennai",25)
  console.log(calcfare.getFare())