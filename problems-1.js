/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {
    var isSorted = true;
    var direction = "not applicable";

    if(nums.length==1){
        isSorted = true;
    }else{
        if(nums[0]<nums[1]){
            direction="ascending";     
        }else{
            direction="descending";
        }

        if(direction=="ascending"){
            for(let index=1;index<=nums.length;index++){
                if(nums[index-1]>nums[index]){
                    isSorted=false;
                    direction = "not applicable";
                    break;
                }
            }
        }else if(direction=="descending"){
            for(let index=1;index<=nums.length;index++){
                if(nums[index-1]<nums[index]){
                    isSorted=false;
                    direction = "not applicable";
                    break;
                }
            }
        }
    }

    isSorted = isSorted?"yes":"no";

    return isSorted+(direction=="not applicable"?"":(", "+direction));
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow