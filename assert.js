var somePhrasage = 'this is a phrase';

function isVowel2( c ){
    var vowels = ['a','e','i','o','u'];
    if ( vowels.indexOf( c ) > -1 ) {
      return true;
    } else
      return false;
}

function vowelPusher( c ){
    var vowels = ['a','e','i','o','u'];
    if ( vowels.indexOf( c ) > -1 ) {
      return true;
    } else
      return false;
}



// function rovarspraket( str ){
//   var space = ' ';
//   var translated = [];
//   var phrase = str.split('')
//     .forEach( isVowel( letter ) ){
//       if (letter){

//       }
//     }
// }



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

// im stuck with this one

// rovarspraket( somePhrasage );
// expects "tothohisos isos a pophrorasose"


var sentence = "quick brown fox jumps over the fence".split(" ");
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');
var newPhrase = sentence.splice(0, 0, str1 )

// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed


function madlib( s1,s2,s3,s4 ) {
  var sentence = "quick brown fox jumps over the fence";
  var splitSentence = sentence.split(' ');
  return splitSentence.splice(0, 0, str1 );

  console.log( splitSentence );
  console.log( sentence );
  console.log( one );
  
  
}


// this one does what i want, but by side effect. It doesn't return the sentence on it's own. Have to call `sentence` to see result

function madlib(s1, s2, s3, s4){
  var sentence = "quick brown fox jumps over the fence".split(' ');
      sentence.splice(0,0,s1);
      sentence.splice(2,0,s2);
      sentence.splice(4,0,s3);
      sentence.splice(6,0,s4);
      return sentence.join(' ');
}

console.log( madlib('wiz', 'bang', 'wee', 'woo') );


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

