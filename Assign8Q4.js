console.log("Q4. write a class to calculate uber price.");

class uber {

    constructor(dist,availbilty=true,seaterNo)
    {
        
        this.dist=dist;
        this.availbilty=availbilty;
        this.seaterNo=seaterNo;
    }

    cal_fare()
    {   
        let Extracharges=30;
        let perKm=6;
        let basefee=10;
        let fare=this.dist*perKm;
        if(!this.availbilty)
        {
            console.log(fare+basefee+(this.seaterNo*10)+Extracharges); 
        }
        else
        {
            console.log(fare+basefee+(this.seaterNo*10));
        }
    }
}

passenger = new uber(5,false,3);

passenger.cal_fare();
