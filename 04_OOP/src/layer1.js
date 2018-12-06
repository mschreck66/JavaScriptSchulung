
var k1 = {

    nr: 1001,
    'eine prop': 'aha?',
    stand: 0,
    einzahlen: function (betrag) { this.stand += betrag; },
    auszahlen: function(betrag) {

        if ( betrag > this.stand ) return false;
        this.stand = - betrag;
        return true;
    }
};

console.log(k1.nr);
console.log(k1['nr']);

k1.einzahlen(500);
k1.auszahlen(300);
k1['auszahlen'](300);

k1[0]

var k2 = {};

console.log(JSON.stringify(k1));

