// console.assert( assertion, errorMessage );
console.assert( sum(2, 3) === 5,
  'sum() expects 5' );
console.log('sure it is')

console.assert( avg(11, 26, 8)===39.666666666666664,
  'avg() failed - get back in there and fix your filthy code');

console.assert( getLength('string') === 6,
  'getLength() expects 6' );

console.assert( greaterThan( 5, 4 )===false,
  'greaterThan failed. expects false' );

console.assert( greet("Travis")==='Hello, Travis',
  'greet() failed. whadjadoo??' );

console.assert( madlib('SPLENDID!', 'jiggery-pokery', 'smidge', 'slovenly' ) ===
'SPLENDID! quick jiggery-pokery brown smidge fox slovenly jumps over the fence',
'madlib() failed. Go have a look' );

console.assert( max(3,6) === 6,
  'max() failed' );

console.assert( maxOfThree(3,7,1)===7,
  'maxOfThree() === miserable failure' );

console.assert( isVowel('a')===true,
  'isVowel() is acting all buggy');

console.assert( rovarspraket( 'this is a phrase' ) === 'tothohisos isos a pophrorasose',
  'HA! BUSTED! You didn\'t even finish this one, did you?' );

console.assert( reverse('travis') ==='sivart',
  'reverse() doesn\'t do it\'s thing' );


console.assert(largestNumber( numbers )=== 101,'largestNumber() failed' );

console.assert( largestString( strings ) ==='collection','largestString() failed');

console.assert(evenNumbers(numbers) === [12, 4, 18, 6],'evenNumbers() failed- expects [12, 4, 18, 6] and instead, got'); console.log(evenNumbers(numbers));
console.log('wtf');

console.assert(oddNumbers( numbers ) === [1, 9, 7, 11, 3, 101, 5],'oddNumbers() failed- expects [1, 9, 7, 11, 3, 101, 5] and instead, got ' );
console.log(oddNumbers(numbers));
console.log('huh');
console.log('i contest');

console.assert(isFinder( strings ) === ['this','is'], 'isFinder() failed. You were trying to get cute, weren\'t you?');

console.assert(stringsAndNumbers === ["this", "is", "a", "collection", "of", "words", 1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6], 'stringsAndNumbers() failed. Probably just a semicolon or something' );
