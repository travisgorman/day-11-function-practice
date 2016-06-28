// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in JavaScript.
// ---------------------

function max( num1, num2 ){
  if (num1 > num2){
    return num1;
  }else{
    return num2;
  }
}

// console.log( 'function max(): The bigger of the two numbers is ' + max(3,6) );

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree( num1, num2, num3 ){
    var three = [ num1, num2, num3 ];
    var max = 0;
    for( i=0; i<three.length; i++ ){
      if (three[i] > max){
        max = three[i];
      }
    }
    return max;
}

// console.log( 'function maxOfThree(): the bigger of the three numbers is ' + maxOfThree(3,6,1) );

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel( c ){
    var answer = false;
    var vowels = ['a','e','i','o','u'];
      vowels.forEach( function( letter ){
        if ( letter === c ){
          answer = true;
        }
      });
      return answer;
}


// ===== /// with `indexOf()`
function isVowel2( c ){
    var vowels = ['a','e','i','o','u'];
    if ( vowels.indexOf( c ) > -1 ) {
      return true;
    } else
      return false;
}
// isVowel2('q');
// expects false
// isVowel2('a');
// expects true



// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

// function rovarspraket( str ){
//   var vowels = ['a','e','i','o','u'];
//   var space = ' ';
//   var translated = [];
//   var phrase = str.split('');
//     phrase.forEach( isVowel( letter )) === true
//       || letter === space ) {
//         translated.push( letter );
//     }
//   console.log(translated);
  // console.log( phrase );
    // if vowel
      // push phrase[i] to `translated`
    // if consonant
      // push phrase[i] to `translated`
      // push 'o' to `translated`
      // push phrase[i] to `translated`
  // return translated;
//}

function rovarspraket(str){
  var space = ' ';
  var translated = [];
  var phrase = str.split('')
    .forEach(function( item ){
      if (isVowel2( item )){
        translated.push( item );
    }
  });
  return translated;
}
// if ( isVowel( letter )){
//   translated.push( letter )
// }



// === im stuck with this one...



// expects

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// function reverse( str ){
//     var arr = str.split('');
//     var rev = arr.reverse();
//     var revString = rev.join('');
//     return revString;
// }

// reverse('travis');
// expects "sivart"

// same as above with chained methods
function reverse( str ){
  return str.split('').reverse().join('');
}
// reverse('travis');
// expects "sivart"
