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
    return array.sort((a,b) => a.age-b.age);
}
console.log(sortByAge(info));
