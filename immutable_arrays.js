const userArrays = [
    user1 = {id : 1, firstName : "Dimitri",lastName : "Steiner",username : "Dimitri9988"},
    user2 = {id : 2,firstName : "Hanna",lastName : "Klein",username : "Hanna_123"},
    user3 = {id : 3,firstName : "Dimitri",lastName : "Mueller",username : "Dimitri98"},
];

const updateUserArrays = [...userArrays, user4 = {id : 4, firstName : "Frank",lastName : "Torben",username : "TorbenFrank_1999_Hoffweg12"}];
const updateUserArrays2 = updateUserArrays.map(changeName);
    
function changeName(person) {
    if (person.id === 3) {
        return { ...person, lastName: "Zinkler" }
    }
    return person;
}

const updateUserArrays3 = updateUserArrays2.filter((person) => {
    return person.id !== 1 ;
})



console.log(userArrays);
console.log(updateUserArrays);
console.log(updateUserArrays2);
console.log(updateUserArrays3);


const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

function sum(number1, number2) {
    return number1 + number2;
}

const total = reviews.reduce(sum);
const totalAverage = total / reviews.length

console.log(totalAverage);
console.log(total)


const groupByReviews = (groups, grade ) => {
    const { good = 0, bad = 0, ok = 0} = groups;
    if (grade >= 4) {
        return {...groups, good: good + 1};
    }
    else if (grade >= 2.5) {
        return {...groups, ok: ok + 1};
    }
    return {...groups, bad: bad + 1};
}

const groupReviews = reviews.reduce(groupByReviews, {});
console.log(groupReviews);


