// Math Extensions Library


Math.randomInt = function (low, high) {
    // Return a random integer betwwen low(inclusive) and high (exclusive)
    return Math.floor(Math.random() * (high - low) + low)
}

Math.randomDec = function (low, high) {
    // Return a random decimal betwwen low(inclusive) and high (exclusive)
    return Math.random() * (high - low) + low
}

Math.roundTo = function (num, numPlaces) {
    // Round num off to the nearest numPlaces
    num = num * 10 ** numPlaces;
    num = Math.round(num);
    return num / 10 ** numPlaces;
}

Math.randomElement = function (anArray) {
    // Randomly select and return an element from anArray
    return anArray[Math.randomInt(0, anArray.length)];
}