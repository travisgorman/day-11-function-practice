// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

var moreWords = ['this', 'squiggling', 'ships', 'isis', 'miss', 'nope'];

// ---------------------------
// 1. Find largest number
// ---------------------------

function largestNumber(arr){
  var largeNumber = 0;
  for(var i = 0; i < arr.length; i++){
    if ( arr[i] > largeNumber ){
      largeNumber = arr[i];
    }
  }
  return largeNumber;
}

largestNumber( numbers );
// expects 101


// ---------------------------
// 2. Find longest string
// ---------------------------
function largestString( arr ){
  var largeString = '';
  for(var i = 0; i < arr.length; i++){
    if ( arr[i].length > largeString.length ){
      largeString = arr[i];
    }
  }
  return largeString;
}

largestString( strings );
// expects 'collection'

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNumbers( arr ) {
  var even = [];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      even.push( arr[i] );
    }
  }
  return even;
}

console.log( evenNumbers( numbers ) );
// expects [12, 4, 18, 6]

// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNumbers( arr ) {
  var odd = [];
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
      odd.push( arr[i] );
    }
  }
  return odd;
}

console.log(oddNumbers( numbers ));
// expects [1, 9, 7, 11, 3, 101, 5]

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function isFinder( arr ){
  var hasIs = [];
  var noIs = [];

    arr.forEach( function( word ){
      if ( word.test( /\w*is\w*/ ) === true ){
        hasIs.push( word );
      } else {
        noIs.push( word );
      }
  });
  return hasIs;
}

console.log( isFinder( moreWords ) );

// console.log( /\w*is\w*/.test( 'this' ) );
// console.log( /\w*is\w*/.test( 'squiggling' ) );
// console.log( /\w*is\w*/.test( 'Travis' ) );
// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var stringsAndNumbers = strings.concat( numbers );
console.log( stringsAndNumbers );

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
