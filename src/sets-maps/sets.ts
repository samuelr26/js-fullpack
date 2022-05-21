/**
 * @sets :  unordered collection of distinct elements
 * @maps : A map is a collection of key-value pairs, distinct from typical @object
 * @Set : ordered lsit of unique elements.
*/

let colors = new Set();

colors.add('red')
colors.add('green')
colors.add('red')
colors.add('blue')
colors.add('cyan')
//console.log(colors, colors.size, colors.has('red')); //> Set {"red", "green"}

colors.delete('green')
//console.log(colors);


/** 
* @Iterations : @forEach & @for..of
*/

colors.forEach(v => console.log() /*console.log(`printing new values: ${v} \n`)*/)

for( let v of colors){/*console.log(` using for loop..of loop :${v}`);*/}

