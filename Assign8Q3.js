console.log("Q3. Write a “person” class to hold all the details.");

class person{

    constructor(fName="unknown",lName="unknown",age="unknown",email="unknown",contactNo="unknown",city="unknown",nationality="unknown")
    {
        this.fName=fName;
        this.lName=lName;
        this.age=age;
        this.email=email;
        this.contactNo=contactNo;
        this.city=city;
        this.nationality=nationality;
    }

    print(){
        console.log( "First Name :"+   this.fName +" "+
                     "last Nmae  :"+  this.lName +" "+
                     "Age :"+   this.age +" "+
                     "Email :"+   this.email +" "+
                     "Contact No :"+  this.contactNo +" "+
                     "City :"+  this.city +" "+
                     "Nationality :"+  this.nationality
                    );
    }

}

person1= new person ("","",23,"123@gmail.com",1021001001,"Pune","Indian");

person1.print();