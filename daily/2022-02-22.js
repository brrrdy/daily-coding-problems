/**
 * Author: Cody Zornes
 * Date: 2022/02/22
 * 
 * DCP #21
 * Desc: Given an array of time intervals (start, end) for classroom 
 * lectures (possibly overlapping), find the minimum number of rooms 
 * required.
 * 
 * Ex input: [(30, 75), (0, 50), (60, 150)]
 * Ex output: 2
 * 
 */

function findMinRooms(schedule) { 
  let startTimes = [];
  let endTimes = [];
  
  schedule.forEach(function(lecture){ 
    startTimes.push(lecture[0]); 
    endTimes.push(lecture[1]);
  });

  const sortedStartTimes = startTimes.sort((a,b) => a-b);
  const sortedEndTimes = endTimes.sort((a,b) => a-b);

  let maxRoomsNeeded = 0;
  let minRooms = 0;

  let i = 0;
  let j = 0;
  while (i < sortedStartTimes.length) {
    if (sortedStartTimes[i] <= sortedEndTimes[j]) {
      minRooms++;
      i++;
    } else {
      minRooms--;
      j++;
    }
    if (minRooms > maxRoomsNeeded) {
      maxRoomsNeeded = minRooms;
    }
  }
  return maxRoomsNeeded;
}

let schedule1 = [[30, 75], [0, 50], [60, 150]];
let schedule2 = [[17,20], [10,15], [12,30], [1,13], [0,1], [0,1], [0,20]];
let schedule3 = [[0,1]]
console.log(findMinRooms(schedule3));