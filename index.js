// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
  let newArray=[]
  newArray.push(drivers[0]);
  newArray.push(drivers[1]);
  return newArray;
}

const returnLastTwoDrivers= function(drivers){
let newArray=[]
  newArray.push(drivers[drivers.length-2]);
  newArray.push(drivers[drivers.length-1]);
  return newArray;
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  
return function createFareMultiplier (fare) {
    return num * fare;
  }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (array, func) {
  return func(array);
};
