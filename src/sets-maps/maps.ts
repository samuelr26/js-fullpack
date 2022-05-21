/**
 * @maps : maps can have keys of any type, and the keys are not converted to strings
 * 0 and '0' are two different, and valid keys.
 * @set method is chainable
 */

 let horses = new Map();

 horses.set( 8, 'Chocolate' );
 horses.set( 3, 'Filippone' );
//  console.log(horses);

 let newHorses = new Map().set(89,"husky").set('test',"enum")
 
//console.log(newHorses);

let arrhorses = new Map( [[8, 'Chocolate'], [3, 'Filippone' ]] );
// console.log(arrhorses);

/**
 * @iterations
 * Order of elements in the forEach method is value, key.
 * The order in the for...of loop is key, value.
 */

horses.forEach((key,val)=> console.log(`value of ${key}:${val}`))

for ( let [ key, value ] of horses ) {
    console.log( key, value );
}
