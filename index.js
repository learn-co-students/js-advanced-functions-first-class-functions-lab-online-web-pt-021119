const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(divisor) {
  return function(number) {
    return divisor * number;
  };
};

const fareDoubler = function(number) {
  return function() {
    return number * 2;
  }();
};

const fareTripler = function(number) {
  return function() {
    return number * 3;
  }();
};

const selectDifferentDrivers = function(drivers, func) {
  return func(drivers);
};
