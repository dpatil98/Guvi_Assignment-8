console.log("Q1.)  Class - Movie")


class Movie{
    
    constructor(title,studio,rating="PG"){
       
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
    


    getPG(AM){
        
      console.log( AM.filter(m => m.rating==="PG") );
        //console.log(AM);

    }
 }


 All_Movies=[];
 All_Movies.push(new Movie("Casino Royal", "Eon Productions", "PG­13") );
 All_Movies.push(new Movie("Inception", "Legendary Pictures", "PG­16" ) );
 All_Movies.push(new Movie("Tenet", "Warner Bros",  ));
 All_Movies.push(new Movie("The Dark Knight", "Warner Bros", "PG" ));

 All_Movies[0].getPG(All_Movies) ;
