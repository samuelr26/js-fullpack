//@ts-nocheck
let firstElement = { order: 1 }, secondElement = { order: 2 };
let ws = new WeakSet( [ firstElement, secondElement ] );

console.log('has firstElement: '+ws.has( firstElement ));
//> true
delete firstElement;
// firstElement is removed from the weak set

// weak - maps
let firstElement = { order: 1 }, secondElement = { order: 2 };
let wm = new WeakMap();

wm.set( firstElement, 1 );
wm.set( secondElement, {} );

console.log(wm.get( secondElement ));
//> {}
 
delete secondElement;
// secondElement is removed from the weak map