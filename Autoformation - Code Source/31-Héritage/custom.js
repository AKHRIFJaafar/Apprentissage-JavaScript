class vehicule {
    nbporte;
    nbroue;
    
        constructor ( nbporte , nbroue ){
        
            this.nbporte = nbporte
            this.nbroue = nbroue
        }
    }
    
    class voiture extends vehicule {
        marque;
        constructor (marque){
            super(4,4)
            this.marque = marque
           
        }
    }
    
    
    
    var voiture1 = new voiture ('Mercedes')
    var voiture2 = new voiture ('Fiat')
    var voiture3 = new voiture ('Tesla')
    console.log(voiture1,voiture2,voiture3);