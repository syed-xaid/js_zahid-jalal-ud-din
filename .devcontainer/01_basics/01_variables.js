const accountId =144553

let accountEmail="zahid@gmail.com"
var accountPassword="zahid123"
accountCity="Srinagar"

//investegation

// accountId=2 // when we try to reassign the value of const variable it will throw an error.
accountEmail="syed@gmail.com"// when we try to reassign the value of let variable it will not throw an error.
accountPassword="syed123"// when we try to reassign the value of var variable it will not throw an error.
accountCity="pulwama"// when we try to reassign the value of variable without using let,var,const it will not throw an error.


console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var keyword in modern javascript.
because of the following reasons:
1. var keyword has function scope.
2. var variables are hoisted to the top of their function.
3. var variables can be redeclared.
4. var variables can be updated.
5. var variables can be declared without an initial value.
the main issue is in block scope, and funcitonal scope.
*/