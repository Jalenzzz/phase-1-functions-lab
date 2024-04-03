function distanceFromHqInBlocks(pickupLocation) {
    const hqStreet = 42; // Scuber Headquarters is on 42nd Street
    const distanceInBlocks = pickupLocation < hqStreet ? hqStreet - pickupLocation : pickupLocation - hqStreet; // Calculate distance with ternary expression
    return distanceInBlocks; 
  }
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264; //Each block in Manhattan is 264 feet long.
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation); // Reuse the block distance calculation
    const distanceInFeet = distanceInBlocks * feetPerBlock; // Convert distance in blocks to feet
    return distanceInFeet;
  }  
function distanceTravelledInFeet(startBlock, destinationBlock) {
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destinationBlock - startBlock); // Calculate the distance in blocks 
    const distanceInFeet = distanceInBlocks * feetPerBlock; // Calculate the distance in feet
    return distanceInFeet;
  }

function calculatesFarePrice(startBlock, destinationBlock) {
    const farePerFoot = 0.02; // 2 cents per foot
    const flatFare = 25; // $25 flat fare rate

    const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distanceInFeet <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const chargeableDistance = distanceInFeet - 400; // Distance beyond the free 400 feet
      return chargeableDistance * farePerFoot;
    } else if (distanceInFeet <= 2500) {
      return flatFare;
    } else {
      return 'cannot travel that far';
    }
  }