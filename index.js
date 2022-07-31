function distanceFromHqInBlocks (someValue) {
    const Hq = 42;
    if (someValue < 42) {
        return Hq - someValue
    }
    return someValue - Hq;
}
function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}
function distanceTravelledInFeet (start, destination) {
    if (destination < start) {
        return (start - destination)*264
    }
    return (destination - start)*264
};
function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start, destination) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet (start, destination) < 2000) {
        return (distanceTravelledInFeet (start, destination) - 400)*.02
    }
    else if (distanceTravelledInFeet (start, destination) < 2500) {
        return 25
    }
    else if (distanceTravelledInFeet (start, destination) > 2500) {
        return 'cannot travel that far'
    }
    
}