const tickets = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'], 
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG'],
];

// search and find the one with null as the first index.
// Then we take the next element in that array.
// if it's null then we know we've reached the end.
// if it's not null then we add it to the return array.
// then we search the list again. Looking for the next element in the array as the first element in the other arrays.
// As log as it's not null, we keep going.


const reconstructTrip = (arr) => {


}

console.log(reconstructTrip(tickets))



