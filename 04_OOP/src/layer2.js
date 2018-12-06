// der Prototyp

var kontoPrototyp = {

    einzahlen: function (betrag) { this.stand += betrag; },
    auszahlen: function(betrag) {

        if ( betrag > this.stand ) return false;
        this.stand = - betrag;
        return true;        
    },
    blz: 12345678

}

var k1 = {

    nr: 1001,
    'eine prop': 'aha?',
    stand: 0,
    __proto__: kontoPrototyp,
    x:1    
};

var k2 = {};
k2.nr = 1002;
k2.stand = 0;
k2.__proto__ = kontoPrototyp;   //ES2015

var k4 = Object.create(kontoPrototyp);  //ES 5
k4.nr = 200;
k4.stand = 0;

k1.blz = 1112233;
console.log(k1.hasOwnProperty('blz'));
console.log(k2.hasOwnProperty('blz'));



