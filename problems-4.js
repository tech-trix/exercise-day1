/*
    You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the
    integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make
    this happen, return -1.

    For example:
    Let's say you are given the array [1,2,3,4,3,2,1]:
    Your function will return the index 3, because at the 3rd position of the array,
    the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
*/

function findEvenIndex(arr) {
    let pos=-1;
    for(let i=1;i<arr.length;i++){
       let sumToLeft=0;
       let sumToRight=0;
       for(let j=0;j<i;j++){
        sumToLeft=sumToLeft+arr[j];
       } 
       for(let k=i+1;k<arr.length;k++){
        sumToRight=sumToRight+arr[k];
       }
       if(sumToLeft==sumToRight) {
        return i;
       }        
    }
    return pos;
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.findEvenIndex = findEvenIndex