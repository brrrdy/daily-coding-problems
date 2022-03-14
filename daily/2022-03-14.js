/**
 * Author: Cody Zornes
 * Date: 2022-03-14
 * 
 * DCP #41
 * Desc: Given an unordered list of flights to be taken, compute an itinerary
 * from a given starting airport. Ties should go to the lexicographically first.
 * If no possible itinerary exists, return null
 *
 * Ex input: {'start': 'YUL', 'flights': ['SFO', 'HKO'],['YYZ','SFO'],['YUL','YYZ'],['HKO','ORD']}
 * Ex output: ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']
 */

const s1 = "YUL"; 
const f1 = [['SFO', 'HKO'],['YYZ','SFO'],['YUL','YYZ'],['HKO','ORD']];

const s2 = 'a';
const f2 = [['a','b'], ['a','c'], ['b','c'], ['c','a']];

const s3 = 'COM';
const f3 = [['SFO','COM'],['COM','YYZ']];


// space complexity: linear O(N)
// time complexity: O(N*KlogK) where K is avg number of cycles between airports
function solution(start, flights) {
  // space: O(N)
  let flightList = new Map();

  // time: O(N*KlogK)
  for (const flight of flights) {
    let [src, dest] = flight;
    let entry = [];
    if (flightList.has(src)) {
      entry.push(...flightList.get(src), dest);
      // where k is avg num of flight "cycles", O(KlogK)
      flightList.get(src).sort();
    } else {
      entry.push(dest);
    }
    flightList.set(src, entry);
  }

  // space O(N)
  const itinerary = [];
  let next = start;
  // time: O(N)
  while (flightList.has(next)) {
    let src = next;
    itinerary.push(src);
    const destinations = flightList.get(src);
    if (destinations.length > 0) next = destinations.shift();
    if (destinations.length === 0) flightList.delete(src); 
  }
  if (next !== null) itinerary.push(next);

  return itinerary.length === flights.length+1 ? itinerary : null;
}

console.log(solution(s1,f1));