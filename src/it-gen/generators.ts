function *getLampIterator() {
    yield 'red';
    yield 'green';
    return 'lastValue';
    // implicit: return undefined;
}

let lampIterator = getLampIterator();

console.log( lampIterator.next() );
//> {value: "red", done: false}

console.log( lampIterator.next() );
//> {value: "green", done: false}

console.log( lampIterator.next() );
//> {value: "lastValue", done: true}