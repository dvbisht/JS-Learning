const accountId = 1234
let accountEmail = "dv@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 111222;
console.log(accountId);
/*
Prefer not to use var
because of issues in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);