// Code your solution here
// const drivers = [
//     {
//         name: 'Bobby',
//         hometown: 'Pittsburgh'
//     },
//     {
//         name: 'Sammy',
//         hometown: 'New York'
//     },
//     {
//         name: 'Sally',
//         hometown: 'Cleveland'
//     },
//     {
//         name: 'Annette',
//         hometown: 'Los Angeles'
//     },
//     {
//         name: 'Bobby',
//         hometown: 'Tampa Bay'
//     }
// ];

//  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


// findmatching
function findMatching(drivers, conditionalName) {
    return drivers.filter(sName => {
        return (sName.toUpperCase() === conditionalName.toUpperCase()
        )// end of ivoke anonimous fucntion
    })

}// end of findMatching function

// console.log(findMatching(drivers,"bobby"));

// fuzzyMatch 


function fuzzyMatch(arrDrivers, sArgument) {
    return arrDrivers.filter(firstLetters => {
        return (firstLetters.indexOf(sArgument) === 0);
    }
    );

}// end of 


// testing
// console.log(fuzzyMatch(drivers,"bb"));
// console.log(fuzzyMatch(drivers,"Bo"));

// matchName

function matchName(arrDrivers, sArgument) {
    return arrDrivers.filter( driverObj =>  driverObj.name === sArgument); 
}

// testing
console.log(matchName(drivers, "Bobby"));


