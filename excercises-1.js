///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum( a, b ){
  return a + b;
}

// console.log(sum(2,5));

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg( arg1, arg2, arg3 ){
  return arg1 + arg2 + arg3 / 3;
}

// avg(11, 26, 8);
// expects 39.666666666666664

        function prettyMuchAvg ( arg1, arg2, arg3 ){
          var avg = arg1 + arg2 + arg3 / 3;
          return Math.round( avg );
        }

// prettyMuchAvg(11, 26, 8);
// expects 40;



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength( thing ) {
  return thing.length;
}

// getLength('string')
// 6



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan( arg1, arg2 ) {
  return ( arg2 > arg1 ) ? true : false;
}

// greaterThan( 5, 4 );
// false
// greaterThan( 5, 7 );
// true

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
  return "Hello, " + name;
}

// greet("Travis");
// Hello, Travis


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// =========================

// Array.splice()
// split string into array
// forEach array and if index is even

function madlib(s1, s2, s3, s4){
  var sentence = "quick brown fox jumps over the fence".split(' ');
      sentence.splice(0,0,s1);
      sentence.splice(2,0,s2);
      sentence.splice(4,0,s3);
      sentence.splice(6,0,s4);
      return sentence.join(' ');
}

// console.log( madlib('wiz', 'bang', 'wee', 'woo') );


// madlib('SPLENDID!', 'jiggery-pokery', 'smidge', 'slovenly' );
// expects "SPLENDID! quick jiggery-pokery brown smidge fox slovenly jumps over the fence"

// not sure why i can't get the prettier version below to work

// function madlib2(s1, s2, s3, s4){
//   var sentence = "quick brown fox jumps over the fence";
//     .split(' ')
//       .splice(0,0,s1)
//         .splice(2,0,s2)
//           .splice(4,0,s3)
//             .splice(6,0,s4)
//               .join(',');
//       return sentence.join(' ');
// }


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
