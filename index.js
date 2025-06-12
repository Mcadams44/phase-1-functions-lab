// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  const hqStreet = 42;
  return Math.abs(street - hqStreet);
}
function distanceFromHqInFeet(street) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(street) * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}   
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free for the first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // $0.02 per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25 for distances between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // Cannot travel more than 2500 feet
  }
}