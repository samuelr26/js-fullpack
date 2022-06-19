
let target = class Account {
     name:string;
     email:string;
    constructor( name, email ) {
        this.name = name;
        this.email = email;
    }  
    get contact() {
        return `${this.name} <${this.email}>`;
    }
};
let args2 = [ 
    'Zsolt', 
    'info@zsoltnagy.eu' 
];
let newTarget = class PrivateAccount {
    get contact() {
        return 'Private';
    }
}


let myAccount = Reflect.construct(
    target,
    args2,newTarget );

console.log(myAccount); 
//> PrivateAccount { name: 'Zsolt', email: 'info@zsoltnagy.eu' }
console.log(myAccount.contact);
//> Private
export {target,myAccount}
