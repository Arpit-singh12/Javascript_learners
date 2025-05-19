const accountId = 12901
let accountName = "Arpit singh"
var accountmail = "arpit@google.com"

accountCity = "Meerut" // we can declare variable like this but not recommended

let accountState; // it contains undefined value as no input is there...

// accountId = 12000; this operation can not be done as variable type is constant(const) it doesnt allow to change variable value....
console.log(accountId)  

console.table([accountId, accountName, accountmail, accountCity, accountState]);

/*
we are not going to use var in future use.... because of issues in scope and functional scope..
*/