let age: number;

age = 22

let userName: string;

userName = "Thomas";

let isStudent: boolean;

isStudent = true

let obj : {
    name: string,
    age: number
};

obj = {
    name: "hello",
    age: 12
}

// obj = {
//     name: "hello",
//     age: "12"
// }

let arr: (string|number)[] = [1, "test"] // unison type

let str = "test" // type inference - whatever value a variable is declared as typescript will automatically declare it as that value type

//str = 1

let obj2: {
    name: string;
    age: number;
}[];

type Person = {
    name: string;
    age: number
}

let people: Person = {
    name: "test1",
    age: 28
}

function insertAtBeginning(array: any[], value: any) {
    const newArr = [value, ...array]
    return newArr
}

console.log(insertAtBeginning([2, 3, 4], 1));

let numbers: number[] = [1, 2, 3]