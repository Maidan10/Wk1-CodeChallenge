function checkSpeed(speed) {
    const speedLimit = 70; 
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}
checkSpeed(80);
checkSpeed(130);
checkSpeed(65); 