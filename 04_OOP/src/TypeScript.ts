//class GK2 extends TKonto {
//}

interface IKonto {
    einzahlen(betrag:number): void;    
}

class TKonto implements IKonto{

    private _stand = 0;
    public dispo: number;

    constructor(public nr: number) {}

    //get stand() {
    //    return this._stand;
    //tsc

    einzahlen(betrag: number): void {
        this._stand += betrag;        
    }

    auszahlen(betrag:number): boolean {
        if ( betrag > this._stand ) return false;
        this._stand -= betrag;
        return true;
    }
}

var k1 = new TKonto(22);
var stand: string;

interface Kunde {
    id: number;
}

var ku: Kunde = { id: 17 };

function printKunde(K: Kunde) {

    console.log (K.id);
}
