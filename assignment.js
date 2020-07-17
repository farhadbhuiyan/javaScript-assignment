/*===================================================
function for feet to mile conversion...
=====================================================*/
function feetToMile(feetValue) {

  if (typeof feetValue == 'number' && feetValue >= 0) {

      var mileValue = feetValue / 5280;
      return mileValue.toFixed(3);
  } else {
      var errorMessage = "Please enter a valid value. (N.B: Your value shouldn't be a string or a negative number)";
      return errorMessage;
  }

}
var mile = feetToMile(4342322);
console.log(mile + " mile");

/*===================================================================================
function for calculate required wood for making given number of chair, table and bed
====================================================================================*/

function woodCalculator(numOfChair, numOfTable, numOfBed) {

  if ((typeof numOfChair == 'number' && numOfChair >= 0) && (typeof numOfTable == 'number' && numOfTable >= 0) && (typeof numOfBed == 'number' && numOfBed >= 0)) {

      var requiredWood = numOfChair * 1 + numOfTable * 3 + numOfBed * 5;
      return requiredWood;
  } else {
    var errorMessage = "Please enter a valid value. (N.B: Your value shouldn't be a string or a negative number)";
    return errorMessage;
  }
}
var woodTotal = woodCalculator(2, 4, 5);
console.log(woodTotal + " cubic feet wood is required");

/*===================================================================================
function for calculate total number of bricks for  given number of floor
====================================================================================*/

function brickCalculator(numOfFloor) {
  var buldingHeight = 0;

  if (typeof numOfFloor == 'number' && numOfFloor >= 1 && numOfFloor <= 10) {
      buldingHeight = numOfFloor * 15;
  } else if (typeof numOfFloor == 'number' && numOfFloor >= 11 && numOfFloor <= 20) {
      buldingHeight = 10 * 15 + (numOfFloor - 10) * 12;
  } else if (typeof numOfFloor == 'number' && numOfFloor > 20) {
      buldingHeight = 10 * 15 + 10 * 12 + (numOfFloor - 20) * 10;
  } else {
    var errorMessage = "Please enter a valid value. (N.B: Your value shouldn't be a string or a negative number)";
    return errorMessage;
  }
  if (buldingHeight > 0) {
      var requiredBricks = buldingHeight * 1000;
      return (requiredBricks);
  }
}

var totalBricks = brickCalculator(21);
console.log('Required bricks are ' +totalBricks);

/*===================================================================================
function for find a tiny name of friend form a friends name array
====================================================================================*/

function tinyFriend(friendsName) {
  var minLength = friendsName[0].length;

  for (var i = 1; i < friendsName.length; i++) {
      if (friendsName[i].length < minLength) {

          minLength = friendsName[i].length;
          var tinyName = friendsName[i];
      }
  }
  if (typeof tinyName == 'string' && tinyName.length != 0) {
      return tinyName;
  } else {
      var errorMessage = "Please enter a valid value. (N.B: Your friend's name shouldn't be an empty string or a number)";
      return errorMessage;
  }
}
var tinyFriendName = tinyFriend(['Farhad', 'Sakib', 'Mashrafee', 'Lala', 'Tamim']);
console.log('Your tiny friend name is ' + tinyFriendName);

