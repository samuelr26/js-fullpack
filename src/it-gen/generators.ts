function *getLampIterator() {
    yield 'red';
    yield 'green';
    return 'lastValue';
    // implicit: return undefined;
}

let lampIterator = getLampIterator();

// console.log( lampIterator.next() );
// //> {value: "red", done: false}

// console.log( lampIterator.next() );
// //> {value: "green", done: false}

// console.log( lampIterator.next() );
// //> {value: "lastValue", done: true}

 // destructuring

// When equating an array to an iterable, iteration takes place.

let [head,] = lampIterator;

// console.log( head, [...lampIterator] );
//> red []

//combining generators
let countdownGenerator = function *() {
    let i = 10;
    while ( i > 0 ) yield --i;
}

let lampGenerator = function *() {
    yield 'red';
    yield 'green';
}

let countdownThenLampGenerator = function *() {
    yield *countdownGenerator();
    yield *lampGenerator();
}

//console.log( [...countdownThenLampGenerator()] );

// passing params to iterables

let greetings = function *() {
    let name = yield 'Hi!';
    yield `Hello, ${ name }!`;
}

let greetingIterator = greetings();

// console.log( greetingIterator.next() );
// //> Object {value: "Hi!", done: false}

// console.log( greetingIterator.next( 'Lewis' ) );
// //> Object {value: "Hello, Lewis!", done: false}

let sumSequence = function *( num ) {
    let sum = 0;
    for ( let i = 1; i <= num; ++i ) {
        sum += i;
        yield i;
    }
    return sum;
}

let wrapSumSequence = function *( num ) {
    let sum = yield *sumSequence( num );
    yield `The sum is: ${ sum }.`;
}

for ( let elem of wrapSumSequence( 3 ) ) {
   // console.log( elem );
}

