var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 22;
var userName;
userName = "Thomas";
var isStudent;
isStudent = true;
var obj;
obj = {
    name: "hello",
    age: 12
};
// obj = {
//     name: "hello",
//     age: "12"
// }
var arr = [1, "test"]; // unison type
var str = "test"; // type inference - whatever value a variable is declared as typescript will automatically declare it as that value type
//str = 1
var obj2;
var people = {
    name: "test1",
    age: 28
};
function insertAtBeginning(array, value) {
    var newArr = __spreadArray([value], array, true);
    return newArr;
}
console.log(insertAtBeginning([2, 3, 4], 1));
