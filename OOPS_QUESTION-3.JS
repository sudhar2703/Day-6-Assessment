//3.Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,mobile_no,city,work){
       this.name=name;
       this.age=age;
       this.gender=gender;
       this.mobile_no=mobile_no;
       this.city=city;
       this.work=work;
    }
    getPersonData(){
        return(`Name: ${this.name} Age: ${this.age} Gender:${this.gender} Mobile_no: ${this.mobile_no} City: ${this.city} Work: ${this.work}`)
    }

}
 var person1= new Person("selvakumar",26,"male",7673838373,"palani","student")
 console.log(person1.getPersonData())