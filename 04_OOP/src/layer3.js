// die Klasse
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

var k1 = new Konto(1001);
var k2 = new Konto(1002);

var objectFactory = function(constructorArgs) {
    
    var target = Obj.create(className.prototype);
    var constructorArgs = Array.prototype.slice.call(arguments,1);
    
    className.apply(target, constructorArgs);
    return target;
}

var k3 = objectFactory(Konto,1003);


