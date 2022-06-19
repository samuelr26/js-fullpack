import { myAccount } from "./reflect-object";

// get proto using Reflect API
let classOfMyAccount = Reflect.getPrototypeOf(myAccount);
//@ts-ignore
//console.log(myAccount.prototype === classOfMyAccount.prototype);
// True


//set proto using Reflect

let newProto = {
    get contact() {
        return `${this.name} - 555-1269`;
    }
}

Reflect.setPrototypeOf( myAccount, newProto );

console.log( myAccount.contact ); 
//> "Zsolt - 555-1269"
