
/**
 * 
 * @param literalFragments is an array of Strings that store fragments of the template literal. We use substitutions to split the original template literal.
 * @param substitutionValues contains the values of ${...} substitutions
 */

function tagFunction( literalFragments:string, ...substitutionValues:string[] ) {


}


let emulatedSubs = '${sub1}abc ${sub2} def${sub3}'
        .split( /\${\w*}/ );
console.log(emulatedSubs);
