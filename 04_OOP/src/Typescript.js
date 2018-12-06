//class GK2 extends TKonto {
//}
var TKonto = /** @class */ (function () {
    function TKonto(nr) {
        this.nr = nr;
        this._stand = 0;
    }
    //get stand() {
    //    return this._stand;
    //tsc
    TKonto.prototype.einzahlen = function (betrag) {
        this._stand += betrag;
    };
    TKonto.prototype.auszahlen = function (betrag) {
        if (betrag > this._stand)
            return false;
        this._stand -= betrag;
        return true;
    };
    return TKonto;
}());
var k1 = new TKonto(22);
var stand;
