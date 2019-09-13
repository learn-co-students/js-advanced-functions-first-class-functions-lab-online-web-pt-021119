<<<<<<< HEAD
 const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2) }; 

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier  = function(multiply){
  return function(num) {
    return num * multiply
  }
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (list,fn) {
  return fn(list);
}
=======
 const returnFirstTwoDrivers(driver) = function() {
    return driver[0],[1] }; 


>>>>>>> 3d96f8b46f3690b6ecc81114ccc9244e01add833
