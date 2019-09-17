function returnFirstTwoDrivers(arr) {
    const nonameFunc = (function () {
        return arr.slice(0, 2);
    })();
    return nonameFunc;
};

function returnLastTwoDrivers(arr) {
    const nonameFunc = (function () {
        return arr.slice(-2);
    })();
    return nonameFunc;
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(multiplier) {
    const nonameFunc = (function (fare) {
        return fare * multiplier;
    });
    return nonameFunc;
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