const refs = {
  header: document.querySelector('.header'),
  isOpenCloseMenu: document.querySelector('.menu-button'),
  listNav: document.querySelector('.header-list-url'),
  menu: document.querySelector('.header-container'),
};

resizeWindow();

window.addEventListener('resize', resizeWindow);

refs.listNav.addEventListener('click', e => {
  if(e.target.nodeName  === 'A' && window.innerWidth <= 768) {
    refs.menu.classList.remove('is-open');
    refs.header.classList.remove('is-hidden');
    refs.listNav.classList.add('visually-hidden');
  }
});

refs.isOpenCloseMenu.addEventListener('click', openMenu);

function openMenu() {
  refs.menu.classList.toggle('is-open');
  refs.header.classList.toggle('is-hidden');
  if (refs.menu.classList.contains('is-open')) {
    refs.listNav.classList.remove('visually-hidden');
  } else {
    refs.listNav.classList.add('visually-hidden');
  }
}

function resizeWindow() {
  if (window.innerWidth <= 768) {
    refs.listNav.classList.add('visually-hidden');
  } else {
    refs.menu.classList.remove('is-open');
    refs.listNav.classList.remove('visually-hidden');
  }
}

function openModal() {

}

// function findPath(mountain) {
//   let count = 0;
//   let indexNaighbor = 0;
//   return mountain.reduce((accumulator, currentValue, i, array) => {
//     if(Array.isArray(currentValue)) {
//       return count += findPath(currentValue);
//     }
//     // i === array.length - 1
//     if(accumulator < currentValue && (i === 0 || i + 1 === indexNaighbor || indexNaighbor - 1 === i)){
//     	accumulator = currentValue;
//       indexNaighbor = i;
//       console.log(`accumulator: ${accumulator} indexNaighbor:${indexNaighbor}`);
//     }
// 		return accumulator;
//   }, -1);
// }

// function findPath(mountain) {
//   const path  = mountain.reduce((accumulator, currentValue) => {
//       accumulator[0] += currentValue[0];
//       accumulator[1] += currentValue[currentValue.length - 1];
//       return accumulator;
//   }, [0,0]);

//   return path[0] <=  path[1] ?  path[0] : path[1];
// }

//[[6], [7,10], [12,11,9], [90,25,13,14]]
// console.log(findPath([[3],[7,4],[2,4,6],[8,5,9,3]]));

  // function findPath(mountain) {

  // }
// console.log(count);

// Test failed. Descending weighted mountain - 
// [[55],[54,53],[52,51,50],[49,48,47,46],[45,44,43,42,41],[40,39,38,37,36,35],[34,33,32,31,30,29,28],[27,26,25,24,23,22,21,20],[19,18,17,16,15,14,13,12,11],[10,9,8,7,6,5,4,3,100,1]]
// [[55],
// [54,53],
// [52,51,50],
// [49,48,47,46],
// [45,44,43,42,41],
// [40,39,38,37,36,35],
// [34,33,32,31,30,29,28],
// [27,26,25,24,23,22,21,20],
// [19,18,17,16,15,14,13,12,11],
// [10,9,8,7,6,5,4,3,100,1]]

// 	Expected: 447

// Test failed. One element mountain - 
// [[0],[0,0],[0,0,0],[0,0,0,0],[0,0,0,0,0],[0,0,0,0,0,31],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]

// [[0],
// [0,0],
// [0,0,0],
// [0,0,0,0],
// [0,0,0,0,0],
// [0,0,0,0,0,31],
// [0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0,0,0,0]]

// 	Expected: 31

// Test failed. Symmetrical mountain
// [[3],[1,1],[45,9,45],[82,28,28,82],[32,4,81,4,32],[76,21,96,96,21,76],[34,80,39,98,39,80,34],[10,92,63,73,73,63,92,10],[8,4,78,45,44,45,78,4,8],[96,60,52,21,89,89,21,52,60,96],[24,64,14,1,75,76,75,1,14,64,24],[31,53,98,3,34,96,96,34,3,98,53,31],[89,41,58,94,99,46,51,46,99,94,58,41,89],[13,18,28,12,93,11,92,92,11,93,12,28,18,13],[41,95,44,55,41,40,58,8,58,40,41,55,44,95,41],[73,12,99,10,85,37,86,96,96,86,37,85,10,99,12,73],[73,23,75,30,49,98,28,80,87,80,28,98,49,30,75,23,73],[94,17,7,29,30,87,98,96,73,73,96,98,87,30,29,7,17,94],[28,71,25,71,22,73,28,27,42,5,42,27,28,73,22,71,25,71,28],[9,68,77,45,69,6,61,95,79,59,59,79,95,61,6,69,45,77,68,9]]
// [[3],
// [1,1],
// [45,9,45],
// [82,28,28,82],
// [32,4,81,4,32],
// [76,21,96,96,21,76],
// [34,80,39,98,39,80,34],
// [10,92,63,73,73,63,92,10],
// [8,4,78,45,44,45,78,4,8],
// [96,60,52,21,89,89,21,52,60,96],
// [24,64,14,1,75,76,75,1,14,64,24],
// [31,53,98,3,34,96,96,34,3,98,53,31],
// [89,41,58,94,99,46,51,46,99,94,58,41,89],
// [13,18,28,12,93,11,92,92,11,93,12,28,18,13],
// [41,95,44,55,41,40,58,8,58,40,41,55,44,95,41],
// [73,12,99,10,85,37,86,96,96,86,37,85,10,99,12,73],
// [73,23,75,30,49,98,28,80,87,80,28,98,49,30,75,23,73],
// [94,17,7,29,30,87,98,96,73,73,96,98,87,30,29,7,17,94],
// [28,71,25,71,22,73,28,27,42,5,42,27,28,73,22,71,25,71,28],
// [9,68,77,45,69,6,61,95,79,59,59,79,95,61,6,69,45,77,68,9]]

// 	Expected: 1326

// Test failed. Large mountain - 1000 rows - (truncated) - 
// [[64],[16,25],[52,51,34],[56,22,8,16],[25,96,77,71,3],[56,88,86,10,79,59],[9,6,95,14,43,44,20],[17,58,88,91,94,86,70,57],[30,20,2,55,0,79,51,45,47],[13,65,13,10,11,39,52,44,22,57],[34,77,73,28,95,62,67,94,28,39,49],[16,97,81,45,28,29,79,18,43,75,21,0],[45,57,19,16,88,14,46,33,18,71,33,5,7],[18,36,49,43,0,8,38,30,63,40,46,22,85,28],[56,46,46,35,35,17,75,99,18,75,46,8,23,65,76],[73,25,39,16,63,12,48,57,21,71,96,80,42,5,24,19],[52,61,28,70,53,65,66,71,33,77,33,27,27,72,87,51,66],[60,92,50,69,44,0,76,97,66,85,61,74,2,7,11,1,99,62],[17,32,56,46,73,92,92,5,57,52,50,7,81,95,39,18,32,76,58],[94,30,54,0,43,17,72,14,83,66,14,7,6,72,56,99,18,96,36,74],[87,45,15,58,31,44,26,3,43,77,32,58,63,46,26,19,53,57,12,44,50],[57,64,83,61,94,12,19,71,69,53,14,62,60,16,65,44,25,53,73,96,92,73],[40,25,31,46,20,56,51,1,84,68,84,64,53,11,76,50,36,24,13,93,31,23,15],[32,99,65,39,77,48,68,73,62,68,41,75,63,5,62,60,14,75,93,71,82,24,33,72],[12,6,10,46,25,98,1,11,61,44,78,91,22,8,41,52,93,96,32,2,28,78,16,28,34],[63,25,30,43,36,73,77,53,0,63,28,55,35,27,12,46,83,33,77,62,27,58,68,6,51,94],[7,57,65,44,52,41,34,66,85,57,4,33,89,61,63,86,77,55,91,12,92,38,21,54,33,97,33],[29,79,5,6,42,18,87,50,81,42,81,86,70,71,28,40,47,84,14,51,60,46,31,14,55,33,62,0],[36,33,81,14,9,15,88,4,55,57,14,27,22,67,97,7,97,94,95,54,30,81,15,64,63,99,17,44,6],[97,89,40,89,96,14,17,45,40,38,67,30,98,35,78,9,2,65,26,13,42,13,55,89,27,34,43,35,67,32]]
// [[64],
// [16,25],
// [52,51,34],
// [56,22,8,16],
// [25,96,77,71,3],
// [56,88,86,10,79,59],
// [9,6,95,14,43,44,20],
// [17,58,88,91,94,86,70,57],
// [30,20,2,55,0,79,51,45,47],
// [13,65,13,10,11,39,52,44,22,57],
// [34,77,73,28,95,62,67,94,28,39,49],
// [16,97,81,45,28,29,79,18,43,75,21,0],
// [45,57,19,16,88,14,46,33,18,71,33,5,7],
// [18,36,49,43,0,8,38,30,63,40,46,22,85,28],
// [56,46,46,35,35,17,75,99,18,75,46,8,23,65,76],
// [73,25,39,16,63,12,48,57,21,71,96,80,42,5,24,19],
// [52,61,28,70,53,65,66,71,33,77,33,27,27,72,87,51,66],
// [60,92,50,69,44,0,76,97,66,85,61,74,2,7,11,1,99,62],
// [17,32,56,46,73,92,92,5,57,52,50,7,81,95,39,18,32,76,58],
// [94,30,54,0,43,17,72,14,83,66,14,7,6,72,56,99,18,96,36,74],
// [87,45,15,58,31,44,26,3,43,77,32,58,63,46,26,19,53,57,12,44,50],
// [57,64,83,61,94,12,19,71,69,53,14,62,60,16,65,44,25,53,73,96,92,73],
// [40,25,31,46,20,56,51,1,84,68,84,64,53,11,76,50,36,24,13,93,31,23,15],
// [32,99,65,39,77,48,68,73,62,68,41,75,63,5,62,60,14,75,93,71,82,24,33,72],
// [12,6,10,46,25,98,1,11,61,44,78,91,22,8,41,52,93,96,32,2,28,78,16,28,34],
// [63,25,30,43,36,73,77,53,0,63,28,55,35,27,12,46,83,33,77,62,27,58,68,6,51,94],
// [7,57,65,44,52,41,34,66,85,57,4,33,89,61,63,86,77,55,91,12,92,38,21,54,33,97,33],
// [29,79,5,6,42,18,87,50,81,42,81,86,70,71,28,40,47,84,14,51,60,46,31,14,55,33,62,0],
// [36,33,81,14,9,15,88,4,55,57,14,27,22,67,97,7,97,94,95,54,30,81,15,64,63,99,17,44,6],
// [97,89,40,89,96,14,17,45,40,38,67,30,98,35,78,9,2,65,26,13,42,13,55,89,27,34,43,35,67,32]]

// 	Expected: 73990



// Test failed. Small mountain - 
// [[21],[23,25],[64,36,31],[24,49,50,47],[75,73,34,71,99],[79,72,67,77,60,10],[63,60,83,4,71,66,97],[10,83,24,19,35,5,31,27],[81,21,72,90,37,64,82,47,14],[55,46,36,41,60,24,18,88,40,10]]
// [[21],
// [23,25],
// [64,36,31],
// [24,49,50,47],
// [75,73,34,71,99],
// [79,72,67,77,60,10],
// [63,60,83,4,71,66,97],
// [10,83,24,19,35,5,31,27],
// [81,21,72,90,37,64,82,47,14],
// [55,46,36,41,60,24,18,88,40,10]]

// 	Expected: 559



// Test failed. Large mountain - 
// [[75],
// [95,64],
// [17,47,82],
// [18,35,87,10],
// [20,4,82,47,65],
// [19,1,23,75,3,34],
// [88,2,77,73,7,63,67],
// [99,65,4,28,6,16,70,92],
// [41,41,26,56,83,40,80,70,33],
// [41,48,72,33,47,32,37,16,94,29],
// [53,71,44,65,25,43,91,52,97,51,14],
// [70,11,33,28,77,73,17,78,39,68,17,57],
// [91,71,52,38,17,14,91,43,58,50,27,29,48],
// [63,66,4,68,89,53,67,30,73,16,69,87,40,31],
// [4,62,98,27,23,9,70,98,73,93,38,53,60,4,23]]
// 	Expected: 1074



// Test failed. One large value mountain
// [[1],
// [1,100],
// [1,1,1],
// [1,1,1,1]]
// 	Expected: 103



// Test failed. Small mountain
// [[3],[7,4],[2,4,6],[8,5,9,3]]

// [[3],
// [7,4],
// [2,4,6],
// [8,5,9,3]]
// 	Expected: 23