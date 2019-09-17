const returnFirstTwoDrivers = function(driver) {return [driver[0], driver[1]] };
const returnLastTwoDrivers = function(driver) {return [driver[driver.length - 2], driver[driver.length -1]] };
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiply) {
    return function(num) {
        return num * multiply
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}