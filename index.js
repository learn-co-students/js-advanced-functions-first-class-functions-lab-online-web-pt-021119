// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
 }

 const returnLastTwoDrivers = drivers => drivers.slice(-2);

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = function (multiplier) {
   return function(num) {return num * multiplier};
 }

 const fareDoubler = createFareMultiplier(2);

 const fareTripler = createFareMultiplier(3);

 const selectDifferentDrivers = (drivers, func) => func(drivers);