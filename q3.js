let info = [
    {
        name: "Bob",
        age: 29
    },
    {
        name: "Alice",
        age: 25
    },
    {
        name: "John",
        age: 45
    },
    {
        name: "Anna",
        age: 36
    }
]
function sortByAge(array){
    array.sort((a,b) => a.age-b.age);
}
sortByAge(info);
console.log(info);
