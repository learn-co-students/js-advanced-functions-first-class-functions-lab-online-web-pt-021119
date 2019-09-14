// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  const anonFunc = (function() {
    return arr.slice(0, 2);
  })();
  return anonFunc;
};

function returnLastTwoDrivers(arr) {
  const anonFunc = (function() {
    return arr.slice(-2);
  })();
  return anonFunc;
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(multiplier) {
  const anonFunc = (function(fare) {
    return fare * multiplier;
  });
  return anonFunc;
};

function fareDoubler(fare) {
  const doubledFare = createFareMultiplier(2)(fare);

  return doubledFare;
};

function fareTripler(fare) {
  const tripledFare = createFareMultiplier(3)(fare);

  return tripledFare;
};

function selectDifferentDrivers(arr, func) {
  const driversArray = func(arr);

  return driversArray;
}
