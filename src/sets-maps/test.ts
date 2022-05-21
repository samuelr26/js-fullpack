function removeDuplicatesFromArray (arr){
    const set = new Set(arr);
    return [...set];
}

let Square = ( function() {
    let _width = new WeakMap();
    class Square {
      constructor( width ) {
      _width.set( this, width );
    }
    get area() {
      let width = _width.get( this );
      return width * width;
    }
  }
  return Square;
  } )();

let union = ( set1, set2 ) => new Set( [...set1, ...set2] );
let intersection = ( set1, set2 ) => new Set( [...set1].filter(( elem ) => set2.has( elem )) );
let difference = ( set1, set2 ) => new Set( [...set1].filter( ( elem ) => !set2.has( elem )) );