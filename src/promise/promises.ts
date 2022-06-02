// creating a promise
let i=11;
let isEven = new Promise(function(resolve
    ,reject){
        if(i%2 ===0)
        resolve(i)
        // call resolve( value ) to resolve a promise
        // call reject( reason ) to reject a promise
        else{
            
            reject("is not even")

        }
    })

let prom = Promise.resolve(5)
isEven.then(
    (x) => {console.log(x);},ex => {throw new Error(ex)
});

    