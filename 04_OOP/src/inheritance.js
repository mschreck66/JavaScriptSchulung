// Vererbung
function Konto(nr) {

    this.nr = nr;
    this.stand = 0;

}

Konto.prototype.einzahlen = function (betrag) { this.stand += betrag; };
Konto.prototype.auszahlen = function(betrag) {
    
    if ( betrag > this.stand ) return false;
    this.stand = - betrag;
    return true;        
}

function GiroKonto(nr) {    
    Konto.apply(this,arguments);
    this.dispo = 1000;
}
GiroKonto.prototype = Object.create(Konto.prototype);

GiroKonto.prototype.auszahlen = function(betrag) {
    
    if ( betrag > this.stand + this.dispo ) return false;
    this.stand = - betrag;
    return true;        
}


    
});


var gk = new GiroKonto(2001);

console.log(gk.nr);