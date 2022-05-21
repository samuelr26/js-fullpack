/**
 * lazy evaluation
 * infinite sequences
 * ES6 comes with the iterable protocol : defines iterating behavior of js objs
 */

/**
 * An @iterable_object has an @iterator_method with key : @Symbol.iterator
 * An @iterator_object is a data structure that has a @next method.
 * 
 * @return value of @next fn has {done:boolean,value:null}
 * when @done is true, @iteration ends and val is not considered for iteration
*/

//#region sample iterator obj, itrerable obj
 let iteratorObject = {
    next() {
        return {
            done: true,
            value: null
        };
    }    
};

 let iterableObject = {
    [Symbol.iterator]() { return iteratorObject; }  
  };
//#endregion

//#region countdownIterator fn and iterable objerct

//@function iterator
let countdownIterator = {
    countdown: 10,
    next() {
        this.countdown -= 1;
        return {
            done: this.countdown === 0,
            value: this.countdown
        };
    }    
};  

//@object
let countdownIterable = {
    [Symbol.iterator]() {
        return Object.assign( {}, countdownIterator ) 
    }
};
let iterator = countdownIterable[Symbol.iterator]();

//console.log(iterator.next());
//> Object {done: false, value: 9}

//console.log(iterator.next());
//> Object {done: false, value: 8}
//#endregion
console.log(typeof countdownIterable,typeof countdownIterator.countdown);
for ( let element of countdownIterable ) {
    //console.log( element );
}

//console.log( [...countdownIterable] );

/**
 * iterators in @arrays
 * iterators in @sets @maps => @dotEntries method
 */
 let message = [...'ok'];

 let pairs = message.entries();
 
 for( let pair of pairs ) {
     console.log( pair );
 }

