function add(a,b) {
    return a+b;
}

var fn = add.bind(null,17);

alert( fn(3) );
