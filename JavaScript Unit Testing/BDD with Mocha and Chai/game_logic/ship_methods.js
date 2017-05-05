function checkForShip (player, coordinates) {

  // return false if player has no ships at given coordinates
  var shipPresent, ship;

  // loop through all the ships in the ships array and check each of their coorindates
  // against the one we're giving the function
  for (var i= 0; i < player.ships.length; i++) {
    ship = player.ships[i];  // current ship

    // filter the current ship's location array down by comparing each value
    // to the given coordinates (looking for a match here)
    shipPresent = ship.locations.filter(function (actualCoordinate) {
      // return an array containing only coordindates that match. no matches = empty array
      return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
    })[0];

    if (!shipPresent) {
      return false;
    }
  }
}

module.exports.checkForShip = checkForShip;
