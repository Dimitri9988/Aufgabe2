const userName = "Dimitri9988";

const beterUserName = {
    firstName : "Dimitri",
    lastName : "Steiner",
    username : "Dimitri9988",
};

const beterUserName2 = {
    ...beterUserName,
    age : 17,
}
const beterUserName3 = {
    ...beterUserName2,
    age : 18.08-2006,
}
const { age, ...newbeterUserName} = beterUserName3;


beterUserName
beterUserName2
beterUserName3
newbeterUserName